var Serialization = require("serialization")

cc.Class({
    extends: cc.Component,

    properties: {
        editBox: cc.EditBox,
        frame: cc.ScrollView,
        linePrefab: cc.Prefab,
        sendBtn: cc.Button
    },

    // use this for initialization
    onLoad: function () {
        this._idx = Math.pow(2, 50);
        this.nickname = '';
        this.nickname += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        this.nickname += (Math.floor(Math.random() * 9000) + 1000);
        this.initNetwork();
    },
    addMessage: function (name, content) {
        // cc.log(name + ": " + content)
        var line = cc.instantiate(this.linePrefab);
        var m = '[<color=red>' + name + '</color>] ' + (content || "");
        line.getComponent(cc.RichText).string = m;
        this.frame.content.addChild(line)
        this.updateConent();
    },
    updateConent: function () {
        var spaceY = 0;
        var curY = 0;
        var items = this.frame.content.children;

        for (var i = items.length - 1; i >= 0; i--) {
            curY += spaceY;
            items[i].y = curY;
            curY += items[i].height;
        }
    },

    initNetwork: function () {
        var onMessage = (msg) => {
            cc.log(msg);
            this.addMessage(msg.Name, msg.Content)
        };

        var join = (data) => {
            cc.log(data);
            if (data.code === 0 || data.hasOwnProperty("code") === false) {
                this.addMessage('system', data.Result)
                starx.on("UserMessage", onMessage)
            }
        };

        var onNewUser = (data) => {
            cc.log(data);
            this.addMessage('system', data.Content)
        };

        var onMembers = (data) => {
            cc.log(data);
            this.addMessage('system', data.Members)
        };

        starx.init({
            host: 'localhost',
            port: 3250,
            path: '/nano'
        }, () => {
            starx.on("NewUser", onNewUser);
            starx.on("Members", onMembers);
            Serialization.addRoute("room.join", "JoinResponse")
            Serialization.addRoute("room.message", "UserMessage")
            starx.request("room.join", {}, join);
        })

        // Comment if you want to use JSON Serialization
        starx.setSerialization(Serialization);
    },

    onSend: function () {
        starx.notify('room.message', {
            Name: this.nickname,
            Content: this.editBox.string
        });
        this.editBox.string = '';
    },
    // called every frame
    update: function (dt) {

    },
});