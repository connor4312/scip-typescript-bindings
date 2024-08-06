import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace scip. */
export namespace scip {

    /** Properties of an Index. */
    interface IIndex {

        /** Index metadata */
        metadata?: (scip.IMetadata|null);

        /** Index documents */
        documents?: (scip.IDocument[]|null);

        /** Index externalSymbols */
        externalSymbols?: (scip.ISymbolInformation[]|null);
    }

    /** Represents an Index. */
    class Index implements IIndex {

        /**
         * Constructs a new Index.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IIndex);

        /** Index metadata. */
        public metadata?: (scip.IMetadata|null);

        /** Index documents. */
        public documents: scip.IDocument[];

        /** Index externalSymbols. */
        public externalSymbols: scip.ISymbolInformation[];

        /**
         * Creates a new Index instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Index instance
         */
        public static create(properties?: scip.IIndex): scip.Index;

        /**
         * Encodes the specified Index message. Does not implicitly {@link scip.Index.verify|verify} messages.
         * @param message Index message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Index message, length delimited. Does not implicitly {@link scip.Index.verify|verify} messages.
         * @param message Index message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Index message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Index
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Index;

        /**
         * Decodes an Index message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Index
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Index;

        /**
         * Verifies an Index message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Index message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Index
         */
        public static fromObject(object: { [k: string]: any }): scip.Index;

        /**
         * Creates a plain object from an Index message. Also converts values to other types if specified.
         * @param message Index
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Index, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Index to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Index
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Metadata. */
    interface IMetadata {

        /** Metadata version */
        version?: (scip.ProtocolVersion|null);

        /** Metadata toolInfo */
        toolInfo?: (scip.IToolInfo|null);

        /** Metadata projectRoot */
        projectRoot?: (string|null);

        /** Metadata textDocumentEncoding */
        textDocumentEncoding?: (scip.TextEncoding|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IMetadata);

        /** Metadata version. */
        public version: scip.ProtocolVersion;

        /** Metadata toolInfo. */
        public toolInfo?: (scip.IToolInfo|null);

        /** Metadata projectRoot. */
        public projectRoot: string;

        /** Metadata textDocumentEncoding. */
        public textDocumentEncoding: scip.TextEncoding;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: scip.IMetadata): scip.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link scip.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link scip.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Metadata;

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: { [k: string]: any }): scip.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Metadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ProtocolVersion enum. */
    enum ProtocolVersion {
        UnspecifiedProtocolVersion = 0
    }

    /** TextEncoding enum. */
    enum TextEncoding {
        UnspecifiedTextEncoding = 0,
        UTF8 = 1,
        UTF16 = 2
    }

    /** Properties of a ToolInfo. */
    interface IToolInfo {

        /** ToolInfo name */
        name?: (string|null);

        /** ToolInfo version */
        version?: (string|null);

        /** ToolInfo arguments */
        "arguments"?: (string[]|null);
    }

    /** Represents a ToolInfo. */
    class ToolInfo implements IToolInfo {

        /**
         * Constructs a new ToolInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IToolInfo);

        /** ToolInfo name. */
        public name: string;

        /** ToolInfo version. */
        public version: string;

        /** ToolInfo arguments. */
        public arguments: string[];

        /**
         * Creates a new ToolInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToolInfo instance
         */
        public static create(properties?: scip.IToolInfo): scip.ToolInfo;

        /**
         * Encodes the specified ToolInfo message. Does not implicitly {@link scip.ToolInfo.verify|verify} messages.
         * @param message ToolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IToolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToolInfo message, length delimited. Does not implicitly {@link scip.ToolInfo.verify|verify} messages.
         * @param message ToolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IToolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToolInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.ToolInfo;

        /**
         * Decodes a ToolInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.ToolInfo;

        /**
         * Verifies a ToolInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToolInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToolInfo
         */
        public static fromObject(object: { [k: string]: any }): scip.ToolInfo;

        /**
         * Creates a plain object from a ToolInfo message. Also converts values to other types if specified.
         * @param message ToolInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.ToolInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToolInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToolInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Document. */
    interface IDocument {

        /** Document language */
        language?: (string|null);

        /** Document relativePath */
        relativePath?: (string|null);

        /** Document occurrences */
        occurrences?: (scip.IOccurrence[]|null);

