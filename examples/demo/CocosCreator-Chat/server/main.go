package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"strings"

	"github.com/lonnng/nano"
	"github.com/lonnng/nano/component"
	"github.com/lonnng/nano/serialize/protobuf"
	"github.com/lonnng/nano/session"

	pb "github.com/lonnng/nano/examples/demo/CocosCreator-Chat/server/message"
)

type (
	// Room represents a component that contains a bundle of room related handler
	// like Join/Message
	Room struct {
		component.Base
		group *nano.Group
		timer *nano.Timer
		stats *stats
	}

	stats struct {
		outboundBytes int
		inboundBytes  int
	}
)

func (stats *stats) outbound(s *session.Session, in []byte) ([]byte, error) {
	stats.outboundBytes += len(in)
	return in, nil
}

func (stats *stats) inbound(s *session.Session, in []byte) ([]byte, error) {
	stats.inboundBytes += len(in)
	return in, nil
}

// NewRoom returns a new room
func NewRoom() *Room {
	return &Room{
		group: nano.NewGroup("room"),
		stats: &stats{},
	}
}

// AfterInit component lifetime callback
func (r *Room) AfterInit() {
	nano.OnSessionClosed(func(s *session.Session) {
		r.group.Leave(s)
	})
	r.timer = nano.NewTimer(time.Minute, func() {
		println("UserCount: Time=>", time.Now().String(), "Count=>", r.group.Count())
		println("OutboundBytes", r.stats.outboundBytes)
		println("InboundBytes", r.stats.outboundBytes)
	})
}

// Join room
func (r *Room) Join(s *session.Session, msg []byte) error {
	fakeUID := s.ID() //just use s.ID as uid !!!
	s.Bind(fakeUID)   // binding session uid
	s.Push("AllMembers", &pb.AllMembers{Members: r.group.Members()})
	// notify others
	r.group.Broadcast("NewUser", &pb.NewUser{Content: fmt.Sprintf("New user: %d", s.ID())})
	// new user join group
	r.group.Add(s) // add session to group
	return s.Response(&pb.JoinResponse{Result: "success"})
}

// Message sync last message to all members
func (r *Room) Message(s *session.Session, msg *pb.UserMessage) error {
	return r.group.Broadcast("UserMessage", msg)
}

func main() {
	// override default serializer
	nano.SetSerializer(protobuf.NewSerializer())
	// nano.SetSerializer(json.NewSerializer())

	// rewrite component and handler name
	room := NewRoom()
	nano.Register(room,
		component.WithName("room"),
		component.WithNameFunc(strings.ToLower),
	)

	// traffic stats
	nano.Pipeline.Outbound.PushBack(room.stats.outbound)
	nano.Pipeline.Inbound.PushBack(room.stats.inbound)

	nano.EnableDebug()
	log.SetFlags(log.LstdFlags | log.Llongfile)
	nano.SetWSPath("/nano")

	nano.SetAutoDictionary("UserMessage", "NewUser", "AllMembers", "UserMessage", "room.join", "JoinResponse")

	http.Handle("/web/", http.StripPrefix("/web/", http.FileServer(http.Dir("web"))))

	nano.SetCheckOriginFunc(func(_ *http.Request) bool { return true })
	nano.ListenWS(":3250")
}
