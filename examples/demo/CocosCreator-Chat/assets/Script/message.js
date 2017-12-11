/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.message = (function() {
    
        /**
         * Namespace message.
         * @exports message
         * @namespace
         */
        var message = {};
    
        message.UserMessage = (function() {
    
            /**
             * Properties of a UserMessage.
             * @memberof message
             * @interface IUserMessage
             * @property {string|null} [Name] UserMessage Name
             * @property {string|null} [Content] UserMessage Content
             */
    
            /**
             * Constructs a new UserMessage.
             * @memberof message
             * @classdesc Represents a UserMessage.
             * @implements IUserMessage
             * @constructor
             * @param {message.IUserMessage=} [properties] Properties to set
             */
            function UserMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UserMessage Name.
             * @member {string} Name
             * @memberof message.UserMessage
             * @instance
             */
            UserMessage.prototype.Name = "";
    
            /**
             * UserMessage Content.
             * @member {string} Content
             * @memberof message.UserMessage
             * @instance
             */
            UserMessage.prototype.Content = "";
    
            /**
             * Creates a new UserMessage instance using the specified properties.
             * @function create
             * @memberof message.UserMessage
             * @static
             * @param {message.IUserMessage=} [properties] Properties to set
             * @returns {message.UserMessage} UserMessage instance
             */
            UserMessage.create = function create(properties) {
                return new UserMessage(properties);
            };
    
            /**
             * Encodes the specified UserMessage message. Does not implicitly {@link message.UserMessage.verify|verify} messages.
             * @function encode
             * @memberof message.UserMessage
             * @static
             * @param {message.IUserMessage} message UserMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Name != null && message.hasOwnProperty("Name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
                if (message.Content != null && message.hasOwnProperty("Content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Content);
                return writer;
            };
    
            /**
             * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link message.UserMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.UserMessage
             * @static
             * @param {message.IUserMessage} message UserMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a UserMessage message from the specified reader or buffer.
             * @function decode
             * @memberof message.UserMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.UserMessage} UserMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.UserMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Name = reader.string();
                        break;
                    case 2:
                        message.Content = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a UserMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.UserMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.UserMessage} UserMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a UserMessage message.
             * @function verify
             * @memberof message.UserMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Name != null && message.hasOwnProperty("Name"))
                    if (!$util.isString(message.Name))
                        return "Name: string expected";
                if (message.Content != null && message.hasOwnProperty("Content"))
                    if (!$util.isString(message.Content))
                        return "Content: string expected";
                return null;
            };
    
            /**
             * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.UserMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.UserMessage} UserMessage
             */
            UserMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.message.UserMessage)
                    return object;
                var message = new $root.message.UserMessage();
                if (object.Name != null)
                    message.Name = String(object.Name);
                if (object.Content != null)
                    message.Content = String(object.Content);
                return message;
            };
    
            /**
             * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.UserMessage
             * @static
             * @param {message.UserMessage} message UserMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Name = "";
                    object.Content = "";
                }
                if (message.Name != null && message.hasOwnProperty("Name"))
                    object.Name = message.Name;
                if (message.Content != null && message.hasOwnProperty("Content"))
                    object.Content = message.Content;
                return object;
            };
    
            /**
             * Converts this UserMessage to JSON.
             * @function toJSON
             * @memberof message.UserMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UserMessage;
        })();
    
        message.NewUser = (function() {
    
            /**
             * Properties of a NewUser.
             * @memberof message
             * @interface INewUser
             * @property {string|null} [Content] NewUser Content
             */
    
            /**
             * Constructs a new NewUser.
             * @memberof message
             * @classdesc Represents a NewUser.
             * @implements INewUser
             * @constructor
             * @param {message.INewUser=} [properties] Properties to set
             */
            function NewUser(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NewUser Content.
             * @member {string} Content
             * @memberof message.NewUser
             * @instance
             */
            NewUser.prototype.Content = "";
    
            /**
             * Creates a new NewUser instance using the specified properties.
             * @function create
             * @memberof message.NewUser
             * @static
             * @param {message.INewUser=} [properties] Properties to set
             * @returns {message.NewUser} NewUser instance
             */
            NewUser.create = function create(properties) {
                return new NewUser(properties);
            };
    
            /**
             * Encodes the specified NewUser message. Does not implicitly {@link message.NewUser.verify|verify} messages.
             * @function encode
             * @memberof message.NewUser
             * @static
             * @param {message.INewUser} message NewUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewUser.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Content != null && message.hasOwnProperty("Content"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Content);
                return writer;
            };
    
            /**
             * Encodes the specified NewUser message, length delimited. Does not implicitly {@link message.NewUser.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.NewUser
             * @static
             * @param {message.INewUser} message NewUser message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NewUser.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a NewUser message from the specified reader or buffer.
             * @function decode
             * @memberof message.NewUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.NewUser} NewUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewUser.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.NewUser();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Content = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a NewUser message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.NewUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.NewUser} NewUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NewUser.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a NewUser message.
             * @function verify
             * @memberof message.NewUser
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NewUser.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Content != null && message.hasOwnProperty("Content"))
                    if (!$util.isString(message.Content))
                        return "Content: string expected";
                return null;
            };
    
            /**
             * Creates a NewUser message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.NewUser
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.NewUser} NewUser
             */
            NewUser.fromObject = function fromObject(object) {
                if (object instanceof $root.message.NewUser)
                    return object;
                var message = new $root.message.NewUser();
                if (object.Content != null)
                    message.Content = String(object.Content);
                return message;
            };
    
            /**
             * Creates a plain object from a NewUser message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.NewUser
             * @static
             * @param {message.NewUser} message NewUser
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NewUser.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.Content = "";
                if (message.Content != null && message.hasOwnProperty("Content"))
                    object.Content = message.Content;
                return object;
            };
    
            /**
             * Converts this NewUser to JSON.
             * @function toJSON
             * @memberof message.NewUser
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NewUser.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NewUser;
        })();
    
        message.AllMembers = (function() {
    
            /**
             * Properties of an AllMembers.
             * @memberof message
             * @interface IAllMembers
             * @property {Array.<number|Long>|null} [Members] AllMembers Members
             */
    
            /**
             * Constructs a new AllMembers.
             * @memberof message
             * @classdesc Represents an AllMembers.
             * @implements IAllMembers
             * @constructor
             * @param {message.IAllMembers=} [properties] Properties to set
             */
            function AllMembers(properties) {
                this.Members = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AllMembers Members.
             * @member {Array.<number|Long>} Members
             * @memberof message.AllMembers
             * @instance
             */
            AllMembers.prototype.Members = $util.emptyArray;
    
            /**
             * Creates a new AllMembers instance using the specified properties.
             * @function create
             * @memberof message.AllMembers
             * @static
             * @param {message.IAllMembers=} [properties] Properties to set
             * @returns {message.AllMembers} AllMembers instance
             */
            AllMembers.create = function create(properties) {
                return new AllMembers(properties);
            };
    
            /**
             * Encodes the specified AllMembers message. Does not implicitly {@link message.AllMembers.verify|verify} messages.
             * @function encode
             * @memberof message.AllMembers
             * @static
             * @param {message.IAllMembers} message AllMembers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllMembers.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Members != null && message.Members.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.Members.length; ++i)
                        writer.int64(message.Members[i]);
                    writer.ldelim();
                }
                return writer;
            };
    
            /**
             * Encodes the specified AllMembers message, length delimited. Does not implicitly {@link message.AllMembers.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.AllMembers
             * @static
             * @param {message.IAllMembers} message AllMembers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AllMembers.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AllMembers message from the specified reader or buffer.
             * @function decode
             * @memberof message.AllMembers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.AllMembers} AllMembers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllMembers.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.AllMembers();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.Members && message.Members.length))
                            message.Members = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Members.push(reader.int64());
                        } else
                            message.Members.push(reader.int64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AllMembers message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.AllMembers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.AllMembers} AllMembers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AllMembers.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AllMembers message.
             * @function verify
             * @memberof message.AllMembers
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AllMembers.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Members != null && message.hasOwnProperty("Members")) {
                    if (!Array.isArray(message.Members))
                        return "Members: array expected";
                    for (var i = 0; i < message.Members.length; ++i)
                        if (!$util.isInteger(message.Members[i]) && !(message.Members[i] && $util.isInteger(message.Members[i].low) && $util.isInteger(message.Members[i].high)))
                            return "Members: integer|Long[] expected";
                }
                return null;
            };
    
            /**
             * Creates an AllMembers message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.AllMembers
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.AllMembers} AllMembers
             */
            AllMembers.fromObject = function fromObject(object) {
                if (object instanceof $root.message.AllMembers)
                    return object;
                var message = new $root.message.AllMembers();
                if (object.Members) {
                    if (!Array.isArray(object.Members))
                        throw TypeError(".message.AllMembers.Members: array expected");
                    message.Members = [];
                    for (var i = 0; i < object.Members.length; ++i)
                        if ($util.Long)
                            (message.Members[i] = $util.Long.fromValue(object.Members[i])).unsigned = false;
                        else if (typeof object.Members[i] === "string")
                            message.Members[i] = parseInt(object.Members[i], 10);
                        else if (typeof object.Members[i] === "number")
                            message.Members[i] = object.Members[i];
                        else if (typeof object.Members[i] === "object")
                            message.Members[i] = new $util.LongBits(object.Members[i].low >>> 0, object.Members[i].high >>> 0).toNumber();
                }
                return message;
            };
    
            /**
             * Creates a plain object from an AllMembers message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.AllMembers
             * @static
             * @param {message.AllMembers} message AllMembers
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AllMembers.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.Members = [];
                if (message.Members && message.Members.length) {
                    object.Members = [];
                    for (var j = 0; j < message.Members.length; ++j)
                        if (typeof message.Members[j] === "number")
                            object.Members[j] = options.longs === String ? String(message.Members[j]) : message.Members[j];
                        else
                            object.Members[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Members[j]) : options.longs === Number ? new $util.LongBits(message.Members[j].low >>> 0, message.Members[j].high >>> 0).toNumber() : message.Members[j];
                }
                return object;
            };
    
            /**
             * Converts this AllMembers to JSON.
             * @function toJSON
             * @memberof message.AllMembers
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AllMembers.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AllMembers;
        })();
    
        message.JoinResponse = (function() {
    
            /**
             * Properties of a JoinResponse.
             * @memberof message
             * @interface IJoinResponse
             * @property {number|null} [Code] JoinResponse Code
             * @property {string|null} [Result] JoinResponse Result
             */
    
            /**
             * Constructs a new JoinResponse.
             * @memberof message
             * @classdesc Represents a JoinResponse.
             * @implements IJoinResponse
             * @constructor
             * @param {message.IJoinResponse=} [properties] Properties to set
             */
            function JoinResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * JoinResponse Code.
             * @member {number} Code
             * @memberof message.JoinResponse
             * @instance
             */
            JoinResponse.prototype.Code = 0;
    
            /**
             * JoinResponse Result.
             * @member {string} Result
             * @memberof message.JoinResponse
             * @instance
             */
            JoinResponse.prototype.Result = "";
    
            /**
             * Creates a new JoinResponse instance using the specified properties.
             * @function create
             * @memberof message.JoinResponse
             * @static
             * @param {message.IJoinResponse=} [properties] Properties to set
             * @returns {message.JoinResponse} JoinResponse instance
             */
            JoinResponse.create = function create(properties) {
                return new JoinResponse(properties);
            };
    
            /**
             * Encodes the specified JoinResponse message. Does not implicitly {@link message.JoinResponse.verify|verify} messages.
             * @function encode
             * @memberof message.JoinResponse
             * @static
             * @param {message.IJoinResponse} message JoinResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Code != null && message.hasOwnProperty("Code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Result);
                return writer;
            };
    
            /**
             * Encodes the specified JoinResponse message, length delimited. Does not implicitly {@link message.JoinResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof message.JoinResponse
             * @static
             * @param {message.IJoinResponse} message JoinResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a JoinResponse message from the specified reader or buffer.
             * @function decode
             * @memberof message.JoinResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {message.JoinResponse} JoinResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.JoinResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Code = reader.int32();
                        break;
                    case 2:
                        message.Result = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a JoinResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof message.JoinResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {message.JoinResponse} JoinResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a JoinResponse message.
             * @function verify
             * @memberof message.JoinResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Code != null && message.hasOwnProperty("Code"))
                    if (!$util.isInteger(message.Code))
                        return "Code: integer expected";
                if (message.Result != null && message.hasOwnProperty("Result"))
                    if (!$util.isString(message.Result))
                        return "Result: string expected";
                return null;
            };
    
            /**
             * Creates a JoinResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof message.JoinResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {message.JoinResponse} JoinResponse
             */
            JoinResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.message.JoinResponse)
                    return object;
                var message = new $root.message.JoinResponse();
                if (object.Code != null)
                    message.Code = object.Code | 0;
                if (object.Result != null)
                    message.Result = String(object.Result);
                return message;
            };
    
            /**
             * Creates a plain object from a JoinResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof message.JoinResponse
             * @static
             * @param {message.JoinResponse} message JoinResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Code = 0;
                    object.Result = "";
                }
                if (message.Code != null && message.hasOwnProperty("Code"))
                    object.Code = message.Code;
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = message.Result;
                return object;
            };
    
            /**
             * Converts this JoinResponse to JSON.
             * @function toJSON
             * @memberof message.JoinResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return JoinResponse;
        })();
    
        return message;
    })();

    return $root;
})(protobuf);