        /** Document symbols */
        symbols?: (scip.ISymbolInformation[]|null);

        /** Document text */
        text?: (string|null);

        /** Document positionEncoding */
        positionEncoding?: (scip.PositionEncoding|null);
    }

    /** Represents a Document. */
    class Document implements IDocument {

        /**
         * Constructs a new Document.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IDocument);

        /** Document language. */
        public language: string;

        /** Document relativePath. */
        public relativePath: string;

        /** Document occurrences. */
        public occurrences: scip.IOccurrence[];

        /** Document symbols. */
        public symbols: scip.ISymbolInformation[];

        /** Document text. */
        public text: string;

        /** Document positionEncoding. */
        public positionEncoding: scip.PositionEncoding;

        /**
         * Creates a new Document instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Document instance
         */
        public static create(properties?: scip.IDocument): scip.Document;

        /**
         * Encodes the specified Document message. Does not implicitly {@link scip.Document.verify|verify} messages.
         * @param message Document message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Document message, length delimited. Does not implicitly {@link scip.Document.verify|verify} messages.
         * @param message Document message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Document message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Document
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Document;

        /**
         * Decodes a Document message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Document
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Document;

        /**
         * Verifies a Document message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Document message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Document
         */
        public static fromObject(object: { [k: string]: any }): scip.Document;

        /**
         * Creates a plain object from a Document message. Also converts values to other types if specified.
         * @param message Document
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Document to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Document
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** PositionEncoding enum. */
    enum PositionEncoding {
        UnspecifiedPositionEncoding = 0,
        UTF8CodeUnitOffsetFromLineStart = 1,
        UTF16CodeUnitOffsetFromLineStart = 2,
        UTF32CodeUnitOffsetFromLineStart = 3
    }

    /** Properties of a Symbol. */
    interface ISymbol {

        /** Symbol scheme */
        scheme?: (string|null);

        /** Symbol package */
        "package"?: (scip.IPackage|null);

        /** Symbol descriptors */
        descriptors?: (scip.IDescriptor[]|null);
    }

    /** Represents a Symbol. */
    class Symbol implements ISymbol {

        /**
         * Constructs a new Symbol.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.ISymbol);

        /** Symbol scheme. */
        public scheme: string;

        /** Symbol package. */
        public package?: (scip.IPackage|null);

        /** Symbol descriptors. */
        public descriptors: scip.IDescriptor[];

        /**
         * Creates a new Symbol instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Symbol instance
         */
        public static create(properties?: scip.ISymbol): scip.Symbol;

        /**
         * Encodes the specified Symbol message. Does not implicitly {@link scip.Symbol.verify|verify} messages.
         * @param message Symbol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.ISymbol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Symbol message, length delimited. Does not implicitly {@link scip.Symbol.verify|verify} messages.
         * @param message Symbol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.ISymbol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Symbol message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Symbol;

        /**
         * Decodes a Symbol message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Symbol;

        /**
         * Verifies a Symbol message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Symbol message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Symbol
         */
        public static fromObject(object: { [k: string]: any }): scip.Symbol;

        /**
         * Creates a plain object from a Symbol message. Also converts values to other types if specified.
         * @param message Symbol
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Symbol, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Symbol to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Symbol
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Package. */
    interface IPackage {

        /** Package manager */
        manager?: (string|null);

        /** Package name */
        name?: (string|null);

        /** Package version */
        version?: (string|null);
    }

    /** Represents a Package. */
    class Package implements IPackage {

        /**
         * Constructs a new Package.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IPackage);

        /** Package manager. */
        public manager: string;

        /** Package name. */
        public name: string;

        /** Package version. */
        public version: string;

        /**
         * Creates a new Package instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Package instance
         */
        public static create(properties?: scip.IPackage): scip.Package;

        /**
         * Encodes the specified Package message. Does not implicitly {@link scip.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Package message, length delimited. Does not implicitly {@link scip.Package.verify|verify} messages.
         * @param message Package message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Package message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Package;

        /**
         * Decodes a Package message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Package
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Package;

        /**
         * Verifies a Package message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Package message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Package
         */
        public static fromObject(object: { [k: string]: any }): scip.Package;

        /**
         * Creates a plain object from a Package message. Also converts values to other types if specified.
         * @param message Package
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Package to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Package
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Descriptor. */
    interface IDescriptor {

