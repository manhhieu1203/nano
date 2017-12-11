var Serialization = new Object({
    map: {},
    load: function () {
        if (protobuf && protobuf.roots) {
            for (var r in protobuf.roots) {
                for (var pkg in protobuf.roots[r]) {
                    for (var ms in protobuf.roots[r][pkg])
                        if (this.map[ms] === undefined) {
                            this.map[ms] = protobuf.roots[r][pkg][ms];
                        }
                }
            }
        } else {
            console.error("Protobuf is undefined");
        }
    },
    reload: function () {
        this.map = {};
        this.load();
    },
    lookup: function (route) {
        if (typeof route !== 'string') {
            console.error(route, "is not string, it's ", typeof route)
            return false;
        }
        if (this.map[route] !== undefined) {
            return true;
        }

        this.reload();
        if (this.map[route] !== undefined) {
            return true;
        } else {
            console.error("Not found", route, "in Serializtion")
            return false;
        }
    },
    get: function (route) {
        var r = this.map[route];
        if (r === undefined) {
            this.reload()
            r = this.map[route];
            if (r === undefined) {
                console.error(route, "not found.")
            }
        }
        return r;
    },
    addRoute: function (route, pb) {
        if (typeof route !== 'string') {
            console.error(route, "is not string, it's ", typeof route)
            return false;
        }
        if (typeof pb === 'string') {
            pb = this.get(pb);
        }
        if (typeof pb !== 'function' || pb.create == undefined || pb.encode == undefined || pb.decode == undefined) {
            console.error(pb, "is not a protobuf message.", typeof pb)
            return;
        }
        if (this.map[route] !== undefined) {
            console.warn(route, "exists in Serialization")
        }

        this.map[route] = pb;

        if (protobuf.roots.users === undefined) {
            protobuf.roots.users = {
                manualAdd: {}
            };
        }
        protobuf.roots.users.manualAdd[route] = pb;
    },
    encode: function (route, msg) {
        // console.log(route, "\n", msg, "\n", !!this.map[route], "\n", this.map[route].encode(msg), "\n", this.map[route].encode(msg).finish())
        try {
            var r = this.map[route].encode(msg).finish()
        } catch (e) {
            console.error(e);
        }
        return r;
    },
    decode: function (route, buffer) {
        var decodedMessage;
        try {
            decodedMessage = this.map[route].decode(buffer);
        } catch (e) {
            if (e instanceof protobuf.util.ProtocolError) {
                // e.instance holds the so far decoded message with missing required fields
            } else {
                // wire format is invalid
            }
            console.error(e);
            decodedMessage = this.map[route].create()
        }
        // console.log(route, decodedMessage)
        return decodedMessage;
    }

})


module.exports = Serialization;