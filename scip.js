/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.scip = (function() {

    /**
     * Namespace scip.
     * @exports scip
     * @namespace
     */
    var scip = {};

    scip.Index = (function() {

        /**
         * Properties of an Index.
         * @memberof scip
         * @interface IIndex
         * @property {scip.IMetadata|null} [metadata] Index metadata
         * @property {Array.<scip.IDocument>|null} [documents] Index documents
         * @property {Array.<scip.ISymbolInformation>|null} [externalSymbols] Index externalSymbols
         */

        /**
         * Constructs a new Index.
         * @memberof scip
         * @classdesc Represents an Index.
         * @implements IIndex
         * @constructor
         * @param {scip.IIndex=} [properties] Properties to set
         */
        function Index(properties) {
            this.documents = [];
            this.externalSymbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Index metadata.
         * @member {scip.IMetadata|null|undefined} metadata
         * @memberof scip.Index
         * @instance
         */
        Index.prototype.metadata = null;

        /**
         * Index documents.
         * @member {Array.<scip.IDocument>} documents
         * @memberof scip.Index
         * @instance
         */
        Index.prototype.documents = $util.emptyArray;

        /**
         * Index externalSymbols.
         * @member {Array.<scip.ISymbolInformation>} externalSymbols
         * @memberof scip.Index
         * @instance
         */
        Index.prototype.externalSymbols = $util.emptyArray;

        /**
         * Creates a new Index instance using the specified properties.
         * @function create
         * @memberof scip.Index
         * @static
         * @param {scip.IIndex=} [properties] Properties to set
         * @returns {scip.Index} Index instance
         */
        Index.create = function create(properties) {
            return new Index(properties);
        };

        /**
         * Encodes the specified Index message. Does not implicitly {@link scip.Index.verify|verify} messages.
         * @function encode
         * @memberof scip.Index
         * @static
         * @param {scip.IIndex} message Index message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Index.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.scip.Metadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.documents != null && message.documents.length)
                for (var i = 0; i < message.documents.length; ++i)
                    $root.scip.Document.encode(message.documents[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.externalSymbols != null && message.externalSymbols.length)
                for (var i = 0; i < message.externalSymbols.length; ++i)
                    $root.scip.SymbolInformation.encode(message.externalSymbols[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Index message, length delimited. Does not implicitly {@link scip.Index.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Index
         * @static
         * @param {scip.IIndex} message Index message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Index.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Index message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Index
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Index} Index
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Index.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Index();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.metadata = $root.scip.Metadata.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.documents && message.documents.length))
                            message.documents = [];
                        message.documents.push($root.scip.Document.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.externalSymbols && message.externalSymbols.length))
                            message.externalSymbols = [];
                        message.externalSymbols.push($root.scip.SymbolInformation.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Index message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Index
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Index} Index
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Index.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Index message.
         * @function verify
         * @memberof scip.Index
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Index.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                var error = $root.scip.Metadata.verify(message.metadata);
                if (error)
                    return "metadata." + error;
            }
            if (message.documents != null && message.hasOwnProperty("documents")) {
                if (!Array.isArray(message.documents))
                    return "documents: array expected";
                for (var i = 0; i < message.documents.length; ++i) {
                    var error = $root.scip.Document.verify(message.documents[i]);
                    if (error)
                        return "documents." + error;
                }
            }
            if (message.externalSymbols != null && message.hasOwnProperty("externalSymbols")) {
                if (!Array.isArray(message.externalSymbols))
                    return "externalSymbols: array expected";
                for (var i = 0; i < message.externalSymbols.length; ++i) {
                    var error = $root.scip.SymbolInformation.verify(message.externalSymbols[i]);
                    if (error)
                        return "externalSymbols." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Index message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Index
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Index} Index
         */
        Index.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Index)
                return object;
            var message = new $root.scip.Index();
            if (object.metadata != null) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".scip.Index.metadata: object expected");
                message.metadata = $root.scip.Metadata.fromObject(object.metadata);
            }
            if (object.documents) {
                if (!Array.isArray(object.documents))
                    throw TypeError(".scip.Index.documents: array expected");
                message.documents = [];
                for (var i = 0; i < object.documents.length; ++i) {
                    if (typeof object.documents[i] !== "object")
                        throw TypeError(".scip.Index.documents: object expected");
                    message.documents[i] = $root.scip.Document.fromObject(object.documents[i]);
                }
            }
            if (object.externalSymbols) {
                if (!Array.isArray(object.externalSymbols))
                    throw TypeError(".scip.Index.externalSymbols: array expected");
                message.externalSymbols = [];
                for (var i = 0; i < object.externalSymbols.length; ++i) {
                    if (typeof object.externalSymbols[i] !== "object")
                        throw TypeError(".scip.Index.externalSymbols: object expected");
                    message.externalSymbols[i] = $root.scip.SymbolInformation.fromObject(object.externalSymbols[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Index message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Index
         * @static
         * @param {scip.Index} message Index
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Index.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.documents = [];
                object.externalSymbols = [];
            }
            if (options.defaults)
                object.metadata = null;
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = $root.scip.Metadata.toObject(message.metadata, options);
            if (message.documents && message.documents.length) {
                object.documents = [];
                for (var j = 0; j < message.documents.length; ++j)
                    object.documents[j] = $root.scip.Document.toObject(message.documents[j], options);
            }
            if (message.externalSymbols && message.externalSymbols.length) {
                object.externalSymbols = [];
                for (var j = 0; j < message.externalSymbols.length; ++j)
                    object.externalSymbols[j] = $root.scip.SymbolInformation.toObject(message.externalSymbols[j], options);
            }
            return object;
        };

        /**
         * Converts this Index to JSON.
         * @function toJSON
         * @memberof scip.Index
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Index.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Index
         * @function getTypeUrl
         * @memberof scip.Index
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Index.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Index";
        };

        return Index;
    })();

    scip.Metadata = (function() {

        /**
         * Properties of a Metadata.
         * @memberof scip
         * @interface IMetadata
         * @property {scip.ProtocolVersion|null} [version] Metadata version
         * @property {scip.IToolInfo|null} [toolInfo] Metadata toolInfo
         * @property {string|null} [projectRoot] Metadata projectRoot
         * @property {scip.TextEncoding|null} [textDocumentEncoding] Metadata textDocumentEncoding
         */

        /**
         * Constructs a new Metadata.
         * @memberof scip
         * @classdesc Represents a Metadata.
         * @implements IMetadata
         * @constructor
         * @param {scip.IMetadata=} [properties] Properties to set
         */
        function Metadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Metadata version.
         * @member {scip.ProtocolVersion} version
         * @memberof scip.Metadata
         * @instance
         */
        Metadata.prototype.version = 0;

        /**
         * Metadata toolInfo.
         * @member {scip.IToolInfo|null|undefined} toolInfo
         * @memberof scip.Metadata
         * @instance
         */
        Metadata.prototype.toolInfo = null;

        /**
         * Metadata projectRoot.
         * @member {string} projectRoot
         * @memberof scip.Metadata
         * @instance
         */
        Metadata.prototype.projectRoot = "";

        /**
         * Metadata textDocumentEncoding.
         * @member {scip.TextEncoding} textDocumentEncoding
         * @memberof scip.Metadata
         * @instance
         */
        Metadata.prototype.textDocumentEncoding = 0;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @function create
         * @memberof scip.Metadata
         * @static
         * @param {scip.IMetadata=} [properties] Properties to set
         * @returns {scip.Metadata} Metadata instance
         */
        Metadata.create = function create(properties) {
            return new Metadata(properties);
        };

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link scip.Metadata.verify|verify} messages.
         * @function encode
         * @memberof scip.Metadata
         * @static
         * @param {scip.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.version);
            if (message.toolInfo != null && Object.hasOwnProperty.call(message, "toolInfo"))
                $root.scip.ToolInfo.encode(message.toolInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.projectRoot != null && Object.hasOwnProperty.call(message, "projectRoot"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.projectRoot);
            if (message.textDocumentEncoding != null && Object.hasOwnProperty.call(message, "textDocumentEncoding"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.textDocumentEncoding);
            return writer;
        };

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link scip.Metadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Metadata
         * @static
         * @param {scip.IMetadata} message Metadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Metadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Metadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.int32();
                        break;
                    }
                case 2: {
                        message.toolInfo = $root.scip.ToolInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.projectRoot = reader.string();
                        break;
                    }
                case 4: {
                        message.textDocumentEncoding = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Metadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Metadata} Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Metadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Metadata message.
         * @function verify
         * @memberof scip.Metadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Metadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                switch (message.version) {
                default:
                    return "version: enum value expected";
                case 0:
                    break;
                }
            if (message.toolInfo != null && message.hasOwnProperty("toolInfo")) {
                var error = $root.scip.ToolInfo.verify(message.toolInfo);
                if (error)
                    return "toolInfo." + error;
            }
            if (message.projectRoot != null && message.hasOwnProperty("projectRoot"))
                if (!$util.isString(message.projectRoot))
                    return "projectRoot: string expected";
            if (message.textDocumentEncoding != null && message.hasOwnProperty("textDocumentEncoding"))
                switch (message.textDocumentEncoding) {
                default:
                    return "textDocumentEncoding: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Metadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Metadata} Metadata
         */
        Metadata.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Metadata)
                return object;
            var message = new $root.scip.Metadata();
            switch (object.version) {
            default:
                if (typeof object.version === "number") {
                    message.version = object.version;
                    break;
                }
                break;
            case "UnspecifiedProtocolVersion":
            case 0:
                message.version = 0;
                break;
            }
            if (object.toolInfo != null) {
                if (typeof object.toolInfo !== "object")
                    throw TypeError(".scip.Metadata.toolInfo: object expected");
                message.toolInfo = $root.scip.ToolInfo.fromObject(object.toolInfo);
            }
            if (object.projectRoot != null)
                message.projectRoot = String(object.projectRoot);
            switch (object.textDocumentEncoding) {
            default:
                if (typeof object.textDocumentEncoding === "number") {
                    message.textDocumentEncoding = object.textDocumentEncoding;
                    break;
                }
                break;
            case "UnspecifiedTextEncoding":
            case 0:
                message.textDocumentEncoding = 0;
                break;
            case "UTF8":
            case 1:
                message.textDocumentEncoding = 1;
                break;
            case "UTF16":
            case 2:
                message.textDocumentEncoding = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Metadata
         * @static
         * @param {scip.Metadata} message Metadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Metadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.version = options.enums === String ? "UnspecifiedProtocolVersion" : 0;
                object.toolInfo = null;
                object.projectRoot = "";
                object.textDocumentEncoding = options.enums === String ? "UnspecifiedTextEncoding" : 0;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = options.enums === String ? $root.scip.ProtocolVersion[message.version] === undefined ? message.version : $root.scip.ProtocolVersion[message.version] : message.version;
            if (message.toolInfo != null && message.hasOwnProperty("toolInfo"))
                object.toolInfo = $root.scip.ToolInfo.toObject(message.toolInfo, options);
            if (message.projectRoot != null && message.hasOwnProperty("projectRoot"))
                object.projectRoot = message.projectRoot;
            if (message.textDocumentEncoding != null && message.hasOwnProperty("textDocumentEncoding"))
                object.textDocumentEncoding = options.enums === String ? $root.scip.TextEncoding[message.textDocumentEncoding] === undefined ? message.textDocumentEncoding : $root.scip.TextEncoding[message.textDocumentEncoding] : message.textDocumentEncoding;
            return object;
        };

        /**
         * Converts this Metadata to JSON.
         * @function toJSON
         * @memberof scip.Metadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Metadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Metadata
         * @function getTypeUrl
         * @memberof scip.Metadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Metadata";
        };

        return Metadata;
    })();

    /**
     * ProtocolVersion enum.
     * @name scip.ProtocolVersion
     * @enum {number}
     * @property {number} UnspecifiedProtocolVersion=0 UnspecifiedProtocolVersion value
     */
    scip.ProtocolVersion = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnspecifiedProtocolVersion"] = 0;
        return values;
    })();

    /**
     * TextEncoding enum.
     * @name scip.TextEncoding
     * @enum {number}
     * @property {number} UnspecifiedTextEncoding=0 UnspecifiedTextEncoding value
     * @property {number} UTF8=1 UTF8 value
     * @property {number} UTF16=2 UTF16 value
     */
    scip.TextEncoding = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnspecifiedTextEncoding"] = 0;
        values[valuesById[1] = "UTF8"] = 1;
        values[valuesById[2] = "UTF16"] = 2;
        return values;
    })();

    scip.ToolInfo = (function() {

        /**
         * Properties of a ToolInfo.
         * @memberof scip
         * @interface IToolInfo
         * @property {string|null} [name] ToolInfo name
         * @property {string|null} [version] ToolInfo version
         * @property {Array.<string>|null} ["arguments"] ToolInfo arguments
         */

        /**
         * Constructs a new ToolInfo.
         * @memberof scip
         * @classdesc Represents a ToolInfo.
         * @implements IToolInfo
         * @constructor
         * @param {scip.IToolInfo=} [properties] Properties to set
         */
        function ToolInfo(properties) {
            this["arguments"] = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ToolInfo name.
         * @member {string} name
         * @memberof scip.ToolInfo
         * @instance
         */
        ToolInfo.prototype.name = "";

        /**
         * ToolInfo version.
         * @member {string} version
         * @memberof scip.ToolInfo
         * @instance
         */
        ToolInfo.prototype.version = "";

        /**
         * ToolInfo arguments.
         * @member {Array.<string>} arguments
         * @memberof scip.ToolInfo
         * @instance
         */
        ToolInfo.prototype["arguments"] = $util.emptyArray;

        /**
         * Creates a new ToolInfo instance using the specified properties.
         * @function create
         * @memberof scip.ToolInfo
         * @static
         * @param {scip.IToolInfo=} [properties] Properties to set
         * @returns {scip.ToolInfo} ToolInfo instance
         */
        ToolInfo.create = function create(properties) {
            return new ToolInfo(properties);
        };

        /**
         * Encodes the specified ToolInfo message. Does not implicitly {@link scip.ToolInfo.verify|verify} messages.
         * @function encode
         * @memberof scip.ToolInfo
         * @static
         * @param {scip.IToolInfo} message ToolInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToolInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            if (message["arguments"] != null && message["arguments"].length)
                for (var i = 0; i < message["arguments"].length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message["arguments"][i]);
            return writer;
        };

        /**
         * Encodes the specified ToolInfo message, length delimited. Does not implicitly {@link scip.ToolInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.ToolInfo
         * @static
         * @param {scip.IToolInfo} message ToolInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToolInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ToolInfo message from the specified reader or buffer.
         * @function decode
         * @memberof scip.ToolInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.ToolInfo} ToolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToolInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.ToolInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.version = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message["arguments"] && message["arguments"].length))
                            message["arguments"] = [];
                        message["arguments"].push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ToolInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.ToolInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.ToolInfo} ToolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToolInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ToolInfo message.
         * @function verify
         * @memberof scip.ToolInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ToolInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message["arguments"] != null && message.hasOwnProperty("arguments")) {
                if (!Array.isArray(message["arguments"]))
                    return "arguments: array expected";
                for (var i = 0; i < message["arguments"].length; ++i)
                    if (!$util.isString(message["arguments"][i]))
                        return "arguments: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ToolInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.ToolInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.ToolInfo} ToolInfo
         */
        ToolInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.ToolInfo)
                return object;
            var message = new $root.scip.ToolInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.version != null)
                message.version = String(object.version);
            if (object["arguments"]) {
                if (!Array.isArray(object["arguments"]))
                    throw TypeError(".scip.ToolInfo.arguments: array expected");
                message["arguments"] = [];
                for (var i = 0; i < object["arguments"].length; ++i)
                    message["arguments"][i] = String(object["arguments"][i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ToolInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.ToolInfo
         * @static
         * @param {scip.ToolInfo} message ToolInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ToolInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object["arguments"] = [];
            if (options.defaults) {
                object.name = "";
                object.version = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message["arguments"] && message["arguments"].length) {
                object["arguments"] = [];
                for (var j = 0; j < message["arguments"].length; ++j)
                    object["arguments"][j] = message["arguments"][j];
            }
            return object;
        };

        /**
         * Converts this ToolInfo to JSON.
         * @function toJSON
         * @memberof scip.ToolInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ToolInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ToolInfo
         * @function getTypeUrl
         * @memberof scip.ToolInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ToolInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.ToolInfo";
        };

        return ToolInfo;
    })();

    scip.Document = (function() {

        /**
         * Properties of a Document.
         * @memberof scip
         * @interface IDocument
         * @property {string|null} [language] Document language
         * @property {string|null} [relativePath] Document relativePath
         * @property {Array.<scip.IOccurrence>|null} [occurrences] Document occurrences
         * @property {Array.<scip.ISymbolInformation>|null} [symbols] Document symbols
         * @property {string|null} [text] Document text
         * @property {scip.PositionEncoding|null} [positionEncoding] Document positionEncoding
         */

        /**
         * Constructs a new Document.
         * @memberof scip
         * @classdesc Represents a Document.
         * @implements IDocument
         * @constructor
         * @param {scip.IDocument=} [properties] Properties to set
         */
        function Document(properties) {
            this.occurrences = [];
            this.symbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Document language.
         * @member {string} language
         * @memberof scip.Document
         * @instance
         */
        Document.prototype.language = "";

        /**
         * Document relativePath.
         * @member {string} relativePath
         * @memberof scip.Document
         * @instance
         */
        Document.prototype.relativePath = "";

        /**
         * Document occurrences.
         * @member {Array.<scip.IOccurrence>} occurrences
         * @memberof scip.Document
         * @instance
         */
        Document.prototype.occurrences = $util.emptyArray;

        /**
         * Document symbols.
         * @member {Array.<scip.ISymbolInformation>} symbols
         * @memberof scip.Document
         * @instance
         */
        Document.prototype.symbols = $util.emptyArray;

        /**
         * Document text.
         * @member {string} text
         * @memberof scip.Document
         * @instance
         */
        Document.prototype.text = "";

        /**
         * Document positionEncoding.
         * @member {scip.PositionEncoding} positionEncoding
         * @memberof scip.Document
         * @instance
         */
        Document.prototype.positionEncoding = 0;

        /**
         * Creates a new Document instance using the specified properties.
         * @function create
         * @memberof scip.Document
         * @static
         * @param {scip.IDocument=} [properties] Properties to set
         * @returns {scip.Document} Document instance
         */
        Document.create = function create(properties) {
            return new Document(properties);
        };

        /**
         * Encodes the specified Document message. Does not implicitly {@link scip.Document.verify|verify} messages.
         * @function encode
         * @memberof scip.Document
         * @static
         * @param {scip.IDocument} message Document message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Document.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.relativePath != null && Object.hasOwnProperty.call(message, "relativePath"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.relativePath);
            if (message.occurrences != null && message.occurrences.length)
                for (var i = 0; i < message.occurrences.length; ++i)
                    $root.scip.Occurrence.encode(message.occurrences[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.symbols != null && message.symbols.length)
                for (var i = 0; i < message.symbols.length; ++i)
                    $root.scip.SymbolInformation.encode(message.symbols[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.language);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.text);
            if (message.positionEncoding != null && Object.hasOwnProperty.call(message, "positionEncoding"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.positionEncoding);
            return writer;
        };

        /**
         * Encodes the specified Document message, length delimited. Does not implicitly {@link scip.Document.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Document
         * @static
         * @param {scip.IDocument} message Document message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Document.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Document message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Document
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Document} Document
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Document.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Document();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4: {
                        message.language = reader.string();
                        break;
                    }
                case 1: {
                        message.relativePath = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.occurrences && message.occurrences.length))
                            message.occurrences = [];
                        message.occurrences.push($root.scip.Occurrence.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.symbols && message.symbols.length))
                            message.symbols = [];
                        message.symbols.push($root.scip.SymbolInformation.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.text = reader.string();
                        break;
                    }
                case 6: {
                        message.positionEncoding = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Document message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Document
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Document} Document
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Document.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Document message.
         * @function verify
         * @memberof scip.Document
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Document.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.relativePath != null && message.hasOwnProperty("relativePath"))
                if (!$util.isString(message.relativePath))
                    return "relativePath: string expected";
            if (message.occurrences != null && message.hasOwnProperty("occurrences")) {
                if (!Array.isArray(message.occurrences))
                    return "occurrences: array expected";
                for (var i = 0; i < message.occurrences.length; ++i) {
                    var error = $root.scip.Occurrence.verify(message.occurrences[i]);
                    if (error)
                        return "occurrences." + error;
                }
            }
            if (message.symbols != null && message.hasOwnProperty("symbols")) {
                if (!Array.isArray(message.symbols))
                    return "symbols: array expected";
                for (var i = 0; i < message.symbols.length; ++i) {
                    var error = $root.scip.SymbolInformation.verify(message.symbols[i]);
                    if (error)
                        return "symbols." + error;
                }
            }
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.positionEncoding != null && message.hasOwnProperty("positionEncoding"))
                switch (message.positionEncoding) {
                default:
                    return "positionEncoding: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Document message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Document
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Document} Document
         */
        Document.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Document)
                return object;
            var message = new $root.scip.Document();
            if (object.language != null)
                message.language = String(object.language);
            if (object.relativePath != null)
                message.relativePath = String(object.relativePath);
            if (object.occurrences) {
                if (!Array.isArray(object.occurrences))
                    throw TypeError(".scip.Document.occurrences: array expected");
                message.occurrences = [];
                for (var i = 0; i < object.occurrences.length; ++i) {
                    if (typeof object.occurrences[i] !== "object")
                        throw TypeError(".scip.Document.occurrences: object expected");
                    message.occurrences[i] = $root.scip.Occurrence.fromObject(object.occurrences[i]);
                }
            }
            if (object.symbols) {
                if (!Array.isArray(object.symbols))
                    throw TypeError(".scip.Document.symbols: array expected");
                message.symbols = [];
                for (var i = 0; i < object.symbols.length; ++i) {
                    if (typeof object.symbols[i] !== "object")
                        throw TypeError(".scip.Document.symbols: object expected");
                    message.symbols[i] = $root.scip.SymbolInformation.fromObject(object.symbols[i]);
                }
            }
            if (object.text != null)
                message.text = String(object.text);
            switch (object.positionEncoding) {
            default:
                if (typeof object.positionEncoding === "number") {
                    message.positionEncoding = object.positionEncoding;
                    break;
                }
                break;
            case "UnspecifiedPositionEncoding":
            case 0:
                message.positionEncoding = 0;
                break;
            case "UTF8CodeUnitOffsetFromLineStart":
            case 1:
                message.positionEncoding = 1;
                break;
            case "UTF16CodeUnitOffsetFromLineStart":
            case 2:
                message.positionEncoding = 2;
                break;
            case "UTF32CodeUnitOffsetFromLineStart":
            case 3:
                message.positionEncoding = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Document message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Document
         * @static
         * @param {scip.Document} message Document
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Document.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.occurrences = [];
                object.symbols = [];
            }
            if (options.defaults) {
                object.relativePath = "";
                object.language = "";
                object.text = "";
                object.positionEncoding = options.enums === String ? "UnspecifiedPositionEncoding" : 0;
            }
            if (message.relativePath != null && message.hasOwnProperty("relativePath"))
                object.relativePath = message.relativePath;
            if (message.occurrences && message.occurrences.length) {
                object.occurrences = [];
                for (var j = 0; j < message.occurrences.length; ++j)
                    object.occurrences[j] = $root.scip.Occurrence.toObject(message.occurrences[j], options);
            }
            if (message.symbols && message.symbols.length) {
                object.symbols = [];
                for (var j = 0; j < message.symbols.length; ++j)
                    object.symbols[j] = $root.scip.SymbolInformation.toObject(message.symbols[j], options);
            }
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.positionEncoding != null && message.hasOwnProperty("positionEncoding"))
                object.positionEncoding = options.enums === String ? $root.scip.PositionEncoding[message.positionEncoding] === undefined ? message.positionEncoding : $root.scip.PositionEncoding[message.positionEncoding] : message.positionEncoding;
            return object;
        };

        /**
         * Converts this Document to JSON.
         * @function toJSON
         * @memberof scip.Document
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Document.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Document
         * @function getTypeUrl
         * @memberof scip.Document
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Document.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Document";
        };

        return Document;
    })();

    /**
     * PositionEncoding enum.
     * @name scip.PositionEncoding
     * @enum {number}
     * @property {number} UnspecifiedPositionEncoding=0 UnspecifiedPositionEncoding value
     * @property {number} UTF8CodeUnitOffsetFromLineStart=1 UTF8CodeUnitOffsetFromLineStart value
     * @property {number} UTF16CodeUnitOffsetFromLineStart=2 UTF16CodeUnitOffsetFromLineStart value
     * @property {number} UTF32CodeUnitOffsetFromLineStart=3 UTF32CodeUnitOffsetFromLineStart value
     */
    scip.PositionEncoding = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnspecifiedPositionEncoding"] = 0;
        values[valuesById[1] = "UTF8CodeUnitOffsetFromLineStart"] = 1;
        values[valuesById[2] = "UTF16CodeUnitOffsetFromLineStart"] = 2;
        values[valuesById[3] = "UTF32CodeUnitOffsetFromLineStart"] = 3;
        return values;
    })();

    scip.Symbol = (function() {

        /**
         * Properties of a Symbol.
         * @memberof scip
         * @interface ISymbol
         * @property {string|null} [scheme] Symbol scheme
         * @property {scip.IPackage|null} ["package"] Symbol package
         * @property {Array.<scip.IDescriptor>|null} [descriptors] Symbol descriptors
         */

        /**
         * Constructs a new Symbol.
         * @memberof scip
         * @classdesc Represents a Symbol.
         * @implements ISymbol
         * @constructor
         * @param {scip.ISymbol=} [properties] Properties to set
         */
        function Symbol(properties) {
            this.descriptors = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Symbol scheme.
         * @member {string} scheme
         * @memberof scip.Symbol
         * @instance
         */
        Symbol.prototype.scheme = "";

        /**
         * Symbol package.
         * @member {scip.IPackage|null|undefined} package
         * @memberof scip.Symbol
         * @instance
         */
        Symbol.prototype["package"] = null;

        /**
         * Symbol descriptors.
         * @member {Array.<scip.IDescriptor>} descriptors
         * @memberof scip.Symbol
         * @instance
         */
        Symbol.prototype.descriptors = $util.emptyArray;

        /**
         * Creates a new Symbol instance using the specified properties.
         * @function create
         * @memberof scip.Symbol
         * @static
         * @param {scip.ISymbol=} [properties] Properties to set
         * @returns {scip.Symbol} Symbol instance
         */
        Symbol.create = function create(properties) {
            return new Symbol(properties);
        };

        /**
         * Encodes the specified Symbol message. Does not implicitly {@link scip.Symbol.verify|verify} messages.
         * @function encode
         * @memberof scip.Symbol
         * @static
         * @param {scip.ISymbol} message Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Symbol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.scheme != null && Object.hasOwnProperty.call(message, "scheme"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.scheme);
            if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                $root.scip.Package.encode(message["package"], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.descriptors != null && message.descriptors.length)
                for (var i = 0; i < message.descriptors.length; ++i)
                    $root.scip.Descriptor.encode(message.descriptors[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Symbol message, length delimited. Does not implicitly {@link scip.Symbol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Symbol
         * @static
         * @param {scip.ISymbol} message Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Symbol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Symbol message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Symbol} Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Symbol.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Symbol();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.scheme = reader.string();
                        break;
                    }
                case 2: {
                        message["package"] = $root.scip.Package.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.descriptors && message.descriptors.length))
                            message.descriptors = [];
                        message.descriptors.push($root.scip.Descriptor.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Symbol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Symbol} Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Symbol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Symbol message.
         * @function verify
         * @memberof scip.Symbol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Symbol.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.scheme != null && message.hasOwnProperty("scheme"))
                if (!$util.isString(message.scheme))
                    return "scheme: string expected";
            if (message["package"] != null && message.hasOwnProperty("package")) {
                var error = $root.scip.Package.verify(message["package"]);
                if (error)
                    return "package." + error;
            }
            if (message.descriptors != null && message.hasOwnProperty("descriptors")) {
                if (!Array.isArray(message.descriptors))
                    return "descriptors: array expected";
                for (var i = 0; i < message.descriptors.length; ++i) {
                    var error = $root.scip.Descriptor.verify(message.descriptors[i]);
                    if (error)
                        return "descriptors." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Symbol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Symbol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Symbol} Symbol
         */
        Symbol.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Symbol)
                return object;
            var message = new $root.scip.Symbol();
            if (object.scheme != null)
                message.scheme = String(object.scheme);
            if (object["package"] != null) {
                if (typeof object["package"] !== "object")
                    throw TypeError(".scip.Symbol.package: object expected");
                message["package"] = $root.scip.Package.fromObject(object["package"]);
            }
            if (object.descriptors) {
                if (!Array.isArray(object.descriptors))
                    throw TypeError(".scip.Symbol.descriptors: array expected");
                message.descriptors = [];
                for (var i = 0; i < object.descriptors.length; ++i) {
                    if (typeof object.descriptors[i] !== "object")
                        throw TypeError(".scip.Symbol.descriptors: object expected");
                    message.descriptors[i] = $root.scip.Descriptor.fromObject(object.descriptors[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Symbol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Symbol
         * @static
         * @param {scip.Symbol} message Symbol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Symbol.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.descriptors = [];
            if (options.defaults) {
                object.scheme = "";
                object["package"] = null;
            }
            if (message.scheme != null && message.hasOwnProperty("scheme"))
                object.scheme = message.scheme;
            if (message["package"] != null && message.hasOwnProperty("package"))
                object["package"] = $root.scip.Package.toObject(message["package"], options);
            if (message.descriptors && message.descriptors.length) {
                object.descriptors = [];
                for (var j = 0; j < message.descriptors.length; ++j)
                    object.descriptors[j] = $root.scip.Descriptor.toObject(message.descriptors[j], options);
            }
            return object;
        };

        /**
         * Converts this Symbol to JSON.
         * @function toJSON
         * @memberof scip.Symbol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Symbol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Symbol
         * @function getTypeUrl
         * @memberof scip.Symbol
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Symbol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Symbol";
        };

        return Symbol;
    })();

    scip.Package = (function() {

        /**
         * Properties of a Package.
         * @memberof scip
         * @interface IPackage
         * @property {string|null} [manager] Package manager
         * @property {string|null} [name] Package name
         * @property {string|null} [version] Package version
         */

        /**
         * Constructs a new Package.
         * @memberof scip
         * @classdesc Represents a Package.
         * @implements IPackage
         * @constructor
         * @param {scip.IPackage=} [properties] Properties to set
         */
        function Package(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Package manager.
         * @member {string} manager
         * @memberof scip.Package
         * @instance
         */
        Package.prototype.manager = "";

        /**
         * Package name.
         * @member {string} name
         * @memberof scip.Package
         * @instance
         */
        Package.prototype.name = "";

        /**
         * Package version.
         * @member {string} version
         * @memberof scip.Package
         * @instance
         */
        Package.prototype.version = "";

        /**
         * Creates a new Package instance using the specified properties.
         * @function create
         * @memberof scip.Package
         * @static
         * @param {scip.IPackage=} [properties] Properties to set
         * @returns {scip.Package} Package instance
         */
        Package.create = function create(properties) {
            return new Package(properties);
        };

        /**
         * Encodes the specified Package message. Does not implicitly {@link scip.Package.verify|verify} messages.
         * @function encode
         * @memberof scip.Package
         * @static
         * @param {scip.IPackage} message Package message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Package.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.manager != null && Object.hasOwnProperty.call(message, "manager"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.manager);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link scip.Package.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Package
         * @static
         * @param {scip.IPackage} message Package message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Package.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Package
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Package} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Package.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Package();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.manager = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.version = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Package
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Package} Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Package.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Package message.
         * @function verify
         * @memberof scip.Package
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Package.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.manager != null && message.hasOwnProperty("manager"))
                if (!$util.isString(message.manager))
                    return "manager: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            return null;
        };

        /**
         * Creates a Package message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Package
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Package} Package
         */
        Package.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Package)
                return object;
            var message = new $root.scip.Package();
            if (object.manager != null)
                message.manager = String(object.manager);
            if (object.name != null)
                message.name = String(object.name);
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from a Package message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Package
         * @static
         * @param {scip.Package} message Package
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Package.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.manager = "";
                object.name = "";
                object.version = "";
            }
            if (message.manager != null && message.hasOwnProperty("manager"))
                object.manager = message.manager;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this Package to JSON.
         * @function toJSON
         * @memberof scip.Package
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Package.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Package
         * @function getTypeUrl
         * @memberof scip.Package
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Package.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Package";
        };

        return Package;
    })();

    scip.Descriptor = (function() {

        /**
         * Properties of a Descriptor.
         * @memberof scip
         * @interface IDescriptor
         * @property {string|null} [name] Descriptor name
         * @property {string|null} [disambiguator] Descriptor disambiguator
         * @property {scip.Descriptor.Suffix|null} [suffix] Descriptor suffix
         */

        /**
         * Constructs a new Descriptor.
         * @memberof scip
         * @classdesc Represents a Descriptor.
         * @implements IDescriptor
         * @constructor
         * @param {scip.IDescriptor=} [properties] Properties to set
         */
        function Descriptor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Descriptor name.
         * @member {string} name
         * @memberof scip.Descriptor
         * @instance
         */
        Descriptor.prototype.name = "";

        /**
         * Descriptor disambiguator.
         * @member {string} disambiguator
         * @memberof scip.Descriptor
         * @instance
         */
        Descriptor.prototype.disambiguator = "";

        /**
         * Descriptor suffix.
         * @member {scip.Descriptor.Suffix} suffix
         * @memberof scip.Descriptor
         * @instance
         */
        Descriptor.prototype.suffix = 0;

        /**
         * Creates a new Descriptor instance using the specified properties.
         * @function create
         * @memberof scip.Descriptor
         * @static
         * @param {scip.IDescriptor=} [properties] Properties to set
         * @returns {scip.Descriptor} Descriptor instance
         */
        Descriptor.create = function create(properties) {
            return new Descriptor(properties);
        };

        /**
         * Encodes the specified Descriptor message. Does not implicitly {@link scip.Descriptor.verify|verify} messages.
         * @function encode
         * @memberof scip.Descriptor
         * @static
         * @param {scip.IDescriptor} message Descriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Descriptor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.disambiguator != null && Object.hasOwnProperty.call(message, "disambiguator"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.disambiguator);
            if (message.suffix != null && Object.hasOwnProperty.call(message, "suffix"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.suffix);
            return writer;
        };

        /**
         * Encodes the specified Descriptor message, length delimited. Does not implicitly {@link scip.Descriptor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Descriptor
         * @static
         * @param {scip.IDescriptor} message Descriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Descriptor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Descriptor message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Descriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Descriptor} Descriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Descriptor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Descriptor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.disambiguator = reader.string();
                        break;
                    }
                case 3: {
                        message.suffix = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Descriptor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Descriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Descriptor} Descriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Descriptor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Descriptor message.
         * @function verify
         * @memberof scip.Descriptor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Descriptor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.disambiguator != null && message.hasOwnProperty("disambiguator"))
                if (!$util.isString(message.disambiguator))
                    return "disambiguator: string expected";
            if (message.suffix != null && message.hasOwnProperty("suffix"))
                switch (message.suffix) {
                default:
                    return "suffix: enum value expected";
                case 0:
                case 1:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            return null;
        };

        /**
         * Creates a Descriptor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Descriptor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Descriptor} Descriptor
         */
        Descriptor.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Descriptor)
                return object;
            var message = new $root.scip.Descriptor();
            if (object.name != null)
                message.name = String(object.name);
            if (object.disambiguator != null)
                message.disambiguator = String(object.disambiguator);
            switch (object.suffix) {
            default:
                if (typeof object.suffix === "number") {
                    message.suffix = object.suffix;
                    break;
                }
                break;
            case "UnspecifiedSuffix":
            case 0:
                message.suffix = 0;
                break;
            case "Namespace":
            case 1:
                message.suffix = 1;
                break;
            case "Package":
            case 1:
                message.suffix = 1;
                break;
            case "Type":
            case 2:
                message.suffix = 2;
                break;
            case "Term":
            case 3:
                message.suffix = 3;
                break;
            case "Method":
            case 4:
                message.suffix = 4;
                break;
            case "TypeParameter":
            case 5:
                message.suffix = 5;
                break;
            case "Parameter":
            case 6:
                message.suffix = 6;
                break;
            case "Meta":
            case 7:
                message.suffix = 7;
                break;
            case "Local":
            case 8:
                message.suffix = 8;
                break;
            case "Macro":
            case 9:
                message.suffix = 9;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Descriptor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Descriptor
         * @static
         * @param {scip.Descriptor} message Descriptor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Descriptor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.disambiguator = "";
                object.suffix = options.enums === String ? "UnspecifiedSuffix" : 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.disambiguator != null && message.hasOwnProperty("disambiguator"))
                object.disambiguator = message.disambiguator;
            if (message.suffix != null && message.hasOwnProperty("suffix"))
                object.suffix = options.enums === String ? $root.scip.Descriptor.Suffix[message.suffix] === undefined ? message.suffix : $root.scip.Descriptor.Suffix[message.suffix] : message.suffix;
            return object;
        };

        /**
         * Converts this Descriptor to JSON.
         * @function toJSON
         * @memberof scip.Descriptor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Descriptor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Descriptor
         * @function getTypeUrl
         * @memberof scip.Descriptor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Descriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Descriptor";
        };

        /**
         * Suffix enum.
         * @name scip.Descriptor.Suffix
         * @enum {number}
         * @property {number} UnspecifiedSuffix=0 UnspecifiedSuffix value
         * @property {number} Namespace=1 Namespace value
         * @property {number} Package=1 Package value
         * @property {number} Type=2 Type value
         * @property {number} Term=3 Term value
         * @property {number} Method=4 Method value
         * @property {number} TypeParameter=5 TypeParameter value
         * @property {number} Parameter=6 Parameter value
         * @property {number} Meta=7 Meta value
         * @property {number} Local=8 Local value
         * @property {number} Macro=9 Macro value
         */
        Descriptor.Suffix = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UnspecifiedSuffix"] = 0;
            values[valuesById[1] = "Namespace"] = 1;
            values["Package"] = 1;
            values[valuesById[2] = "Type"] = 2;
            values[valuesById[3] = "Term"] = 3;
            values[valuesById[4] = "Method"] = 4;
            values[valuesById[5] = "TypeParameter"] = 5;
            values[valuesById[6] = "Parameter"] = 6;
            values[valuesById[7] = "Meta"] = 7;
            values[valuesById[8] = "Local"] = 8;
            values[valuesById[9] = "Macro"] = 9;
            return values;
        })();

        return Descriptor;
    })();

    scip.SymbolInformation = (function() {

        /**
         * Properties of a SymbolInformation.
         * @memberof scip
         * @interface ISymbolInformation
         * @property {string|null} [symbol] SymbolInformation symbol
         * @property {Array.<string>|null} [documentation] SymbolInformation documentation
         * @property {Array.<scip.IRelationship>|null} [relationships] SymbolInformation relationships
         * @property {scip.SymbolInformation.Kind|null} [kind] SymbolInformation kind
         * @property {string|null} [displayName] SymbolInformation displayName
         * @property {scip.IDocument|null} [signatureDocumentation] SymbolInformation signatureDocumentation
         * @property {string|null} [enclosingSymbol] SymbolInformation enclosingSymbol
         */

        /**
         * Constructs a new SymbolInformation.
         * @memberof scip
         * @classdesc Represents a SymbolInformation.
         * @implements ISymbolInformation
         * @constructor
         * @param {scip.ISymbolInformation=} [properties] Properties to set
         */
        function SymbolInformation(properties) {
            this.documentation = [];
            this.relationships = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SymbolInformation symbol.
         * @member {string} symbol
         * @memberof scip.SymbolInformation
         * @instance
         */
        SymbolInformation.prototype.symbol = "";

        /**
         * SymbolInformation documentation.
         * @member {Array.<string>} documentation
         * @memberof scip.SymbolInformation
         * @instance
         */
        SymbolInformation.prototype.documentation = $util.emptyArray;

        /**
         * SymbolInformation relationships.
         * @member {Array.<scip.IRelationship>} relationships
         * @memberof scip.SymbolInformation
         * @instance
         */
        SymbolInformation.prototype.relationships = $util.emptyArray;

        /**
         * SymbolInformation kind.
         * @member {scip.SymbolInformation.Kind} kind
         * @memberof scip.SymbolInformation
         * @instance
         */
        SymbolInformation.prototype.kind = 0;

        /**
         * SymbolInformation displayName.
         * @member {string} displayName
         * @memberof scip.SymbolInformation
         * @instance
         */
        SymbolInformation.prototype.displayName = "";

        /**
         * SymbolInformation signatureDocumentation.
         * @member {scip.IDocument|null|undefined} signatureDocumentation
         * @memberof scip.SymbolInformation
         * @instance
         */
        SymbolInformation.prototype.signatureDocumentation = null;

        /**
         * SymbolInformation enclosingSymbol.
         * @member {string} enclosingSymbol
         * @memberof scip.SymbolInformation
         * @instance
         */
        SymbolInformation.prototype.enclosingSymbol = "";

        /**
         * Creates a new SymbolInformation instance using the specified properties.
         * @function create
         * @memberof scip.SymbolInformation
         * @static
         * @param {scip.ISymbolInformation=} [properties] Properties to set
         * @returns {scip.SymbolInformation} SymbolInformation instance
         */
        SymbolInformation.create = function create(properties) {
            return new SymbolInformation(properties);
        };

        /**
         * Encodes the specified SymbolInformation message. Does not implicitly {@link scip.SymbolInformation.verify|verify} messages.
         * @function encode
         * @memberof scip.SymbolInformation
         * @static
         * @param {scip.ISymbolInformation} message SymbolInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SymbolInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.symbol);
            if (message.documentation != null && message.documentation.length)
                for (var i = 0; i < message.documentation.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.documentation[i]);
            if (message.relationships != null && message.relationships.length)
                for (var i = 0; i < message.relationships.length; ++i)
                    $root.scip.Relationship.encode(message.relationships[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.kind);
            if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.displayName);
            if (message.signatureDocumentation != null && Object.hasOwnProperty.call(message, "signatureDocumentation"))
                $root.scip.Document.encode(message.signatureDocumentation, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.enclosingSymbol != null && Object.hasOwnProperty.call(message, "enclosingSymbol"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.enclosingSymbol);
            return writer;
        };

        /**
         * Encodes the specified SymbolInformation message, length delimited. Does not implicitly {@link scip.SymbolInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.SymbolInformation
         * @static
         * @param {scip.ISymbolInformation} message SymbolInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SymbolInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SymbolInformation message from the specified reader or buffer.
         * @function decode
         * @memberof scip.SymbolInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.SymbolInformation} SymbolInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SymbolInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.SymbolInformation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.symbol = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.documentation && message.documentation.length))
                            message.documentation = [];
                        message.documentation.push(reader.string());
                        break;
                    }
                case 4: {
                        if (!(message.relationships && message.relationships.length))
                            message.relationships = [];
                        message.relationships.push($root.scip.Relationship.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.kind = reader.int32();
                        break;
                    }
                case 6: {
                        message.displayName = reader.string();
                        break;
                    }
                case 7: {
                        message.signatureDocumentation = $root.scip.Document.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.enclosingSymbol = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SymbolInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.SymbolInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.SymbolInformation} SymbolInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SymbolInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SymbolInformation message.
         * @function verify
         * @memberof scip.SymbolInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SymbolInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.documentation != null && message.hasOwnProperty("documentation")) {
                if (!Array.isArray(message.documentation))
                    return "documentation: array expected";
                for (var i = 0; i < message.documentation.length; ++i)
                    if (!$util.isString(message.documentation[i]))
                        return "documentation: string[] expected";
            }
            if (message.relationships != null && message.hasOwnProperty("relationships")) {
                if (!Array.isArray(message.relationships))
                    return "relationships: array expected";
                for (var i = 0; i < message.relationships.length; ++i) {
                    var error = $root.scip.Relationship.verify(message.relationships[i]);
                    if (error)
                        return "relationships." + error;
                }
            }
            if (message.kind != null && message.hasOwnProperty("kind"))
                switch (message.kind) {
                default:
                    return "kind: enum value expected";
                case 0:
                case 66:
                case 72:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 62:
                case 10:
                case 73:
                case 11:
                case 12:
                case 63:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 64:
                case 25:
                case 26:
                case 74:
                case 27:
                case 67:
                case 28:
                case 65:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 68:
                case 69:
                case 43:
                case 44:
                case 45:
                case 46:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 48:
                case 49:
                case 47:
                case 50:
                case 51:
                case 52:
                case 53:
                case 70:
                case 54:
                case 55:
                case 56:
                case 71:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                    break;
                }
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.signatureDocumentation != null && message.hasOwnProperty("signatureDocumentation")) {
                var error = $root.scip.Document.verify(message.signatureDocumentation);
                if (error)
                    return "signatureDocumentation." + error;
            }
            if (message.enclosingSymbol != null && message.hasOwnProperty("enclosingSymbol"))
                if (!$util.isString(message.enclosingSymbol))
                    return "enclosingSymbol: string expected";
            return null;
        };

        /**
         * Creates a SymbolInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.SymbolInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.SymbolInformation} SymbolInformation
         */
        SymbolInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.SymbolInformation)
                return object;
            var message = new $root.scip.SymbolInformation();
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.documentation) {
                if (!Array.isArray(object.documentation))
                    throw TypeError(".scip.SymbolInformation.documentation: array expected");
                message.documentation = [];
                for (var i = 0; i < object.documentation.length; ++i)
                    message.documentation[i] = String(object.documentation[i]);
            }
            if (object.relationships) {
                if (!Array.isArray(object.relationships))
                    throw TypeError(".scip.SymbolInformation.relationships: array expected");
                message.relationships = [];
                for (var i = 0; i < object.relationships.length; ++i) {
                    if (typeof object.relationships[i] !== "object")
                        throw TypeError(".scip.SymbolInformation.relationships: object expected");
                    message.relationships[i] = $root.scip.Relationship.fromObject(object.relationships[i]);
                }
            }
            switch (object.kind) {
            default:
                if (typeof object.kind === "number") {
                    message.kind = object.kind;
                    break;
                }
                break;
            case "UnspecifiedKind":
            case 0:
                message.kind = 0;
                break;
            case "AbstractMethod":
            case 66:
                message.kind = 66;
                break;
            case "Accessor":
            case 72:
                message.kind = 72;
                break;
            case "Array":
            case 1:
                message.kind = 1;
                break;
            case "Assertion":
            case 2:
                message.kind = 2;
                break;
            case "AssociatedType":
            case 3:
                message.kind = 3;
                break;
            case "Attribute":
            case 4:
                message.kind = 4;
                break;
            case "Axiom":
            case 5:
                message.kind = 5;
                break;
            case "Boolean":
            case 6:
                message.kind = 6;
                break;
            case "Class":
            case 7:
                message.kind = 7;
                break;
            case "Constant":
            case 8:
                message.kind = 8;
                break;
            case "Constructor":
            case 9:
                message.kind = 9;
                break;
            case "Contract":
            case 62:
                message.kind = 62;
                break;
            case "DataFamily":
            case 10:
                message.kind = 10;
                break;
            case "Delegate":
            case 73:
                message.kind = 73;
                break;
            case "Enum":
            case 11:
                message.kind = 11;
                break;
            case "EnumMember":
            case 12:
                message.kind = 12;
                break;
            case "Error":
            case 63:
                message.kind = 63;
                break;
            case "Event":
            case 13:
                message.kind = 13;
                break;
            case "Fact":
            case 14:
                message.kind = 14;
                break;
            case "Field":
            case 15:
                message.kind = 15;
                break;
            case "File":
            case 16:
                message.kind = 16;
                break;
            case "Function":
            case 17:
                message.kind = 17;
                break;
            case "Getter":
            case 18:
                message.kind = 18;
                break;
            case "Grammar":
            case 19:
                message.kind = 19;
                break;
            case "Instance":
            case 20:
                message.kind = 20;
                break;
            case "Interface":
            case 21:
                message.kind = 21;
                break;
            case "Key":
            case 22:
                message.kind = 22;
                break;
            case "Lang":
            case 23:
                message.kind = 23;
                break;
            case "Lemma":
            case 24:
                message.kind = 24;
                break;
            case "Library":
            case 64:
                message.kind = 64;
                break;
            case "Macro":
            case 25:
                message.kind = 25;
                break;
            case "Method":
            case 26:
                message.kind = 26;
                break;
            case "MethodAlias":
            case 74:
                message.kind = 74;
                break;
            case "MethodReceiver":
            case 27:
                message.kind = 27;
                break;
            case "MethodSpecification":
            case 67:
                message.kind = 67;
                break;
            case "Message":
            case 28:
                message.kind = 28;
                break;
            case "Modifier":
            case 65:
                message.kind = 65;
                break;
            case "Module":
            case 29:
                message.kind = 29;
                break;
            case "Namespace":
            case 30:
                message.kind = 30;
                break;
            case "Null":
            case 31:
                message.kind = 31;
                break;
            case "Number":
            case 32:
                message.kind = 32;
                break;
            case "Object":
            case 33:
                message.kind = 33;
                break;
            case "Operator":
            case 34:
                message.kind = 34;
                break;
            case "Package":
            case 35:
                message.kind = 35;
                break;
            case "PackageObject":
            case 36:
                message.kind = 36;
                break;
            case "Parameter":
            case 37:
                message.kind = 37;
                break;
            case "ParameterLabel":
            case 38:
                message.kind = 38;
                break;
            case "Pattern":
            case 39:
                message.kind = 39;
                break;
            case "Predicate":
            case 40:
                message.kind = 40;
                break;
            case "Property":
            case 41:
                message.kind = 41;
                break;
            case "Protocol":
            case 42:
                message.kind = 42;
                break;
            case "ProtocolMethod":
            case 68:
                message.kind = 68;
                break;
            case "PureVirtualMethod":
            case 69:
                message.kind = 69;
                break;
            case "Quasiquoter":
            case 43:
                message.kind = 43;
                break;
            case "SelfParameter":
            case 44:
                message.kind = 44;
                break;
            case "Setter":
            case 45:
                message.kind = 45;
                break;
            case "Signature":
            case 46:
                message.kind = 46;
                break;
            case "SingletonClass":
            case 75:
                message.kind = 75;
                break;
            case "SingletonMethod":
            case 76:
                message.kind = 76;
                break;
            case "StaticDataMember":
            case 77:
                message.kind = 77;
                break;
            case "StaticEvent":
            case 78:
                message.kind = 78;
                break;
            case "StaticField":
            case 79:
                message.kind = 79;
                break;
            case "StaticMethod":
            case 80:
                message.kind = 80;
                break;
            case "StaticProperty":
            case 81:
                message.kind = 81;
                break;
            case "StaticVariable":
            case 82:
                message.kind = 82;
                break;
            case "String":
            case 48:
                message.kind = 48;
                break;
            case "Struct":
            case 49:
                message.kind = 49;
                break;
            case "Subscript":
            case 47:
                message.kind = 47;
                break;
            case "Tactic":
            case 50:
                message.kind = 50;
                break;
            case "Theorem":
            case 51:
                message.kind = 51;
                break;
            case "ThisParameter":
            case 52:
                message.kind = 52;
                break;
            case "Trait":
            case 53:
                message.kind = 53;
                break;
            case "TraitMethod":
            case 70:
                message.kind = 70;
                break;
            case "Type":
            case 54:
                message.kind = 54;
                break;
            case "TypeAlias":
            case 55:
                message.kind = 55;
                break;
            case "TypeClass":
            case 56:
                message.kind = 56;
                break;
            case "TypeClassMethod":
            case 71:
                message.kind = 71;
                break;
            case "TypeFamily":
            case 57:
                message.kind = 57;
                break;
            case "TypeParameter":
            case 58:
                message.kind = 58;
                break;
            case "Union":
            case 59:
                message.kind = 59;
                break;
            case "Value":
            case 60:
                message.kind = 60;
                break;
            case "Variable":
            case 61:
                message.kind = 61;
                break;
            }
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.signatureDocumentation != null) {
                if (typeof object.signatureDocumentation !== "object")
                    throw TypeError(".scip.SymbolInformation.signatureDocumentation: object expected");
                message.signatureDocumentation = $root.scip.Document.fromObject(object.signatureDocumentation);
            }
            if (object.enclosingSymbol != null)
                message.enclosingSymbol = String(object.enclosingSymbol);
            return message;
        };

        /**
         * Creates a plain object from a SymbolInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.SymbolInformation
         * @static
         * @param {scip.SymbolInformation} message SymbolInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SymbolInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.documentation = [];
                object.relationships = [];
            }
            if (options.defaults) {
                object.symbol = "";
                object.kind = options.enums === String ? "UnspecifiedKind" : 0;
                object.displayName = "";
                object.signatureDocumentation = null;
                object.enclosingSymbol = "";
            }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.documentation && message.documentation.length) {
                object.documentation = [];
                for (var j = 0; j < message.documentation.length; ++j)
                    object.documentation[j] = message.documentation[j];
            }
            if (message.relationships && message.relationships.length) {
                object.relationships = [];
                for (var j = 0; j < message.relationships.length; ++j)
                    object.relationships[j] = $root.scip.Relationship.toObject(message.relationships[j], options);
            }
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = options.enums === String ? $root.scip.SymbolInformation.Kind[message.kind] === undefined ? message.kind : $root.scip.SymbolInformation.Kind[message.kind] : message.kind;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.signatureDocumentation != null && message.hasOwnProperty("signatureDocumentation"))
                object.signatureDocumentation = $root.scip.Document.toObject(message.signatureDocumentation, options);
            if (message.enclosingSymbol != null && message.hasOwnProperty("enclosingSymbol"))
                object.enclosingSymbol = message.enclosingSymbol;
            return object;
        };

        /**
         * Converts this SymbolInformation to JSON.
         * @function toJSON
         * @memberof scip.SymbolInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SymbolInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SymbolInformation
         * @function getTypeUrl
         * @memberof scip.SymbolInformation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SymbolInformation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.SymbolInformation";
        };

        /**
         * Kind enum.
         * @name scip.SymbolInformation.Kind
         * @enum {number}
         * @property {number} UnspecifiedKind=0 UnspecifiedKind value
         * @property {number} AbstractMethod=66 AbstractMethod value
         * @property {number} Accessor=72 Accessor value
         * @property {number} Array=1 Array value
         * @property {number} Assertion=2 Assertion value
         * @property {number} AssociatedType=3 AssociatedType value
         * @property {number} Attribute=4 Attribute value
         * @property {number} Axiom=5 Axiom value
         * @property {number} Boolean=6 Boolean value
         * @property {number} Class=7 Class value
         * @property {number} Constant=8 Constant value
         * @property {number} Constructor=9 Constructor value
         * @property {number} Contract=62 Contract value
         * @property {number} DataFamily=10 DataFamily value
         * @property {number} Delegate=73 Delegate value
         * @property {number} Enum=11 Enum value
         * @property {number} EnumMember=12 EnumMember value
         * @property {number} Error=63 Error value
         * @property {number} Event=13 Event value
         * @property {number} Fact=14 Fact value
         * @property {number} Field=15 Field value
         * @property {number} File=16 File value
         * @property {number} Function=17 Function value
         * @property {number} Getter=18 Getter value
         * @property {number} Grammar=19 Grammar value
         * @property {number} Instance=20 Instance value
         * @property {number} Interface=21 Interface value
         * @property {number} Key=22 Key value
         * @property {number} Lang=23 Lang value
         * @property {number} Lemma=24 Lemma value
         * @property {number} Library=64 Library value
         * @property {number} Macro=25 Macro value
         * @property {number} Method=26 Method value
         * @property {number} MethodAlias=74 MethodAlias value
         * @property {number} MethodReceiver=27 MethodReceiver value
         * @property {number} MethodSpecification=67 MethodSpecification value
         * @property {number} Message=28 Message value
         * @property {number} Modifier=65 Modifier value
         * @property {number} Module=29 Module value
         * @property {number} Namespace=30 Namespace value
         * @property {number} Null=31 Null value
         * @property {number} Number=32 Number value
         * @property {number} Object=33 Object value
         * @property {number} Operator=34 Operator value
         * @property {number} Package=35 Package value
         * @property {number} PackageObject=36 PackageObject value
         * @property {number} Parameter=37 Parameter value
         * @property {number} ParameterLabel=38 ParameterLabel value
         * @property {number} Pattern=39 Pattern value
         * @property {number} Predicate=40 Predicate value
         * @property {number} Property=41 Property value
         * @property {number} Protocol=42 Protocol value
         * @property {number} ProtocolMethod=68 ProtocolMethod value
         * @property {number} PureVirtualMethod=69 PureVirtualMethod value
         * @property {number} Quasiquoter=43 Quasiquoter value
         * @property {number} SelfParameter=44 SelfParameter value
         * @property {number} Setter=45 Setter value
         * @property {number} Signature=46 Signature value
         * @property {number} SingletonClass=75 SingletonClass value
         * @property {number} SingletonMethod=76 SingletonMethod value
         * @property {number} StaticDataMember=77 StaticDataMember value
         * @property {number} StaticEvent=78 StaticEvent value
         * @property {number} StaticField=79 StaticField value
         * @property {number} StaticMethod=80 StaticMethod value
         * @property {number} StaticProperty=81 StaticProperty value
         * @property {number} StaticVariable=82 StaticVariable value
         * @property {number} String=48 String value
         * @property {number} Struct=49 Struct value
         * @property {number} Subscript=47 Subscript value
         * @property {number} Tactic=50 Tactic value
         * @property {number} Theorem=51 Theorem value
         * @property {number} ThisParameter=52 ThisParameter value
         * @property {number} Trait=53 Trait value
         * @property {number} TraitMethod=70 TraitMethod value
         * @property {number} Type=54 Type value
         * @property {number} TypeAlias=55 TypeAlias value
         * @property {number} TypeClass=56 TypeClass value
         * @property {number} TypeClassMethod=71 TypeClassMethod value
         * @property {number} TypeFamily=57 TypeFamily value
         * @property {number} TypeParameter=58 TypeParameter value
         * @property {number} Union=59 Union value
         * @property {number} Value=60 Value value
         * @property {number} Variable=61 Variable value
         */
        SymbolInformation.Kind = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UnspecifiedKind"] = 0;
            values[valuesById[66] = "AbstractMethod"] = 66;
            values[valuesById[72] = "Accessor"] = 72;
            values[valuesById[1] = "Array"] = 1;
            values[valuesById[2] = "Assertion"] = 2;
            values[valuesById[3] = "AssociatedType"] = 3;
            values[valuesById[4] = "Attribute"] = 4;
            values[valuesById[5] = "Axiom"] = 5;
            values[valuesById[6] = "Boolean"] = 6;
            values[valuesById[7] = "Class"] = 7;
            values[valuesById[8] = "Constant"] = 8;
            values[valuesById[9] = "Constructor"] = 9;
            values[valuesById[62] = "Contract"] = 62;
            values[valuesById[10] = "DataFamily"] = 10;
            values[valuesById[73] = "Delegate"] = 73;
            values[valuesById[11] = "Enum"] = 11;
            values[valuesById[12] = "EnumMember"] = 12;
            values[valuesById[63] = "Error"] = 63;
            values[valuesById[13] = "Event"] = 13;
            values[valuesById[14] = "Fact"] = 14;
            values[valuesById[15] = "Field"] = 15;
            values[valuesById[16] = "File"] = 16;
            values[valuesById[17] = "Function"] = 17;
            values[valuesById[18] = "Getter"] = 18;
            values[valuesById[19] = "Grammar"] = 19;
            values[valuesById[20] = "Instance"] = 20;
            values[valuesById[21] = "Interface"] = 21;
            values[valuesById[22] = "Key"] = 22;
            values[valuesById[23] = "Lang"] = 23;
            values[valuesById[24] = "Lemma"] = 24;
            values[valuesById[64] = "Library"] = 64;
            values[valuesById[25] = "Macro"] = 25;
            values[valuesById[26] = "Method"] = 26;
            values[valuesById[74] = "MethodAlias"] = 74;
            values[valuesById[27] = "MethodReceiver"] = 27;
            values[valuesById[67] = "MethodSpecification"] = 67;
            values[valuesById[28] = "Message"] = 28;
            values[valuesById[65] = "Modifier"] = 65;
            values[valuesById[29] = "Module"] = 29;
            values[valuesById[30] = "Namespace"] = 30;
            values[valuesById[31] = "Null"] = 31;
            values[valuesById[32] = "Number"] = 32;
            values[valuesById[33] = "Object"] = 33;
            values[valuesById[34] = "Operator"] = 34;
            values[valuesById[35] = "Package"] = 35;
            values[valuesById[36] = "PackageObject"] = 36;
            values[valuesById[37] = "Parameter"] = 37;
            values[valuesById[38] = "ParameterLabel"] = 38;
            values[valuesById[39] = "Pattern"] = 39;
            values[valuesById[40] = "Predicate"] = 40;
            values[valuesById[41] = "Property"] = 41;
            values[valuesById[42] = "Protocol"] = 42;
            values[valuesById[68] = "ProtocolMethod"] = 68;
            values[valuesById[69] = "PureVirtualMethod"] = 69;
            values[valuesById[43] = "Quasiquoter"] = 43;
            values[valuesById[44] = "SelfParameter"] = 44;
            values[valuesById[45] = "Setter"] = 45;
            values[valuesById[46] = "Signature"] = 46;
            values[valuesById[75] = "SingletonClass"] = 75;
            values[valuesById[76] = "SingletonMethod"] = 76;
            values[valuesById[77] = "StaticDataMember"] = 77;
            values[valuesById[78] = "StaticEvent"] = 78;
            values[valuesById[79] = "StaticField"] = 79;
            values[valuesById[80] = "StaticMethod"] = 80;
            values[valuesById[81] = "StaticProperty"] = 81;
            values[valuesById[82] = "StaticVariable"] = 82;
            values[valuesById[48] = "String"] = 48;
            values[valuesById[49] = "Struct"] = 49;
            values[valuesById[47] = "Subscript"] = 47;
            values[valuesById[50] = "Tactic"] = 50;
            values[valuesById[51] = "Theorem"] = 51;
            values[valuesById[52] = "ThisParameter"] = 52;
            values[valuesById[53] = "Trait"] = 53;
            values[valuesById[70] = "TraitMethod"] = 70;
            values[valuesById[54] = "Type"] = 54;
            values[valuesById[55] = "TypeAlias"] = 55;
            values[valuesById[56] = "TypeClass"] = 56;
            values[valuesById[71] = "TypeClassMethod"] = 71;
            values[valuesById[57] = "TypeFamily"] = 57;
            values[valuesById[58] = "TypeParameter"] = 58;
            values[valuesById[59] = "Union"] = 59;
            values[valuesById[60] = "Value"] = 60;
            values[valuesById[61] = "Variable"] = 61;
            return values;
        })();

        return SymbolInformation;
    })();

    scip.Relationship = (function() {

        /**
         * Properties of a Relationship.
         * @memberof scip
         * @interface IRelationship
         * @property {string|null} [symbol] Relationship symbol
         * @property {boolean|null} [isReference] Relationship isReference
         * @property {boolean|null} [isImplementation] Relationship isImplementation
         * @property {boolean|null} [isTypeDefinition] Relationship isTypeDefinition
         * @property {boolean|null} [isDefinition] Relationship isDefinition
         */

        /**
         * Constructs a new Relationship.
         * @memberof scip
         * @classdesc Represents a Relationship.
         * @implements IRelationship
         * @constructor
         * @param {scip.IRelationship=} [properties] Properties to set
         */
        function Relationship(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Relationship symbol.
         * @member {string} symbol
         * @memberof scip.Relationship
         * @instance
         */
        Relationship.prototype.symbol = "";

        /**
         * Relationship isReference.
         * @member {boolean} isReference
         * @memberof scip.Relationship
         * @instance
         */
        Relationship.prototype.isReference = false;

        /**
         * Relationship isImplementation.
         * @member {boolean} isImplementation
         * @memberof scip.Relationship
         * @instance
         */
        Relationship.prototype.isImplementation = false;

        /**
         * Relationship isTypeDefinition.
         * @member {boolean} isTypeDefinition
         * @memberof scip.Relationship
         * @instance
         */
        Relationship.prototype.isTypeDefinition = false;

        /**
         * Relationship isDefinition.
         * @member {boolean} isDefinition
         * @memberof scip.Relationship
         * @instance
         */
        Relationship.prototype.isDefinition = false;

        /**
         * Creates a new Relationship instance using the specified properties.
         * @function create
         * @memberof scip.Relationship
         * @static
         * @param {scip.IRelationship=} [properties] Properties to set
         * @returns {scip.Relationship} Relationship instance
         */
        Relationship.create = function create(properties) {
            return new Relationship(properties);
        };

        /**
         * Encodes the specified Relationship message. Does not implicitly {@link scip.Relationship.verify|verify} messages.
         * @function encode
         * @memberof scip.Relationship
         * @static
         * @param {scip.IRelationship} message Relationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Relationship.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.symbol);
            if (message.isReference != null && Object.hasOwnProperty.call(message, "isReference"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isReference);
            if (message.isImplementation != null && Object.hasOwnProperty.call(message, "isImplementation"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isImplementation);
            if (message.isTypeDefinition != null && Object.hasOwnProperty.call(message, "isTypeDefinition"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isTypeDefinition);
            if (message.isDefinition != null && Object.hasOwnProperty.call(message, "isDefinition"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isDefinition);
            return writer;
        };

        /**
         * Encodes the specified Relationship message, length delimited. Does not implicitly {@link scip.Relationship.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Relationship
         * @static
         * @param {scip.IRelationship} message Relationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Relationship.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Relationship message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Relationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Relationship} Relationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Relationship.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Relationship();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.symbol = reader.string();
                        break;
                    }
                case 2: {
                        message.isReference = reader.bool();
                        break;
                    }
                case 3: {
                        message.isImplementation = reader.bool();
                        break;
                    }
                case 4: {
                        message.isTypeDefinition = reader.bool();
                        break;
                    }
                case 5: {
                        message.isDefinition = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Relationship message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Relationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Relationship} Relationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Relationship.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Relationship message.
         * @function verify
         * @memberof scip.Relationship
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Relationship.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.isReference != null && message.hasOwnProperty("isReference"))
                if (typeof message.isReference !== "boolean")
                    return "isReference: boolean expected";
            if (message.isImplementation != null && message.hasOwnProperty("isImplementation"))
                if (typeof message.isImplementation !== "boolean")
                    return "isImplementation: boolean expected";
            if (message.isTypeDefinition != null && message.hasOwnProperty("isTypeDefinition"))
                if (typeof message.isTypeDefinition !== "boolean")
                    return "isTypeDefinition: boolean expected";
            if (message.isDefinition != null && message.hasOwnProperty("isDefinition"))
                if (typeof message.isDefinition !== "boolean")
                    return "isDefinition: boolean expected";
            return null;
        };

        /**
         * Creates a Relationship message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Relationship
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Relationship} Relationship
         */
        Relationship.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Relationship)
                return object;
            var message = new $root.scip.Relationship();
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.isReference != null)
                message.isReference = Boolean(object.isReference);
            if (object.isImplementation != null)
                message.isImplementation = Boolean(object.isImplementation);
            if (object.isTypeDefinition != null)
                message.isTypeDefinition = Boolean(object.isTypeDefinition);
            if (object.isDefinition != null)
                message.isDefinition = Boolean(object.isDefinition);
            return message;
        };

        /**
         * Creates a plain object from a Relationship message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Relationship
         * @static
         * @param {scip.Relationship} message Relationship
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Relationship.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.symbol = "";
                object.isReference = false;
                object.isImplementation = false;
                object.isTypeDefinition = false;
                object.isDefinition = false;
            }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.isReference != null && message.hasOwnProperty("isReference"))
                object.isReference = message.isReference;
            if (message.isImplementation != null && message.hasOwnProperty("isImplementation"))
                object.isImplementation = message.isImplementation;
            if (message.isTypeDefinition != null && message.hasOwnProperty("isTypeDefinition"))
                object.isTypeDefinition = message.isTypeDefinition;
            if (message.isDefinition != null && message.hasOwnProperty("isDefinition"))
                object.isDefinition = message.isDefinition;
            return object;
        };

        /**
         * Converts this Relationship to JSON.
         * @function toJSON
         * @memberof scip.Relationship
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Relationship.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Relationship
         * @function getTypeUrl
         * @memberof scip.Relationship
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Relationship.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Relationship";
        };

        return Relationship;
    })();

    /**
     * SymbolRole enum.
     * @name scip.SymbolRole
     * @enum {number}
     * @property {number} UnspecifiedSymbolRole=0 UnspecifiedSymbolRole value
     * @property {number} Definition=1 Definition value
     * @property {number} Import=2 Import value
     * @property {number} WriteAccess=4 WriteAccess value
     * @property {number} ReadAccess=8 ReadAccess value
     * @property {number} Generated=16 Generated value
     * @property {number} Test=32 Test value
     * @property {number} ForwardDefinition=64 ForwardDefinition value
     */
    scip.SymbolRole = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnspecifiedSymbolRole"] = 0;
        values[valuesById[1] = "Definition"] = 1;
        values[valuesById[2] = "Import"] = 2;
        values[valuesById[4] = "WriteAccess"] = 4;
        values[valuesById[8] = "ReadAccess"] = 8;
        values[valuesById[16] = "Generated"] = 16;
        values[valuesById[32] = "Test"] = 32;
        values[valuesById[64] = "ForwardDefinition"] = 64;
        return values;
    })();

    /**
     * SyntaxKind enum.
     * @name scip.SyntaxKind
     * @enum {number}
     * @property {number} UnspecifiedSyntaxKind=0 UnspecifiedSyntaxKind value
     * @property {number} Comment=1 Comment value
     * @property {number} PunctuationDelimiter=2 PunctuationDelimiter value
     * @property {number} PunctuationBracket=3 PunctuationBracket value
     * @property {number} Keyword=4 Keyword value
     * @property {number} IdentifierKeyword=4 IdentifierKeyword value
     * @property {number} IdentifierOperator=5 IdentifierOperator value
     * @property {number} Identifier=6 Identifier value
     * @property {number} IdentifierBuiltin=7 IdentifierBuiltin value
     * @property {number} IdentifierNull=8 IdentifierNull value
     * @property {number} IdentifierConstant=9 IdentifierConstant value
     * @property {number} IdentifierMutableGlobal=10 IdentifierMutableGlobal value
     * @property {number} IdentifierParameter=11 IdentifierParameter value
     * @property {number} IdentifierLocal=12 IdentifierLocal value
     * @property {number} IdentifierShadowed=13 IdentifierShadowed value
     * @property {number} IdentifierNamespace=14 IdentifierNamespace value
     * @property {number} IdentifierModule=14 IdentifierModule value
     * @property {number} IdentifierFunction=15 IdentifierFunction value
     * @property {number} IdentifierFunctionDefinition=16 IdentifierFunctionDefinition value
     * @property {number} IdentifierMacro=17 IdentifierMacro value
     * @property {number} IdentifierMacroDefinition=18 IdentifierMacroDefinition value
     * @property {number} IdentifierType=19 IdentifierType value
     * @property {number} IdentifierBuiltinType=20 IdentifierBuiltinType value
     * @property {number} IdentifierAttribute=21 IdentifierAttribute value
     * @property {number} RegexEscape=22 RegexEscape value
     * @property {number} RegexRepeated=23 RegexRepeated value
     * @property {number} RegexWildcard=24 RegexWildcard value
     * @property {number} RegexDelimiter=25 RegexDelimiter value
     * @property {number} RegexJoin=26 RegexJoin value
     * @property {number} StringLiteral=27 StringLiteral value
     * @property {number} StringLiteralEscape=28 StringLiteralEscape value
     * @property {number} StringLiteralSpecial=29 StringLiteralSpecial value
     * @property {number} StringLiteralKey=30 StringLiteralKey value
     * @property {number} CharacterLiteral=31 CharacterLiteral value
     * @property {number} NumericLiteral=32 NumericLiteral value
     * @property {number} BooleanLiteral=33 BooleanLiteral value
     * @property {number} Tag=34 Tag value
     * @property {number} TagAttribute=35 TagAttribute value
     * @property {number} TagDelimiter=36 TagDelimiter value
     */
    scip.SyntaxKind = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnspecifiedSyntaxKind"] = 0;
        values[valuesById[1] = "Comment"] = 1;
        values[valuesById[2] = "PunctuationDelimiter"] = 2;
        values[valuesById[3] = "PunctuationBracket"] = 3;
        values[valuesById[4] = "Keyword"] = 4;
        values["IdentifierKeyword"] = 4;
        values[valuesById[5] = "IdentifierOperator"] = 5;
        values[valuesById[6] = "Identifier"] = 6;
        values[valuesById[7] = "IdentifierBuiltin"] = 7;
        values[valuesById[8] = "IdentifierNull"] = 8;
        values[valuesById[9] = "IdentifierConstant"] = 9;
        values[valuesById[10] = "IdentifierMutableGlobal"] = 10;
        values[valuesById[11] = "IdentifierParameter"] = 11;
        values[valuesById[12] = "IdentifierLocal"] = 12;
        values[valuesById[13] = "IdentifierShadowed"] = 13;
        values[valuesById[14] = "IdentifierNamespace"] = 14;
        values["IdentifierModule"] = 14;
        values[valuesById[15] = "IdentifierFunction"] = 15;
        values[valuesById[16] = "IdentifierFunctionDefinition"] = 16;
        values[valuesById[17] = "IdentifierMacro"] = 17;
        values[valuesById[18] = "IdentifierMacroDefinition"] = 18;
        values[valuesById[19] = "IdentifierType"] = 19;
        values[valuesById[20] = "IdentifierBuiltinType"] = 20;
        values[valuesById[21] = "IdentifierAttribute"] = 21;
        values[valuesById[22] = "RegexEscape"] = 22;
        values[valuesById[23] = "RegexRepeated"] = 23;
        values[valuesById[24] = "RegexWildcard"] = 24;
        values[valuesById[25] = "RegexDelimiter"] = 25;
        values[valuesById[26] = "RegexJoin"] = 26;
        values[valuesById[27] = "StringLiteral"] = 27;
        values[valuesById[28] = "StringLiteralEscape"] = 28;
        values[valuesById[29] = "StringLiteralSpecial"] = 29;
        values[valuesById[30] = "StringLiteralKey"] = 30;
        values[valuesById[31] = "CharacterLiteral"] = 31;
        values[valuesById[32] = "NumericLiteral"] = 32;
        values[valuesById[33] = "BooleanLiteral"] = 33;
        values[valuesById[34] = "Tag"] = 34;
        values[valuesById[35] = "TagAttribute"] = 35;
        values[valuesById[36] = "TagDelimiter"] = 36;
        return values;
    })();

    scip.Occurrence = (function() {

        /**
         * Properties of an Occurrence.
         * @memberof scip
         * @interface IOccurrence
         * @property {Array.<number>|null} [range] Occurrence range
         * @property {string|null} [symbol] Occurrence symbol
         * @property {number|null} [symbolRoles] Occurrence symbolRoles
         * @property {Array.<string>|null} [overrideDocumentation] Occurrence overrideDocumentation
         * @property {scip.SyntaxKind|null} [syntaxKind] Occurrence syntaxKind
         * @property {Array.<scip.IDiagnostic>|null} [diagnostics] Occurrence diagnostics
         * @property {Array.<number>|null} [enclosingRange] Occurrence enclosingRange
         */

        /**
         * Constructs a new Occurrence.
         * @memberof scip
         * @classdesc Represents an Occurrence.
         * @implements IOccurrence
         * @constructor
         * @param {scip.IOccurrence=} [properties] Properties to set
         */
        function Occurrence(properties) {
            this.range = [];
            this.overrideDocumentation = [];
            this.diagnostics = [];
            this.enclosingRange = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Occurrence range.
         * @member {Array.<number>} range
         * @memberof scip.Occurrence
         * @instance
         */
        Occurrence.prototype.range = $util.emptyArray;

        /**
         * Occurrence symbol.
         * @member {string} symbol
         * @memberof scip.Occurrence
         * @instance
         */
        Occurrence.prototype.symbol = "";

        /**
         * Occurrence symbolRoles.
         * @member {number} symbolRoles
         * @memberof scip.Occurrence
         * @instance
         */
        Occurrence.prototype.symbolRoles = 0;

        /**
         * Occurrence overrideDocumentation.
         * @member {Array.<string>} overrideDocumentation
         * @memberof scip.Occurrence
         * @instance
         */
        Occurrence.prototype.overrideDocumentation = $util.emptyArray;

        /**
         * Occurrence syntaxKind.
         * @member {scip.SyntaxKind} syntaxKind
         * @memberof scip.Occurrence
         * @instance
         */
        Occurrence.prototype.syntaxKind = 0;

        /**
         * Occurrence diagnostics.
         * @member {Array.<scip.IDiagnostic>} diagnostics
         * @memberof scip.Occurrence
         * @instance
         */
        Occurrence.prototype.diagnostics = $util.emptyArray;

        /**
         * Occurrence enclosingRange.
         * @member {Array.<number>} enclosingRange
         * @memberof scip.Occurrence
         * @instance
         */
        Occurrence.prototype.enclosingRange = $util.emptyArray;

        /**
         * Creates a new Occurrence instance using the specified properties.
         * @function create
         * @memberof scip.Occurrence
         * @static
         * @param {scip.IOccurrence=} [properties] Properties to set
         * @returns {scip.Occurrence} Occurrence instance
         */
        Occurrence.create = function create(properties) {
            return new Occurrence(properties);
        };

        /**
         * Encodes the specified Occurrence message. Does not implicitly {@link scip.Occurrence.verify|verify} messages.
         * @function encode
         * @memberof scip.Occurrence
         * @static
         * @param {scip.IOccurrence} message Occurrence message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Occurrence.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.range != null && message.range.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.range.length; ++i)
                    writer.int32(message.range[i]);
                writer.ldelim();
            }
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.symbol);
            if (message.symbolRoles != null && Object.hasOwnProperty.call(message, "symbolRoles"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.symbolRoles);
            if (message.overrideDocumentation != null && message.overrideDocumentation.length)
                for (var i = 0; i < message.overrideDocumentation.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.overrideDocumentation[i]);
            if (message.syntaxKind != null && Object.hasOwnProperty.call(message, "syntaxKind"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.syntaxKind);
            if (message.diagnostics != null && message.diagnostics.length)
                for (var i = 0; i < message.diagnostics.length; ++i)
                    $root.scip.Diagnostic.encode(message.diagnostics[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.enclosingRange != null && message.enclosingRange.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.enclosingRange.length; ++i)
                    writer.int32(message.enclosingRange[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Occurrence message, length delimited. Does not implicitly {@link scip.Occurrence.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Occurrence
         * @static
         * @param {scip.IOccurrence} message Occurrence message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Occurrence.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Occurrence message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Occurrence
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Occurrence} Occurrence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Occurrence.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Occurrence();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.range && message.range.length))
                            message.range = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.range.push(reader.int32());
                        } else
                            message.range.push(reader.int32());
                        break;
                    }
                case 2: {
                        message.symbol = reader.string();
                        break;
                    }
                case 3: {
                        message.symbolRoles = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.overrideDocumentation && message.overrideDocumentation.length))
                            message.overrideDocumentation = [];
                        message.overrideDocumentation.push(reader.string());
                        break;
                    }
                case 5: {
                        message.syntaxKind = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.diagnostics && message.diagnostics.length))
                            message.diagnostics = [];
                        message.diagnostics.push($root.scip.Diagnostic.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        if (!(message.enclosingRange && message.enclosingRange.length))
                            message.enclosingRange = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.enclosingRange.push(reader.int32());
                        } else
                            message.enclosingRange.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Occurrence message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Occurrence
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Occurrence} Occurrence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Occurrence.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Occurrence message.
         * @function verify
         * @memberof scip.Occurrence
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Occurrence.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.range != null && message.hasOwnProperty("range")) {
                if (!Array.isArray(message.range))
                    return "range: array expected";
                for (var i = 0; i < message.range.length; ++i)
                    if (!$util.isInteger(message.range[i]))
                        return "range: integer[] expected";
            }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.symbolRoles != null && message.hasOwnProperty("symbolRoles"))
                if (!$util.isInteger(message.symbolRoles))
                    return "symbolRoles: integer expected";
            if (message.overrideDocumentation != null && message.hasOwnProperty("overrideDocumentation")) {
                if (!Array.isArray(message.overrideDocumentation))
                    return "overrideDocumentation: array expected";
                for (var i = 0; i < message.overrideDocumentation.length; ++i)
                    if (!$util.isString(message.overrideDocumentation[i]))
                        return "overrideDocumentation: string[] expected";
            }
            if (message.syntaxKind != null && message.hasOwnProperty("syntaxKind"))
                switch (message.syntaxKind) {
                default:
                    return "syntaxKind: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                    break;
                }
            if (message.diagnostics != null && message.hasOwnProperty("diagnostics")) {
                if (!Array.isArray(message.diagnostics))
                    return "diagnostics: array expected";
                for (var i = 0; i < message.diagnostics.length; ++i) {
                    var error = $root.scip.Diagnostic.verify(message.diagnostics[i]);
                    if (error)
                        return "diagnostics." + error;
                }
            }
            if (message.enclosingRange != null && message.hasOwnProperty("enclosingRange")) {
                if (!Array.isArray(message.enclosingRange))
                    return "enclosingRange: array expected";
                for (var i = 0; i < message.enclosingRange.length; ++i)
                    if (!$util.isInteger(message.enclosingRange[i]))
                        return "enclosingRange: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an Occurrence message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Occurrence
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Occurrence} Occurrence
         */
        Occurrence.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Occurrence)
                return object;
            var message = new $root.scip.Occurrence();
            if (object.range) {
                if (!Array.isArray(object.range))
                    throw TypeError(".scip.Occurrence.range: array expected");
                message.range = [];
                for (var i = 0; i < object.range.length; ++i)
                    message.range[i] = object.range[i] | 0;
            }
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.symbolRoles != null)
                message.symbolRoles = object.symbolRoles | 0;
            if (object.overrideDocumentation) {
                if (!Array.isArray(object.overrideDocumentation))
                    throw TypeError(".scip.Occurrence.overrideDocumentation: array expected");
                message.overrideDocumentation = [];
                for (var i = 0; i < object.overrideDocumentation.length; ++i)
                    message.overrideDocumentation[i] = String(object.overrideDocumentation[i]);
            }
            switch (object.syntaxKind) {
            default:
                if (typeof object.syntaxKind === "number") {
                    message.syntaxKind = object.syntaxKind;
                    break;
                }
                break;
            case "UnspecifiedSyntaxKind":
            case 0:
                message.syntaxKind = 0;
                break;
            case "Comment":
            case 1:
                message.syntaxKind = 1;
                break;
            case "PunctuationDelimiter":
            case 2:
                message.syntaxKind = 2;
                break;
            case "PunctuationBracket":
            case 3:
                message.syntaxKind = 3;
                break;
            case "Keyword":
            case 4:
                message.syntaxKind = 4;
                break;
            case "IdentifierKeyword":
            case 4:
                message.syntaxKind = 4;
                break;
            case "IdentifierOperator":
            case 5:
                message.syntaxKind = 5;
                break;
            case "Identifier":
            case 6:
                message.syntaxKind = 6;
                break;
            case "IdentifierBuiltin":
            case 7:
                message.syntaxKind = 7;
                break;
            case "IdentifierNull":
            case 8:
                message.syntaxKind = 8;
                break;
            case "IdentifierConstant":
            case 9:
                message.syntaxKind = 9;
                break;
            case "IdentifierMutableGlobal":
            case 10:
                message.syntaxKind = 10;
                break;
            case "IdentifierParameter":
            case 11:
                message.syntaxKind = 11;
                break;
            case "IdentifierLocal":
            case 12:
                message.syntaxKind = 12;
                break;
            case "IdentifierShadowed":
            case 13:
                message.syntaxKind = 13;
                break;
            case "IdentifierNamespace":
            case 14:
                message.syntaxKind = 14;
                break;
            case "IdentifierModule":
            case 14:
                message.syntaxKind = 14;
                break;
            case "IdentifierFunction":
            case 15:
                message.syntaxKind = 15;
                break;
            case "IdentifierFunctionDefinition":
            case 16:
                message.syntaxKind = 16;
                break;
            case "IdentifierMacro":
            case 17:
                message.syntaxKind = 17;
                break;
            case "IdentifierMacroDefinition":
            case 18:
                message.syntaxKind = 18;
                break;
            case "IdentifierType":
            case 19:
                message.syntaxKind = 19;
                break;
            case "IdentifierBuiltinType":
            case 20:
                message.syntaxKind = 20;
                break;
            case "IdentifierAttribute":
            case 21:
                message.syntaxKind = 21;
                break;
            case "RegexEscape":
            case 22:
                message.syntaxKind = 22;
                break;
            case "RegexRepeated":
            case 23:
                message.syntaxKind = 23;
                break;
            case "RegexWildcard":
            case 24:
                message.syntaxKind = 24;
                break;
            case "RegexDelimiter":
            case 25:
                message.syntaxKind = 25;
                break;
            case "RegexJoin":
            case 26:
                message.syntaxKind = 26;
                break;
            case "StringLiteral":
            case 27:
                message.syntaxKind = 27;
                break;
            case "StringLiteralEscape":
            case 28:
                message.syntaxKind = 28;
                break;
            case "StringLiteralSpecial":
            case 29:
                message.syntaxKind = 29;
                break;
            case "StringLiteralKey":
            case 30:
                message.syntaxKind = 30;
                break;
            case "CharacterLiteral":
            case 31:
                message.syntaxKind = 31;
                break;
            case "NumericLiteral":
            case 32:
                message.syntaxKind = 32;
                break;
            case "BooleanLiteral":
            case 33:
                message.syntaxKind = 33;
                break;
            case "Tag":
            case 34:
                message.syntaxKind = 34;
                break;
            case "TagAttribute":
            case 35:
                message.syntaxKind = 35;
                break;
            case "TagDelimiter":
            case 36:
                message.syntaxKind = 36;
                break;
            }
            if (object.diagnostics) {
                if (!Array.isArray(object.diagnostics))
                    throw TypeError(".scip.Occurrence.diagnostics: array expected");
                message.diagnostics = [];
                for (var i = 0; i < object.diagnostics.length; ++i) {
                    if (typeof object.diagnostics[i] !== "object")
                        throw TypeError(".scip.Occurrence.diagnostics: object expected");
                    message.diagnostics[i] = $root.scip.Diagnostic.fromObject(object.diagnostics[i]);
                }
            }
            if (object.enclosingRange) {
                if (!Array.isArray(object.enclosingRange))
                    throw TypeError(".scip.Occurrence.enclosingRange: array expected");
                message.enclosingRange = [];
                for (var i = 0; i < object.enclosingRange.length; ++i)
                    message.enclosingRange[i] = object.enclosingRange[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an Occurrence message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Occurrence
         * @static
         * @param {scip.Occurrence} message Occurrence
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Occurrence.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.range = [];
                object.overrideDocumentation = [];
                object.diagnostics = [];
                object.enclosingRange = [];
            }
            if (options.defaults) {
                object.symbol = "";
                object.symbolRoles = 0;
                object.syntaxKind = options.enums === String ? "UnspecifiedSyntaxKind" : 0;
            }
            if (message.range && message.range.length) {
                object.range = [];
                for (var j = 0; j < message.range.length; ++j)
                    object.range[j] = message.range[j];
            }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.symbolRoles != null && message.hasOwnProperty("symbolRoles"))
                object.symbolRoles = message.symbolRoles;
            if (message.overrideDocumentation && message.overrideDocumentation.length) {
                object.overrideDocumentation = [];
                for (var j = 0; j < message.overrideDocumentation.length; ++j)
                    object.overrideDocumentation[j] = message.overrideDocumentation[j];
            }
            if (message.syntaxKind != null && message.hasOwnProperty("syntaxKind"))
                object.syntaxKind = options.enums === String ? $root.scip.SyntaxKind[message.syntaxKind] === undefined ? message.syntaxKind : $root.scip.SyntaxKind[message.syntaxKind] : message.syntaxKind;
            if (message.diagnostics && message.diagnostics.length) {
                object.diagnostics = [];
                for (var j = 0; j < message.diagnostics.length; ++j)
                    object.diagnostics[j] = $root.scip.Diagnostic.toObject(message.diagnostics[j], options);
            }
            if (message.enclosingRange && message.enclosingRange.length) {
                object.enclosingRange = [];
                for (var j = 0; j < message.enclosingRange.length; ++j)
                    object.enclosingRange[j] = message.enclosingRange[j];
            }
            return object;
        };

        /**
         * Converts this Occurrence to JSON.
         * @function toJSON
         * @memberof scip.Occurrence
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Occurrence.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Occurrence
         * @function getTypeUrl
         * @memberof scip.Occurrence
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Occurrence.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Occurrence";
        };

        return Occurrence;
    })();

    scip.Diagnostic = (function() {

        /**
         * Properties of a Diagnostic.
         * @memberof scip
         * @interface IDiagnostic
         * @property {scip.Severity|null} [severity] Diagnostic severity
         * @property {string|null} [code] Diagnostic code
         * @property {string|null} [message] Diagnostic message
         * @property {string|null} [source] Diagnostic source
         * @property {Array.<scip.DiagnosticTag>|null} [tags] Diagnostic tags
         */

        /**
         * Constructs a new Diagnostic.
         * @memberof scip
         * @classdesc Represents a Diagnostic.
         * @implements IDiagnostic
         * @constructor
         * @param {scip.IDiagnostic=} [properties] Properties to set
         */
        function Diagnostic(properties) {
            this.tags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Diagnostic severity.
         * @member {scip.Severity} severity
         * @memberof scip.Diagnostic
         * @instance
         */
        Diagnostic.prototype.severity = 0;

        /**
         * Diagnostic code.
         * @member {string} code
         * @memberof scip.Diagnostic
         * @instance
         */
        Diagnostic.prototype.code = "";

        /**
         * Diagnostic message.
         * @member {string} message
         * @memberof scip.Diagnostic
         * @instance
         */
        Diagnostic.prototype.message = "";

        /**
         * Diagnostic source.
         * @member {string} source
         * @memberof scip.Diagnostic
         * @instance
         */
        Diagnostic.prototype.source = "";

        /**
         * Diagnostic tags.
         * @member {Array.<scip.DiagnosticTag>} tags
         * @memberof scip.Diagnostic
         * @instance
         */
        Diagnostic.prototype.tags = $util.emptyArray;

        /**
         * Creates a new Diagnostic instance using the specified properties.
         * @function create
         * @memberof scip.Diagnostic
         * @static
         * @param {scip.IDiagnostic=} [properties] Properties to set
         * @returns {scip.Diagnostic} Diagnostic instance
         */
        Diagnostic.create = function create(properties) {
            return new Diagnostic(properties);
        };

        /**
         * Encodes the specified Diagnostic message. Does not implicitly {@link scip.Diagnostic.verify|verify} messages.
         * @function encode
         * @memberof scip.Diagnostic
         * @static
         * @param {scip.IDiagnostic} message Diagnostic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Diagnostic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.severity != null && Object.hasOwnProperty.call(message, "severity"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.severity);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.source);
            if (message.tags != null && message.tags.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.tags.length; ++i)
                    writer.int32(message.tags[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Diagnostic message, length delimited. Does not implicitly {@link scip.Diagnostic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof scip.Diagnostic
         * @static
         * @param {scip.IDiagnostic} message Diagnostic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Diagnostic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Diagnostic message from the specified reader or buffer.
         * @function decode
         * @memberof scip.Diagnostic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {scip.Diagnostic} Diagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Diagnostic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.scip.Diagnostic();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.severity = reader.int32();
                        break;
                    }
                case 2: {
                        message.code = reader.string();
                        break;
                    }
                case 3: {
                        message.message = reader.string();
                        break;
                    }
                case 4: {
                        message.source = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.tags.push(reader.int32());
                        } else
                            message.tags.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Diagnostic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof scip.Diagnostic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {scip.Diagnostic} Diagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Diagnostic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Diagnostic message.
         * @function verify
         * @memberof scip.Diagnostic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Diagnostic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.severity != null && message.hasOwnProperty("severity"))
                switch (message.severity) {
                default:
                    return "severity: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isString(message.source))
                    return "source: string expected";
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    switch (message.tags[i]) {
                    default:
                        return "tags: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a Diagnostic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof scip.Diagnostic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {scip.Diagnostic} Diagnostic
         */
        Diagnostic.fromObject = function fromObject(object) {
            if (object instanceof $root.scip.Diagnostic)
                return object;
            var message = new $root.scip.Diagnostic();
            switch (object.severity) {
            default:
                if (typeof object.severity === "number") {
                    message.severity = object.severity;
                    break;
                }
                break;
            case "UnspecifiedSeverity":
            case 0:
                message.severity = 0;
                break;
            case "Error":
            case 1:
                message.severity = 1;
                break;
            case "Warning":
            case 2:
                message.severity = 2;
                break;
            case "Information":
            case 3:
                message.severity = 3;
                break;
            case "Hint":
            case 4:
                message.severity = 4;
                break;
            }
            if (object.code != null)
                message.code = String(object.code);
            if (object.message != null)
                message.message = String(object.message);
            if (object.source != null)
                message.source = String(object.source);
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".scip.Diagnostic.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    switch (object.tags[i]) {
                    default:
                        if (typeof object.tags[i] === "number") {
                            message.tags[i] = object.tags[i];
                            break;
                        }
                    case "UnspecifiedDiagnosticTag":
                    case 0:
                        message.tags[i] = 0;
                        break;
                    case "Unnecessary":
                    case 1:
                        message.tags[i] = 1;
                        break;
                    case "Deprecated":
                    case 2:
                        message.tags[i] = 2;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a Diagnostic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof scip.Diagnostic
         * @static
         * @param {scip.Diagnostic} message Diagnostic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Diagnostic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.defaults) {
                object.severity = options.enums === String ? "UnspecifiedSeverity" : 0;
                object.code = "";
                object.message = "";
                object.source = "";
            }
            if (message.severity != null && message.hasOwnProperty("severity"))
                object.severity = options.enums === String ? $root.scip.Severity[message.severity] === undefined ? message.severity : $root.scip.Severity[message.severity] : message.severity;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = options.enums === String ? $root.scip.DiagnosticTag[message.tags[j]] === undefined ? message.tags[j] : $root.scip.DiagnosticTag[message.tags[j]] : message.tags[j];
            }
            return object;
        };

        /**
         * Converts this Diagnostic to JSON.
         * @function toJSON
         * @memberof scip.Diagnostic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Diagnostic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Diagnostic
         * @function getTypeUrl
         * @memberof scip.Diagnostic
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Diagnostic.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/scip.Diagnostic";
        };

        return Diagnostic;
    })();

    /**
     * Severity enum.
     * @name scip.Severity
     * @enum {number}
     * @property {number} UnspecifiedSeverity=0 UnspecifiedSeverity value
     * @property {number} Error=1 Error value
     * @property {number} Warning=2 Warning value
     * @property {number} Information=3 Information value
     * @property {number} Hint=4 Hint value
     */
    scip.Severity = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnspecifiedSeverity"] = 0;
        values[valuesById[1] = "Error"] = 1;
        values[valuesById[2] = "Warning"] = 2;
        values[valuesById[3] = "Information"] = 3;
        values[valuesById[4] = "Hint"] = 4;
        return values;
    })();

    /**
     * DiagnosticTag enum.
     * @name scip.DiagnosticTag
     * @enum {number}
     * @property {number} UnspecifiedDiagnosticTag=0 UnspecifiedDiagnosticTag value
     * @property {number} Unnecessary=1 Unnecessary value
     * @property {number} Deprecated=2 Deprecated value
     */
    scip.DiagnosticTag = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnspecifiedDiagnosticTag"] = 0;
        values[valuesById[1] = "Unnecessary"] = 1;
        values[valuesById[2] = "Deprecated"] = 2;
        return values;
    })();

    /**
     * Language enum.
     * @name scip.Language
     * @enum {number}
     * @property {number} UnspecifiedLanguage=0 UnspecifiedLanguage value
     * @property {number} ABAP=60 ABAP value
     * @property {number} Apex=96 Apex value
     * @property {number} APL=49 APL value
     * @property {number} Ada=39 Ada value
     * @property {number} Agda=45 Agda value
     * @property {number} AsciiDoc=86 AsciiDoc value
     * @property {number} Assembly=58 Assembly value
     * @property {number} Awk=66 Awk value
     * @property {number} Bat=68 Bat value
     * @property {number} BibTeX=81 BibTeX value
     * @property {number} C=34 C value
     * @property {number} COBOL=59 COBOL value
     * @property {number} CPP=35 CPP value
     * @property {number} CSS=26 CSS value
     * @property {number} CSharp=1 CSharp value
     * @property {number} Clojure=8 Clojure value
     * @property {number} Coffeescript=21 Coffeescript value
     * @property {number} CommonLisp=9 CommonLisp value
     * @property {number} Coq=47 Coq value
     * @property {number} CUDA=97 CUDA value
     * @property {number} Dart=3 Dart value
     * @property {number} Delphi=57 Delphi value
     * @property {number} Diff=88 Diff value
     * @property {number} Dockerfile=80 Dockerfile value
     * @property {number} Dyalog=50 Dyalog value
     * @property {number} Elixir=17 Elixir value
     * @property {number} Erlang=18 Erlang value
     * @property {number} FSharp=42 FSharp value
     * @property {number} Fish=65 Fish value
     * @property {number} Flow=24 Flow value
     * @property {number} Fortran=56 Fortran value
     * @property {number} Git_Commit=91 Git_Commit value
     * @property {number} Git_Config=89 Git_Config value
     * @property {number} Git_Rebase=92 Git_Rebase value
     * @property {number} Go=33 Go value
     * @property {number} GraphQL=98 GraphQL value
     * @property {number} Groovy=7 Groovy value
     * @property {number} HTML=30 HTML value
     * @property {number} Hack=20 Hack value
     * @property {number} Handlebars=90 Handlebars value
     * @property {number} Haskell=44 Haskell value
     * @property {number} Idris=46 Idris value
     * @property {number} Ini=72 Ini value
     * @property {number} J=51 J value
     * @property {number} JSON=75 JSON value
     * @property {number} Java=6 Java value
     * @property {number} JavaScript=22 JavaScript value
     * @property {number} JavaScriptReact=93 JavaScriptReact value
     * @property {number} Jsonnet=76 Jsonnet value
     * @property {number} Julia=55 Julia value
     * @property {number} Justfile=109 Justfile value
     * @property {number} Kotlin=4 Kotlin value
     * @property {number} LaTeX=83 LaTeX value
     * @property {number} Lean=48 Lean value
     * @property {number} Less=27 Less value
     * @property {number} Lua=12 Lua value
     * @property {number} Luau=108 Luau value
     * @property {number} Makefile=79 Makefile value
     * @property {number} Markdown=84 Markdown value
     * @property {number} Matlab=52 Matlab value
     * @property {number} Nickel=110 Nickel value
     * @property {number} Nix=77 Nix value
     * @property {number} OCaml=41 OCaml value
     * @property {number} Objective_C=36 Objective_C value
     * @property {number} Objective_CPP=37 Objective_CPP value
     * @property {number} Pascal=99 Pascal value
     * @property {number} PHP=19 PHP value
     * @property {number} PLSQL=70 PLSQL value
     * @property {number} Perl=13 Perl value
     * @property {number} PowerShell=67 PowerShell value
     * @property {number} Prolog=71 Prolog value
     * @property {number} Protobuf=100 Protobuf value
     * @property {number} Python=15 Python value
     * @property {number} R=54 R value
     * @property {number} Racket=11 Racket value
     * @property {number} Raku=14 Raku value
     * @property {number} Razor=62 Razor value
     * @property {number} Repro=102 Repro value
     * @property {number} ReST=85 ReST value
     * @property {number} Ruby=16 Ruby value
     * @property {number} Rust=40 Rust value
     * @property {number} SAS=61 SAS value
     * @property {number} SCSS=29 SCSS value
     * @property {number} SML=43 SML value
     * @property {number} SQL=69 SQL value
     * @property {number} Sass=28 Sass value
     * @property {number} Scala=5 Scala value
     * @property {number} Scheme=10 Scheme value
     * @property {number} ShellScript=64 ShellScript value
     * @property {number} Skylark=78 Skylark value
     * @property {number} Slang=107 Slang value
     * @property {number} Solidity=95 Solidity value
     * @property {number} Svelte=106 Svelte value
     * @property {number} Swift=2 Swift value
     * @property {number} Tcl=101 Tcl value
     * @property {number} TOML=73 TOML value
     * @property {number} TeX=82 TeX value
     * @property {number} Thrift=103 Thrift value
     * @property {number} TypeScript=23 TypeScript value
     * @property {number} TypeScriptReact=94 TypeScriptReact value
     * @property {number} Verilog=104 Verilog value
     * @property {number} VHDL=105 VHDL value
     * @property {number} VisualBasic=63 VisualBasic value
     * @property {number} Vue=25 Vue value
     * @property {number} Wolfram=53 Wolfram value
     * @property {number} XML=31 XML value
     * @property {number} XSL=32 XSL value
     * @property {number} YAML=74 YAML value
     * @property {number} Zig=38 Zig value
     */
    scip.Language = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnspecifiedLanguage"] = 0;
        values[valuesById[60] = "ABAP"] = 60;
        values[valuesById[96] = "Apex"] = 96;
        values[valuesById[49] = "APL"] = 49;
        values[valuesById[39] = "Ada"] = 39;
        values[valuesById[45] = "Agda"] = 45;
        values[valuesById[86] = "AsciiDoc"] = 86;
        values[valuesById[58] = "Assembly"] = 58;
        values[valuesById[66] = "Awk"] = 66;
        values[valuesById[68] = "Bat"] = 68;
        values[valuesById[81] = "BibTeX"] = 81;
        values[valuesById[34] = "C"] = 34;
        values[valuesById[59] = "COBOL"] = 59;
        values[valuesById[35] = "CPP"] = 35;
        values[valuesById[26] = "CSS"] = 26;
        values[valuesById[1] = "CSharp"] = 1;
        values[valuesById[8] = "Clojure"] = 8;
        values[valuesById[21] = "Coffeescript"] = 21;
        values[valuesById[9] = "CommonLisp"] = 9;
        values[valuesById[47] = "Coq"] = 47;
        values[valuesById[97] = "CUDA"] = 97;
        values[valuesById[3] = "Dart"] = 3;
        values[valuesById[57] = "Delphi"] = 57;
        values[valuesById[88] = "Diff"] = 88;
        values[valuesById[80] = "Dockerfile"] = 80;
        values[valuesById[50] = "Dyalog"] = 50;
        values[valuesById[17] = "Elixir"] = 17;
        values[valuesById[18] = "Erlang"] = 18;
        values[valuesById[42] = "FSharp"] = 42;
        values[valuesById[65] = "Fish"] = 65;
        values[valuesById[24] = "Flow"] = 24;
        values[valuesById[56] = "Fortran"] = 56;
        values[valuesById[91] = "Git_Commit"] = 91;
        values[valuesById[89] = "Git_Config"] = 89;
        values[valuesById[92] = "Git_Rebase"] = 92;
        values[valuesById[33] = "Go"] = 33;
        values[valuesById[98] = "GraphQL"] = 98;
        values[valuesById[7] = "Groovy"] = 7;
        values[valuesById[30] = "HTML"] = 30;
        values[valuesById[20] = "Hack"] = 20;
        values[valuesById[90] = "Handlebars"] = 90;
        values[valuesById[44] = "Haskell"] = 44;
        values[valuesById[46] = "Idris"] = 46;
        values[valuesById[72] = "Ini"] = 72;
        values[valuesById[51] = "J"] = 51;
        values[valuesById[75] = "JSON"] = 75;
        values[valuesById[6] = "Java"] = 6;
        values[valuesById[22] = "JavaScript"] = 22;
        values[valuesById[93] = "JavaScriptReact"] = 93;
        values[valuesById[76] = "Jsonnet"] = 76;
        values[valuesById[55] = "Julia"] = 55;
        values[valuesById[109] = "Justfile"] = 109;
        values[valuesById[4] = "Kotlin"] = 4;
        values[valuesById[83] = "LaTeX"] = 83;
        values[valuesById[48] = "Lean"] = 48;
        values[valuesById[27] = "Less"] = 27;
        values[valuesById[12] = "Lua"] = 12;
        values[valuesById[108] = "Luau"] = 108;
        values[valuesById[79] = "Makefile"] = 79;
        values[valuesById[84] = "Markdown"] = 84;
        values[valuesById[52] = "Matlab"] = 52;
        values[valuesById[110] = "Nickel"] = 110;
        values[valuesById[77] = "Nix"] = 77;
        values[valuesById[41] = "OCaml"] = 41;
        values[valuesById[36] = "Objective_C"] = 36;
        values[valuesById[37] = "Objective_CPP"] = 37;
        values[valuesById[99] = "Pascal"] = 99;
        values[valuesById[19] = "PHP"] = 19;
        values[valuesById[70] = "PLSQL"] = 70;
        values[valuesById[13] = "Perl"] = 13;
        values[valuesById[67] = "PowerShell"] = 67;
        values[valuesById[71] = "Prolog"] = 71;
        values[valuesById[100] = "Protobuf"] = 100;
        values[valuesById[15] = "Python"] = 15;
        values[valuesById[54] = "R"] = 54;
        values[valuesById[11] = "Racket"] = 11;
        values[valuesById[14] = "Raku"] = 14;
        values[valuesById[62] = "Razor"] = 62;
        values[valuesById[102] = "Repro"] = 102;
        values[valuesById[85] = "ReST"] = 85;
        values[valuesById[16] = "Ruby"] = 16;
        values[valuesById[40] = "Rust"] = 40;
        values[valuesById[61] = "SAS"] = 61;
        values[valuesById[29] = "SCSS"] = 29;
        values[valuesById[43] = "SML"] = 43;
        values[valuesById[69] = "SQL"] = 69;
        values[valuesById[28] = "Sass"] = 28;
        values[valuesById[5] = "Scala"] = 5;
        values[valuesById[10] = "Scheme"] = 10;
        values[valuesById[64] = "ShellScript"] = 64;
        values[valuesById[78] = "Skylark"] = 78;
        values[valuesById[107] = "Slang"] = 107;
        values[valuesById[95] = "Solidity"] = 95;
        values[valuesById[106] = "Svelte"] = 106;
        values[valuesById[2] = "Swift"] = 2;
        values[valuesById[101] = "Tcl"] = 101;
        values[valuesById[73] = "TOML"] = 73;
        values[valuesById[82] = "TeX"] = 82;
        values[valuesById[103] = "Thrift"] = 103;
        values[valuesById[23] = "TypeScript"] = 23;
        values[valuesById[94] = "TypeScriptReact"] = 94;
        values[valuesById[104] = "Verilog"] = 104;
        values[valuesById[105] = "VHDL"] = 105;
        values[valuesById[63] = "VisualBasic"] = 63;
        values[valuesById[25] = "Vue"] = 25;
        values[valuesById[53] = "Wolfram"] = 53;
        values[valuesById[31] = "XML"] = 31;
        values[valuesById[32] = "XSL"] = 32;
        values[valuesById[74] = "YAML"] = 74;
        values[valuesById[38] = "Zig"] = 38;
        return values;
    })();

    return scip;
})();

module.exports = $root;