        /** Descriptor name */
        name?: (string|null);

        /** Descriptor disambiguator */
        disambiguator?: (string|null);

        /** Descriptor suffix */
        suffix?: (scip.Descriptor.Suffix|null);
    }

    /** Represents a Descriptor. */
    class Descriptor implements IDescriptor {

        /**
         * Constructs a new Descriptor.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IDescriptor);

        /** Descriptor name. */
        public name: string;

        /** Descriptor disambiguator. */
        public disambiguator: string;

        /** Descriptor suffix. */
        public suffix: scip.Descriptor.Suffix;

        /**
         * Creates a new Descriptor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Descriptor instance
         */
        public static create(properties?: scip.IDescriptor): scip.Descriptor;

        /**
         * Encodes the specified Descriptor message. Does not implicitly {@link scip.Descriptor.verify|verify} messages.
         * @param message Descriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Descriptor message, length delimited. Does not implicitly {@link scip.Descriptor.verify|verify} messages.
         * @param message Descriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Descriptor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Descriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Descriptor;

        /**
         * Decodes a Descriptor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Descriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Descriptor;

        /**
         * Verifies a Descriptor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Descriptor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Descriptor
         */
        public static fromObject(object: { [k: string]: any }): scip.Descriptor;

        /**
         * Creates a plain object from a Descriptor message. Also converts values to other types if specified.
         * @param message Descriptor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Descriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Descriptor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Descriptor
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Descriptor {

        /** Suffix enum. */
        enum Suffix {
            UnspecifiedSuffix = 0,
            Namespace = 1,
            Package = 1,
            Type = 2,
            Term = 3,
            Method = 4,
            TypeParameter = 5,
            Parameter = 6,
            Meta = 7,
            Local = 8,
            Macro = 9
        }
    }

    /** Properties of a SymbolInformation. */
    interface ISymbolInformation {

        /** SymbolInformation symbol */
        symbol?: (string|null);

        /** SymbolInformation documentation */
        documentation?: (string[]|null);

        /** SymbolInformation relationships */
        relationships?: (scip.IRelationship[]|null);

        /** SymbolInformation kind */
        kind?: (scip.SymbolInformation.Kind|null);

        /** SymbolInformation displayName */
        displayName?: (string|null);

        /** SymbolInformation signatureDocumentation */
        signatureDocumentation?: (scip.IDocument|null);

        /** SymbolInformation enclosingSymbol */
        enclosingSymbol?: (string|null);
    }

    /** Represents a SymbolInformation. */
    class SymbolInformation implements ISymbolInformation {

        /**
         * Constructs a new SymbolInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.ISymbolInformation);

        /** SymbolInformation symbol. */
        public symbol: string;

        /** SymbolInformation documentation. */
        public documentation: string[];

        /** SymbolInformation relationships. */
        public relationships: scip.IRelationship[];

        /** SymbolInformation kind. */
        public kind: scip.SymbolInformation.Kind;

        /** SymbolInformation displayName. */
        public displayName: string;

        /** SymbolInformation signatureDocumentation. */
        public signatureDocumentation?: (scip.IDocument|null);

        /** SymbolInformation enclosingSymbol. */
        public enclosingSymbol: string;

        /**
         * Creates a new SymbolInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SymbolInformation instance
         */
        public static create(properties?: scip.ISymbolInformation): scip.SymbolInformation;

        /**
         * Encodes the specified SymbolInformation message. Does not implicitly {@link scip.SymbolInformation.verify|verify} messages.
         * @param message SymbolInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.ISymbolInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SymbolInformation message, length delimited. Does not implicitly {@link scip.SymbolInformation.verify|verify} messages.
         * @param message SymbolInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.ISymbolInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SymbolInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SymbolInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.SymbolInformation;

        /**
         * Decodes a SymbolInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SymbolInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.SymbolInformation;

        /**
         * Verifies a SymbolInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SymbolInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SymbolInformation
         */
        public static fromObject(object: { [k: string]: any }): scip.SymbolInformation;

        /**
         * Creates a plain object from a SymbolInformation message. Also converts values to other types if specified.
         * @param message SymbolInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.SymbolInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SymbolInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SymbolInformation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SymbolInformation {

        /** Kind enum. */
        enum Kind {
            UnspecifiedKind = 0,
            AbstractMethod = 66,
            Accessor = 72,
            Array = 1,
            Assertion = 2,
            AssociatedType = 3,
            Attribute = 4,
            Axiom = 5,
            Boolean = 6,
            Class = 7,
            Constant = 8,
            Constructor = 9,
            Contract = 62,
            DataFamily = 10,
            Delegate = 73,
            Enum = 11,
            EnumMember = 12,
            Error = 63,
            Event = 13,
            Fact = 14,
            Field = 15,
            File = 16,
            Function = 17,
            Getter = 18,
            Grammar = 19,
            Instance = 20,
            Interface = 21,
            Key = 22,
            Lang = 23,
            Lemma = 24,
            Library = 64,
            Macro = 25,
            Method = 26,
            MethodAlias = 74,
            MethodReceiver = 27,
            MethodSpecification = 67,
            Message = 28,
            Modifier = 65,
            Module = 29,
            Namespace = 30,
            Null = 31,
            Number = 32,
            Object = 33,
            Operator = 34,
            Package = 35,
            PackageObject = 36,
            Parameter = 37,
            ParameterLabel = 38,
            Pattern = 39,
            Predicate = 40,
            Property = 41,
            Protocol = 42,
            ProtocolMethod = 68,
            PureVirtualMethod = 69,
            Quasiquoter = 43,
            SelfParameter = 44,
            Setter = 45,
            Signature = 46,
            SingletonClass = 75,
            SingletonMethod = 76,
            StaticDataMember = 77,
            StaticEvent = 78,
            StaticField = 79,
            StaticMethod = 80,
            StaticProperty = 81,
            StaticVariable = 82,
            String = 48,
            Struct = 49,
            Subscript = 47,
            Tactic = 50,
            Theorem = 51,
            ThisParameter = 52,
            Trait = 53,
            TraitMethod = 70,
            Type = 54,
            TypeAlias = 55,
            TypeClass = 56,
            TypeClassMethod = 71,
            TypeFamily = 57,
            TypeParameter = 58,
            Union = 59,
            Value = 60,
            Variable = 61
        }
    }

    /** Properties of a Relationship. */
    interface IRelationship {

        /** Relationship symbol */
        symbol?: (string|null);

        /** Relationship isReference */
        isReference?: (boolean|null);

        /** Relationship isImplementation */
        isImplementation?: (boolean|null);

        /** Relationship isTypeDefinition */
        isTypeDefinition?: (boolean|null);

        /** Relationship isDefinition */
        isDefinition?: (boolean|null);
    }

    /** Represents a Relationship. */
    class Relationship implements IRelationship {

        /**
         * Constructs a new Relationship.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IRelationship);

        /** Relationship symbol. */
        public symbol: string;

        /** Relationship isReference. */
        public isReference: boolean;

        /** Relationship isImplementation. */
        public isImplementation: boolean;

        /** Relationship isTypeDefinition. */
        public isTypeDefinition: boolean;

        /** Relationship isDefinition. */
        public isDefinition: boolean;

        /**
         * Creates a new Relationship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Relationship instance
         */
        public static create(properties?: scip.IRelationship): scip.Relationship;

        /**
         * Encodes the specified Relationship message. Does not implicitly {@link scip.Relationship.verify|verify} messages.
         * @param message Relationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Relationship message, length delimited. Does not implicitly {@link scip.Relationship.verify|verify} messages.
         * @param message Relationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Relationship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Relationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Relationship;

        /**
         * Decodes a Relationship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Relationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Relationship;

        /**
         * Verifies a Relationship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Relationship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Relationship
         */
        public static fromObject(object: { [k: string]: any }): scip.Relationship;

        /**
         * Creates a plain object from a Relationship message. Also converts values to other types if specified.
         * @param message Relationship
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Relationship, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Relationship to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Relationship
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** SymbolRole enum. */
    enum SymbolRole {
        UnspecifiedSymbolRole = 0,
        Definition = 1,
        Import = 2,
        WriteAccess = 4,
        ReadAccess = 8,
        Generated = 16,
        Test = 32,
        ForwardDefinition = 64
    }

    /** SyntaxKind enum. */
    enum SyntaxKind {
        UnspecifiedSyntaxKind = 0,
        Comment = 1,
        PunctuationDelimiter = 2,
        PunctuationBracket = 3,
        Keyword = 4,
        IdentifierKeyword = 4,
        IdentifierOperator = 5,
        Identifier = 6,
        IdentifierBuiltin = 7,
        IdentifierNull = 8,
        IdentifierConstant = 9,
        IdentifierMutableGlobal = 10,
        IdentifierParameter = 11,
        IdentifierLocal = 12,
        IdentifierShadowed = 13,
        IdentifierNamespace = 14,
        IdentifierModule = 14,
        IdentifierFunction = 15,
        IdentifierFunctionDefinition = 16,
        IdentifierMacro = 17,
        IdentifierMacroDefinition = 18,
        IdentifierType = 19,
        IdentifierBuiltinType = 20,
        IdentifierAttribute = 21,
        RegexEscape = 22,
        RegexRepeated = 23,
        RegexWildcard = 24,
        RegexDelimiter = 25,
        RegexJoin = 26,
        StringLiteral = 27,
        StringLiteralEscape = 28,
        StringLiteralSpecial = 29,
        StringLiteralKey = 30,
        CharacterLiteral = 31,
        NumericLiteral = 32,
        BooleanLiteral = 33,
        Tag = 34,
        TagAttribute = 35,
        TagDelimiter = 36
    }

    /** Properties of an Occurrence. */
    interface IOccurrence {

        /** Occurrence range */
        range?: (number[]|null);

        /** Occurrence symbol */
        symbol?: (string|null);

        /** Occurrence symbolRoles */
        symbolRoles?: (number|null);

        /** Occurrence overrideDocumentation */
        overrideDocumentation?: (string[]|null);

        /** Occurrence syntaxKind */
        syntaxKind?: (scip.SyntaxKind|null);

        /** Occurrence diagnostics */
        diagnostics?: (scip.IDiagnostic[]|null);

        /** Occurrence enclosingRange */
        enclosingRange?: (number[]|null);
    }

    /** Represents an Occurrence. */
    class Occurrence implements IOccurrence {

        /**
         * Constructs a new Occurrence.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IOccurrence);

        /** Occurrence range. */
        public range: number[];

        /** Occurrence symbol. */
        public symbol: string;

        /** Occurrence symbolRoles. */
        public symbolRoles: number;

        /** Occurrence overrideDocumentation. */
        public overrideDocumentation: string[];

        /** Occurrence syntaxKind. */
        public syntaxKind: scip.SyntaxKind;

        /** Occurrence diagnostics. */
        public diagnostics: scip.IDiagnostic[];

        /** Occurrence enclosingRange. */
        public enclosingRange: number[];

        /**
         * Creates a new Occurrence instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Occurrence instance
         */
        public static create(properties?: scip.IOccurrence): scip.Occurrence;

        /**
         * Encodes the specified Occurrence message. Does not implicitly {@link scip.Occurrence.verify|verify} messages.
         * @param message Occurrence message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Occurrence message, length delimited. Does not implicitly {@link scip.Occurrence.verify|verify} messages.
         * @param message Occurrence message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IOccurrence, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Occurrence message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Occurrence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Occurrence;

        /**
         * Decodes an Occurrence message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Occurrence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Occurrence;

        /**
         * Verifies an Occurrence message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Occurrence message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Occurrence
         */
        public static fromObject(object: { [k: string]: any }): scip.Occurrence;

        /**
         * Creates a plain object from an Occurrence message. Also converts values to other types if specified.
         * @param message Occurrence
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Occurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Occurrence to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Occurrence
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Diagnostic. */
    interface IDiagnostic {

        /** Diagnostic severity */
        severity?: (scip.Severity|null);

        /** Diagnostic code */
        code?: (string|null);

        /** Diagnostic message */
        message?: (string|null);

        /** Diagnostic source */
        source?: (string|null);

        /** Diagnostic tags */
        tags?: (scip.DiagnosticTag[]|null);
    }

    /** Represents a Diagnostic. */
    class Diagnostic implements IDiagnostic {

        /**
         * Constructs a new Diagnostic.
         * @param [properties] Properties to set
         */
        constructor(properties?: scip.IDiagnostic);

        /** Diagnostic severity. */
        public severity: scip.Severity;

        /** Diagnostic code. */
        public code: string;

        /** Diagnostic message. */
        public message: string;

        /** Diagnostic source. */
        public source: string;

        /** Diagnostic tags. */
        public tags: scip.DiagnosticTag[];

        /**
         * Creates a new Diagnostic instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Diagnostic instance
         */
        public static create(properties?: scip.IDiagnostic): scip.Diagnostic;

        /**
         * Encodes the specified Diagnostic message. Does not implicitly {@link scip.Diagnostic.verify|verify} messages.
         * @param message Diagnostic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scip.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Diagnostic message, length delimited. Does not implicitly {@link scip.Diagnostic.verify|verify} messages.
         * @param message Diagnostic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scip.IDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Diagnostic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Diagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scip.Diagnostic;

        /**
         * Decodes a Diagnostic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Diagnostic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scip.Diagnostic;

        /**
         * Verifies a Diagnostic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Diagnostic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Diagnostic
         */
        public static fromObject(object: { [k: string]: any }): scip.Diagnostic;

        /**
         * Creates a plain object from a Diagnostic message. Also converts values to other types if specified.
         * @param message Diagnostic
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scip.Diagnostic, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Diagnostic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Diagnostic
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Severity enum. */
    enum Severity {
        UnspecifiedSeverity = 0,
        Error = 1,
        Warning = 2,
        Information = 3,
        Hint = 4
    }

    /** DiagnosticTag enum. */
    enum DiagnosticTag {
        UnspecifiedDiagnosticTag = 0,
        Unnecessary = 1,
        Deprecated = 2
    }

    /** Language enum. */
    enum Language {
        UnspecifiedLanguage = 0,
        ABAP = 60,
        Apex = 96,
        APL = 49,
        Ada = 39,
        Agda = 45,
        AsciiDoc = 86,
        Assembly = 58,
        Awk = 66,
        Bat = 68,
        BibTeX = 81,
        C = 34,
        COBOL = 59,
        CPP = 35,
        CSS = 26,
        CSharp = 1,
        Clojure = 8,
        Coffeescript = 21,
        CommonLisp = 9,
        Coq = 47,
        CUDA = 97,
        Dart = 3,
        Delphi = 57,
        Diff = 88,
        Dockerfile = 80,
        Dyalog = 50,
        Elixir = 17,
        Erlang = 18,
        FSharp = 42,
        Fish = 65,
        Flow = 24,
        Fortran = 56,
        Git_Commit = 91,
        Git_Config = 89,
        Git_Rebase = 92,
        Go = 33,
        GraphQL = 98,
        Groovy = 7,
        HTML = 30,
        Hack = 20,
        Handlebars = 90,
        Haskell = 44,
        Idris = 46,
        Ini = 72,
        J = 51,
        JSON = 75,
        Java = 6,
        JavaScript = 22,
        JavaScriptReact = 93,
        Jsonnet = 76,
        Julia = 55,
        Justfile = 109,
        Kotlin = 4,
        LaTeX = 83,
        Lean = 48,
        Less = 27,
        Lua = 12,
        Luau = 108,
        Makefile = 79,
        Markdown = 84,
        Matlab = 52,
        Nickel = 110,
        Nix = 77,
        OCaml = 41,
        Objective_C = 36,
        Objective_CPP = 37,
        Pascal = 99,
        PHP = 19,
        PLSQL = 70,
        Perl = 13,
        PowerShell = 67,
        Prolog = 71,
        Protobuf = 100,
        Python = 15,
        R = 54,
        Racket = 11,
        Raku = 14,
        Razor = 62,
        Repro = 102,
        ReST = 85,
        Ruby = 16,
        Rust = 40,
        SAS = 61,
        SCSS = 29,
        SML = 43,
        SQL = 69,
        Sass = 28,
        Scala = 5,
        Scheme = 10,
        ShellScript = 64,
        Skylark = 78,
        Slang = 107,
        Solidity = 95,
        Svelte = 106,
        Swift = 2,
        Tcl = 101,
        TOML = 73,
        TeX = 82,
        Thrift = 103,
        TypeScript = 23,
        TypeScriptReact = 94,
        Verilog = 104,
        VHDL = 105,
        VisualBasic = 63,
        Vue = 25,
        Wolfram = 53,
        XML = 31,
        XSL = 32,
        YAML = 74,
        Zig = 38
    }
}
