import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file scip.proto.
 */
export declare const file_scip: GenFile;
/**
 * Index represents a complete SCIP index for a workspace this is rooted at a
 * single directory. An Index message payload can have a large memory footprint
 * and it's therefore recommended to emit and consume an Index payload one field
 * value at a time. To permit streaming consumption of an Index payload, the
 * `metadata` field must appear at the start of the stream and must only appear
 * once in the stream. Other field values may appear in any order.
 *
 * @generated from message scip.Index
 */
export type Index = Message<"scip.Index"> & {
    /**
     * Metadata about this index.
     *
     * @generated from field: scip.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * Documents that belong to this index.
     *
     * @generated from field: repeated scip.Document documents = 2;
     */
    documents: Document[];
    /**
     * (optional) Symbols that are referenced from this index but are defined in
     * an external package (a separate `Index` message). Leave this field empty
     * if you assume the external package will get indexed separately. If the
     * external package won't get indexed for some reason then you can use this
     * field to provide hover documentation for those external symbols.
     *
     * IMPORTANT: When adding a new field to `Index` here, add a matching
     * function in `IndexVisitor` and update `ParseStreaming`.
     *
     * @generated from field: repeated scip.SymbolInformation external_symbols = 3;
     */
    externalSymbols: SymbolInformation[];
};
/**
 * Describes the message scip.Index.
 * Use `create(IndexSchema)` to create a new message.
 */
export declare const IndexSchema: GenMessage<Index>;
/**
 * @generated from message scip.Metadata
 */
export type Metadata = Message<"scip.Metadata"> & {
    /**
     * Which version of this protocol was used to generate this index?
     *
     * @generated from field: scip.ProtocolVersion version = 1;
     */
    version: ProtocolVersion;
    /**
     * Information about the tool that produced this index.
     *
     * @generated from field: scip.ToolInfo tool_info = 2;
     */
    toolInfo?: ToolInfo;
    /**
     * URI-encoded absolute path to the root directory of this index. All
     * documents in this index must appear in a subdirectory of this root
     * directory.
     *
     * @generated from field: string project_root = 3;
     */
    projectRoot: string;
    /**
     * Text encoding of the source files on disk that are referenced from
     * `Document.relative_path`. This value is unrelated to the `Document.text`
     * field, which is a Protobuf string and hence must be UTF-8 encoded.
     *
     * @generated from field: scip.TextEncoding text_document_encoding = 4;
     */
    textDocumentEncoding: TextEncoding;
};
/**
 * Describes the message scip.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export declare const MetadataSchema: GenMessage<Metadata>;
/**
 * @generated from message scip.ToolInfo
 */
export type ToolInfo = Message<"scip.ToolInfo"> & {
    /**
     * Name of the indexer that produced this index.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Version of the indexer that produced this index.
     *
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * Command-line arguments that were used to invoke this indexer.
     *
     * @generated from field: repeated string arguments = 3;
     */
    arguments: string[];
};
/**
 * Describes the message scip.ToolInfo.
 * Use `create(ToolInfoSchema)` to create a new message.
 */
export declare const ToolInfoSchema: GenMessage<ToolInfo>;
/**
 * Document defines the metadata about a source file on disk.
 *
 * @generated from message scip.Document
 */
export type Document = Message<"scip.Document"> & {
    /**
     * The string ID for the programming language this file is written in.
     * The `Language` enum contains the names of most common programming languages.
     * This field is typed as a string to permit any programming language, including
     * ones that are not specified by the `Language` enum.
     *
     * @generated from field: string language = 4;
     */
    language: string;
    /**
     * (Required) Unique path to the text document.
     *
     * 1. The path must be relative to the directory supplied in the associated
     *    `Metadata.project_root`.
     * 2. The path must not begin with a leading '/'.
     * 3. The path must point to a regular file, not a symbolic link.
     * 4. The path must use '/' as the separator, including on Windows.
     * 5. The path must be canonical; it cannot include empty components ('//'),
     *    or '.' or '..'.
     *
     * @generated from field: string relative_path = 1;
     */
    relativePath: string;
    /**
     * Occurrences that appear in this file.
     *
     * @generated from field: repeated scip.Occurrence occurrences = 2;
     */
    occurrences: Occurrence[];
    /**
     * Symbols that are "defined" within this document.
     *
     * This should include symbols which technically do not have any definition,
     * but have a reference and are defined by some other symbol (see
     * Relationship.is_definition).
     *
     * @generated from field: repeated scip.SymbolInformation symbols = 3;
     */
    symbols: SymbolInformation[];
    /**
     * (optional) Text contents of the this document. Indexers are not expected to
     * include the text by default. It's preferrable that clients read the text
     * contents from the file system by resolving the absolute path from joining
     * `Index.metadata.project_root` and `Document.relative_path`. This field was
     * introduced to support `SymbolInformation.signature_documentation`, but it
     * can be used for other purposes as well, for example testing or when working
     * with virtual/in-memory documents.
     *
     * @generated from field: string text = 5;
     */
    text: string;
    /**
     * Specifies the encoding used for source ranges in this Document.
     *
     * Usually, this will match the type used to index the string type
     * in the indexer's implementation language in O(1) time.
     * - For an indexer implemented in JVM/.NET language or JavaScript/TypeScript,
     *   use UTF16CodeUnitOffsetFromLineStart.
     * - For an indexer implemented in Python,
     *   use UTF32CodeUnitOffsetFromLineStart.
     * - For an indexer implemented in Go, Rust or C++,
     *   use UTF8ByteOffsetFromLineStart.
     *
     * @generated from field: scip.PositionEncoding position_encoding = 6;
     */
    positionEncoding: PositionEncoding;
};
/**
 * Describes the message scip.Document.
 * Use `create(DocumentSchema)` to create a new message.
 */
export declare const DocumentSchema: GenMessage<Document>;
/**
 * Symbol is similar to a URI, it identifies a class, method, or a local
 * variable. `SymbolInformation` contains rich metadata about symbols such as
 * the docstring.
 *
 * Symbol has a standardized string representation, which can be used
 * interchangeably with `Symbol`. The syntax for Symbol is the following:
 * ```
 * # (<x>)+ stands for one or more repetitions of <x>
 * # (<x>)? stands for zero or one occurrence of <x>
 * <symbol>               ::= <scheme> ' ' <package> ' ' (<descriptor>)+ | 'local ' <local-id>
 * <package>              ::= <manager> ' ' <package-name> ' ' <version>
 * <scheme>               ::= any UTF-8, escape spaces with double space. Must not be empty nor start with 'local'
 * <manager>              ::= any UTF-8, escape spaces with double space. Use the placeholder '.' to indicate an empty value
 * <package-name>         ::= same as above
 * <version>              ::= same as above
 * <descriptor>           ::= <namespace> | <type> | <term> | <method> | <type-parameter> | <parameter> | <meta> | <macro>
 * <namespace>            ::= <name> '/'
 * <type>                 ::= <name> '#'
 * <term>                 ::= <name> '.'
 * <meta>                 ::= <name> ':'
 * <macro>                ::= <name> '!'
 * <method>               ::= <name> '(' (<method-disambiguator>)? ').'
 * <type-parameter>       ::= '[' <name> ']'
 * <parameter>            ::= '(' <name> ')'
 * <name>                 ::= <identifier>
 * <method-disambiguator> ::= <simple-identifier>
 * <identifier>           ::= <simple-identifier> | <escaped-identifier>
 * <simple-identifier>    ::= (<identifier-character>)+
 * <identifier-character> ::= '_' | '+' | '-' | '$' | ASCII letter or digit
 * <escaped-identifier>   ::= '`' (<escaped-character>)+ '`', must contain at least one non-<identifier-character>
 * <escaped-characters>   ::= any UTF-8, escape backticks with double backtick.
 * <local-id>             ::= <simple-identifier>
 * ```
 *
 * The list of descriptors for a symbol should together form a fully
 * qualified name for the symbol. That is, it should serve as a unique
 * identifier across the package. Typically, it will include one descriptor
 * for every node in the AST (along the ancestry path) between the root of
 * the file and the node corresponding to the symbol.
 *
 * Local symbols MUST only be used for entities which are local to a Document,
 * and cannot be accessed from outside the Document.
 *
 * @generated from message scip.Symbol
 */
export type Symbol = Message<"scip.Symbol"> & {
    /**
     * @generated from field: string scheme = 1;
     */
    scheme: string;
    /**
     * @generated from field: scip.Package package = 2;
     */
    package?: Package;
    /**
     * @generated from field: repeated scip.Descriptor descriptors = 3;
     */
    descriptors: Descriptor[];
};
/**
 * Describes the message scip.Symbol.
 * Use `create(SymbolSchema)` to create a new message.
 */
export declare const SymbolSchema: GenMessage<Symbol>;
/**
 * Unit of packaging and distribution.
 *
 * NOTE: This corresponds to a module in Go and JVM languages.
 *
 * @generated from message scip.Package
 */
export type Package = Message<"scip.Package"> & {
    /**
     * @generated from field: string manager = 1;
     */
    manager: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string version = 3;
     */
    version: string;
};
/**
 * Describes the message scip.Package.
 * Use `create(PackageSchema)` to create a new message.
 */
export declare const PackageSchema: GenMessage<Package>;
/**
 * @generated from message scip.Descriptor
 */
export type Descriptor = Message<"scip.Descriptor"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string disambiguator = 2;
     */
    disambiguator: string;
    /**
     * @generated from field: scip.Descriptor.Suffix suffix = 3;
     */
    suffix: Descriptor_Suffix;
};
/**
 * Describes the message scip.Descriptor.
 * Use `create(DescriptorSchema)` to create a new message.
 */
export declare const DescriptorSchema: GenMessage<Descriptor>;
/**
 * @generated from enum scip.Descriptor.Suffix
 */
export declare enum Descriptor_Suffix {
    /**
     * @generated from enum value: UnspecifiedSuffix = 0;
     */
    UnspecifiedSuffix = 0,
    /**
     * Unit of code abstraction and/or namespacing.
     *
     * NOTE: This corresponds to a package in Go and JVM languages.
     *
     * @generated from enum value: Namespace = 1;
     */
    Namespace = 1,
    /**
     * Use Namespace instead.
     *
     * @generated from enum value: Package = 1 [deprecated = true];
     * @deprecated
     */
    Package = 1,
    /**
     * @generated from enum value: Type = 2;
     */
    Type = 2,
    /**
     * @generated from enum value: Term = 3;
     */
    Term = 3,
    /**
     * @generated from enum value: Method = 4;
     */
    Method = 4,
    /**
     * @generated from enum value: TypeParameter = 5;
     */
    TypeParameter = 5,
    /**
     * @generated from enum value: Parameter = 6;
     */
    Parameter = 6,
    /**
     * Can be used for any purpose.
     *
     * @generated from enum value: Meta = 7;
     */
    Meta = 7,
    /**
     * @generated from enum value: Local = 8;
     */
    Local = 8,
    /**
     * @generated from enum value: Macro = 9;
     */
    Macro = 9
}
/**
 * Describes the enum scip.Descriptor.Suffix.
 */
export declare const Descriptor_SuffixSchema: GenEnum<Descriptor_Suffix>;
/**
 * SymbolInformation defines metadata about a symbol, such as the symbol's
 * docstring or what package it's defined it.
 *
 * @generated from message scip.SymbolInformation
 */
export type SymbolInformation = Message<"scip.SymbolInformation"> & {
    /**
     * Identifier of this symbol, which can be referenced from `Occurence.symbol`.
     * The string must be formatted according to the grammar in `Symbol`.
     *
     * @generated from field: string symbol = 1;
     */
    symbol: string;
    /**
     * (optional, but strongly recommended) The markdown-formatted documentation
     * for this symbol. Use `SymbolInformation.signature_documentation` to
     * document the method/class/type signature of this symbol.
     * Due to historical reasons, indexers may include signature documentation in
     * this field by rendering markdown code blocks. New indexers should only
     * include non-code documentation in this field, for example docstrings.
     *
     * @generated from field: repeated string documentation = 3;
     */
    documentation: string[];
    /**
     * (optional) Relationships to other symbols (e.g., implements, type definition).
     *
     * @generated from field: repeated scip.Relationship relationships = 4;
     */
    relationships: Relationship[];
    /**
     * The kind of this symbol. Use this field instead of
     * `SymbolDescriptor.Suffix` to determine whether something is, for example, a
     * class or a method.
     *
     * @generated from field: scip.SymbolInformation.Kind kind = 5;
     */
    kind: SymbolInformation_Kind;
    /**
     * (optional) The name of this symbol as it should be displayed to the user.
     * For example, the symbol "com/example/MyClass#myMethod(+1)." should have the
     * display name "myMethod". The `symbol` field is not a reliable source of
     * the display name for several reasons:
     *
     * - Local symbols don't encode the name.
     * - Some languages have case-insensitive names, so the symbol is all-lowercase.
     * - The symbol may encode names with special characters that should not be
     *   displayed to the user.
     *
     * @generated from field: string display_name = 6;
     */
    displayName: string;
    /**
     * (optional) The signature of this symbol as it's displayed in API
     * documentation or in hover tooltips. For example, a Java method that adds
     * two numbers this would have `Document.language = "java"` and `Document.text
     * = "void add(int a, int b)". The `language` and `text` fields are required
     * while other fields such as `Documentation.occurrences` can be optionally
     * included to support hyperlinking referenced symbols in the signature.
     *
     * @generated from field: scip.Document signature_documentation = 7;
     */
    signatureDocumentation?: Document;
    /**
     * (optional) The enclosing symbol if this is a local symbol.  For non-local
     * symbols, the enclosing symbol should be parsed from the `symbol` field
     * using the `Descriptor` grammar.
     *
     * The primary use-case for this field is to allow local symbol to be displayed
     * in a symbol hierarchy for API documentation. It's OK to leave this field
     * empty for local variables since local variables usually don't belong in API
     * documentation. However, in the situation that you wish to include a local
     * symbol in the hierarchy, then you can use `enclosing_symbol` to locate the
     * "parent" or "owner" of this local symbol. For example, a Java indexer may
     * choose to use local symbols for private class fields while providing an
     * `enclosing_symbol` to reference the enclosing class to allow the field to
     * be part of the class documentation hierarchy. From the perspective of an
     * author of an indexer, the decision to use a local symbol or global symbol
     * should exclusively be determined whether the local symbol is accessible
     * outside the document, not by the capability to find the enclosing
     * symbol.
     *
     * @generated from field: string enclosing_symbol = 8;
     */
    enclosingSymbol: string;
};
/**
 * Describes the message scip.SymbolInformation.
 * Use `create(SymbolInformationSchema)` to create a new message.
 */
export declare const SymbolInformationSchema: GenMessage<SymbolInformation>;
/**
 * (optional) Kind represents the fine-grained category of a symbol, suitable for presenting
 * information about the symbol's meaning in the language.
 *
 * For example:
 * - A Java method would have the kind `Method` while a Go function would
 *   have the kind `Function`, even if the symbols for these use the same
 *   syntax for the descriptor `SymbolDescriptor.Suffix.Method`.
 * - A Go struct has the symbol kind `Struct` while a Java class has
 *   the symbol kind `Class` even if they both have the same descriptor:
 *   `SymbolDescriptor.Suffix.Type`.
 *
 * Since Kind is more fine-grained than Suffix:
 * - If two symbols have the same Kind, they should share the same Suffix.
 * - If two symbols have different Suffixes, they should have different Kinds.
 *
 * @generated from enum scip.SymbolInformation.Kind
 */
export declare enum SymbolInformation_Kind {
    /**
     * @generated from enum value: UnspecifiedKind = 0;
     */
    UnspecifiedKind = 0,
    /**
     * A method which may or may not have a body. For Java, Kotlin etc.
     *
     * @generated from enum value: AbstractMethod = 66;
     */
    AbstractMethod = 66,
    /**
     * For Ruby's attr_accessor
     *
     * @generated from enum value: Accessor = 72;
     */
    Accessor = 72,
    /**
     * @generated from enum value: Array = 1;
     */
    Array = 1,
    /**
     * For Alloy
     *
     * @generated from enum value: Assertion = 2;
     */
    Assertion = 2,
    /**
     * @generated from enum value: AssociatedType = 3;
     */
    AssociatedType = 3,
    /**
     * For C++
     *
     * @generated from enum value: Attribute = 4;
     */
    Attribute = 4,
    /**
     * For Lean
     *
     * @generated from enum value: Axiom = 5;
     */
    Axiom = 5,
    /**
     * @generated from enum value: Boolean = 6;
     */
    Boolean = 6,
    /**
     * @generated from enum value: Class = 7;
     */
    Class = 7,
    /**
     * @generated from enum value: Constant = 8;
     */
    Constant = 8,
    /**
     * @generated from enum value: Constructor = 9;
     */
    Constructor = 9,
    /**
     * For Solidity
     *
     * @generated from enum value: Contract = 62;
     */
    Contract = 62,
    /**
     * For Haskell
     *
     * @generated from enum value: DataFamily = 10;
     */
    DataFamily = 10,
    /**
     * For C# and F#
     *
     * @generated from enum value: Delegate = 73;
     */
    Delegate = 73,
    /**
     * @generated from enum value: Enum = 11;
     */
    Enum = 11,
    /**
     * @generated from enum value: EnumMember = 12;
     */
    EnumMember = 12,
    /**
     * @generated from enum value: Error = 63;
     */
    Error = 63,
    /**
     * @generated from enum value: Event = 13;
     */
    Event = 13,
    /**
     * For Alloy
     *
     * @generated from enum value: Fact = 14;
     */
    Fact = 14,
    /**
     * @generated from enum value: Field = 15;
     */
    Field = 15,
    /**
     * @generated from enum value: File = 16;
     */
    File = 16,
    /**
     * @generated from enum value: Function = 17;
     */
    Function = 17,
    /**
     * For 'get' in Swift, 'attr_reader' in Ruby
     *
     * @generated from enum value: Getter = 18;
     */
    Getter = 18,
    /**
     * For Raku
     *
     * @generated from enum value: Grammar = 19;
     */
    Grammar = 19,
    /**
     * For Purescript and Lean
     *
     * @generated from enum value: Instance = 20;
     */
    Instance = 20,
    /**
     * @generated from enum value: Interface = 21;
     */
    Interface = 21,
    /**
     * @generated from enum value: Key = 22;
     */
    Key = 22,
    /**
     * For Racket
     *
     * @generated from enum value: Lang = 23;
     */
    Lang = 23,
    /**
     * For Lean
     *
     * @generated from enum value: Lemma = 24;
     */
    Lemma = 24,
    /**
     * For solidity
     *
     * @generated from enum value: Library = 64;
     */
    Library = 64,
    /**
     * @generated from enum value: Macro = 25;
     */
    Macro = 25,
    /**
     * @generated from enum value: Method = 26;
     */
    Method = 26,
    /**
     * For Ruby
     *
     * @generated from enum value: MethodAlias = 74;
     */
    MethodAlias = 74,
    /**
     * Analogous to 'ThisParameter' and 'SelfParameter', but for languages
     * like Go where the receiver doesn't have a conventional name.
     *
     * @generated from enum value: MethodReceiver = 27;
     */
    MethodReceiver = 27,
    /**
     * Analogous to 'AbstractMethod', for Go.
     *
     * @generated from enum value: MethodSpecification = 67;
     */
    MethodSpecification = 67,
    /**
     * For Protobuf
     *
     * @generated from enum value: Message = 28;
     */
    Message = 28,
    /**
     * For Solidity
     *
     * @generated from enum value: Modifier = 65;
     */
    Modifier = 65,
    /**
     * @generated from enum value: Module = 29;
     */
    Module = 29,
    /**
     * @generated from enum value: Namespace = 30;
     */
    Namespace = 30,
    /**
     * @generated from enum value: Null = 31;
     */
    Null = 31,
    /**
     * @generated from enum value: Number = 32;
     */
    Number = 32,
    /**
     * @generated from enum value: Object = 33;
     */
    Object = 33,
    /**
     * @generated from enum value: Operator = 34;
     */
    Operator = 34,
    /**
     * @generated from enum value: Package = 35;
     */
    Package = 35,
    /**
     * @generated from enum value: PackageObject = 36;
     */
    PackageObject = 36,
    /**
     * @generated from enum value: Parameter = 37;
     */
    Parameter = 37,
    /**
     * @generated from enum value: ParameterLabel = 38;
     */
    ParameterLabel = 38,
    /**
     * For Haskell's PatternSynonyms
     *
     * @generated from enum value: Pattern = 39;
     */
    Pattern = 39,
    /**
     * For Alloy
     *
     * @generated from enum value: Predicate = 40;
     */
    Predicate = 40,
    /**
     * @generated from enum value: Property = 41;
     */
    Property = 41,
    /**
     * Analogous to 'Trait' and 'TypeClass', for Swift and Objective-C
     *
     * @generated from enum value: Protocol = 42;
     */
    Protocol = 42,
    /**
     * Analogous to 'AbstractMethod', for Swift and Objective-C.
     *
     * @generated from enum value: ProtocolMethod = 68;
     */
    ProtocolMethod = 68,
    /**
     * Analogous to 'AbstractMethod', for C++.
     *
     * @generated from enum value: PureVirtualMethod = 69;
     */
    PureVirtualMethod = 69,
    /**
     * For Haskell
     *
     * @generated from enum value: Quasiquoter = 43;
     */
    Quasiquoter = 43,
    /**
     * 'self' in Python, Rust, Swift etc.
     *
     * @generated from enum value: SelfParameter = 44;
     */
    SelfParameter = 44,
    /**
     * For 'set' in Swift, 'attr_writer' in Ruby
     *
     * @generated from enum value: Setter = 45;
     */
    Setter = 45,
    /**
     * For Alloy, analogous to 'Struct'.
     *
     * @generated from enum value: Signature = 46;
     */
    Signature = 46,
    /**
     * For Ruby
     *
     * @generated from enum value: SingletonClass = 75;
     */
    SingletonClass = 75,
    /**
     * Analogous to 'StaticMethod', for Ruby.
     *
     * @generated from enum value: SingletonMethod = 76;
     */
    SingletonMethod = 76,
    /**
     * Analogous to 'StaticField', for C++
     *
     * @generated from enum value: StaticDataMember = 77;
     */
    StaticDataMember = 77,
    /**
     * For C#
     *
     * @generated from enum value: StaticEvent = 78;
     */
    StaticEvent = 78,
    /**
     * For C#
     *
     * @generated from enum value: StaticField = 79;
     */
    StaticField = 79,
    /**
     * For Java, C#, C++ etc.
     *
     * @generated from enum value: StaticMethod = 80;
     */
    StaticMethod = 80,
    /**
     * For C#, TypeScript etc.
     *
     * @generated from enum value: StaticProperty = 81;
     */
    StaticProperty = 81,
    /**
     * For C, C++
     *
     * @generated from enum value: StaticVariable = 82;
     */
    StaticVariable = 82,
    /**
     * @generated from enum value: String = 48;
     */
    String = 48,
    /**
     * @generated from enum value: Struct = 49;
     */
    Struct = 49,
    /**
     * For Swift
     *
     * @generated from enum value: Subscript = 47;
     */
    Subscript = 47,
    /**
     * For Lean
     *
     * @generated from enum value: Tactic = 50;
     */
    Tactic = 50,
    /**
     * For Lean
     *
     * @generated from enum value: Theorem = 51;
     */
    Theorem = 51,
    /**
     * Method receiver for languages
     * 'this' in JavaScript, C++, Java etc.
     *
     * @generated from enum value: ThisParameter = 52;
     */
    ThisParameter = 52,
    /**
     * Analogous to 'Protocol' and 'TypeClass', for Rust, Scala etc.
     *
     * @generated from enum value: Trait = 53;
     */
    Trait = 53,
    /**
     * Analogous to 'AbstractMethod', for Rust, Scala etc.
     *
     * @generated from enum value: TraitMethod = 70;
     */
    TraitMethod = 70,
    /**
     * Data type definition for languages like OCaml which use `type`
     * rather than separate keywords like `struct` and `enum`.
     *
     * @generated from enum value: Type = 54;
     */
    Type = 54,
    /**
     * @generated from enum value: TypeAlias = 55;
     */
    TypeAlias = 55,
    /**
     * Analogous to 'Trait' and 'Protocol', for Haskell, Purescript etc.
     *
     * @generated from enum value: TypeClass = 56;
     */
    TypeClass = 56,
    /**
     * Analogous to 'AbstractMethod', for Haskell, Purescript etc.
     *
     * @generated from enum value: TypeClassMethod = 71;
     */
    TypeClassMethod = 71,
    /**
     * For Haskell
     *
     * @generated from enum value: TypeFamily = 57;
     */
    TypeFamily = 57,
    /**
     * @generated from enum value: TypeParameter = 58;
     */
    TypeParameter = 58,
    /**
     * For C, C++, Capn Proto
     *
     * @generated from enum value: Union = 59;
     */
    Union = 59,
    /**
     * @generated from enum value: Value = 60;
     */
    Value = 60,
    /**
     * Next = 83;
     * Feel free to open a PR proposing new language-specific kinds.
     *
     * @generated from enum value: Variable = 61;
     */
    Variable = 61
}
/**
 * Describes the enum scip.SymbolInformation.Kind.
 */
export declare const SymbolInformation_KindSchema: GenEnum<SymbolInformation_Kind>;
/**
 * @generated from message scip.Relationship
 */
export type Relationship = Message<"scip.Relationship"> & {
    /**
     * @generated from field: string symbol = 1;
     */
    symbol: string;
    /**
     * When resolving "Find references", this field documents what other symbols
     * should be included together with this symbol. For example, consider the
     * following TypeScript code that defines two symbols `Animal#sound()` and
     * `Dog#sound()`:
     * ```ts
     * interface Animal {
     *           ^^^^^^ definition Animal#
     *   sound(): string
     *   ^^^^^ definition Animal#sound()
     * }
     * class Dog implements Animal {
     *       ^^^ definition Dog#, relationships = [{symbol: "Animal#", is_implementation: true}]
     *   public sound(): string { return "woof" }
     *          ^^^^^ definition Dog#sound(), references_symbols = Animal#sound(), relationships = [{symbol: "Animal#sound()", is_implementation:true, is_reference: true}]
     * }
     * const animal: Animal = new Dog()
     *               ^^^^^^ reference Animal#
     * console.log(animal.sound())
     *                    ^^^^^ reference Animal#sound()
     * ```
     * Doing "Find references" on the symbol `Animal#sound()` should return
     * references to the `Dog#sound()` method as well. Vice-versa, doing "Find
     * references" on the `Dog#sound()` method should include references to the
     * `Animal#sound()` method as well.
     *
     * @generated from field: bool is_reference = 2;
     */
    isReference: boolean;
    /**
     * Similar to `is_reference` but for "Find implementations".
     * It's common for `is_implementation` and `is_reference` to both be true but
     * it's not always the case.
     * In the TypeScript example above, observe that `Dog#` has an
     * `is_implementation` relationship with `"Animal#"` but not `is_reference`.
     * This is because "Find references" on the "Animal#" symbol should not return
     * "Dog#". We only want "Dog#" to return as a result for "Find
     * implementations" on the "Animal#" symbol.
     *
     * @generated from field: bool is_implementation = 3;
     */
    isImplementation: boolean;
    /**
     * Similar to `references_symbols` but for "Go to type definition".
     *
     * @generated from field: bool is_type_definition = 4;
     */
    isTypeDefinition: boolean;
    /**
     * Allows overriding the behavior of "Go to definition" and "Find references"
     * for symbols which do not have a definition of their own or could
     * potentially have multiple definitions.
     *
     * For example, in a language with single inheritance and no field overriding,
     * inherited fields can reuse the same symbol as the ancestor which declares
     * the field. In such a situation, is_definition is not needed.
     *
     * On the other hand, in languages with single inheritance and some form
     * of mixins, you can use is_definition to relate the symbol to the
     * matching symbol in ancestor classes, and is_reference to relate the
     * symbol to the matching symbol in mixins.
     *
     * NOTE: At the moment, due to limitations of the SCIP to LSIF conversion,
     * only global symbols in an index are allowed to use is_definition.
     * The relationship may not get recorded if either symbol is local.
     *
     * Update registerInverseRelationships on adding a new field here.
     *
     * @generated from field: bool is_definition = 5;
     */
    isDefinition: boolean;
};
/**
 * Describes the message scip.Relationship.
 * Use `create(RelationshipSchema)` to create a new message.
 */
export declare const RelationshipSchema: GenMessage<Relationship>;
/**
 * Occurrence associates a source position with a symbol and/or highlighting
 * information.
 *
 * If possible, indexers should try to bundle logically related information
 * across occurrences into a single occurrence to reduce payload sizes.
 *
 * @generated from message scip.Occurrence
 */
export type Occurrence = Message<"scip.Occurrence"> & {
    /**
     * Half-open [start, end) range of this occurrence. Must be exactly three or four
     * elements:
     *
     * - Four elements: `[startLine, startCharacter, endLine, endCharacter]`
     * - Three elements: `[startLine, startCharacter, endCharacter]`. The end line
     *   is inferred to have the same value as the start line.
     *
     * It is allowed for the range to be empty (i.e. start==end).
     *
     * Line numbers and characters are always 0-based. Make sure to increment the
     * line/character values before displaying them in an editor-like UI because
     * editors conventionally use 1-based numbers.
     *
     * The 'character' value is interpreted based on the PositionEncoding for
     * the Document.
     *
     * Historical note: the original draft of this schema had a `Range` message
     * type with `start` and `end` fields of type `Position`, mirroring LSP.
     * Benchmarks revealed that this encoding was inefficient and that we could
     * reduce the total payload size of an index by 50% by using `repeated int32`
     * instead. The `repeated int32` encoding is admittedly more embarrassing to
     * work with in some programming languages but we hope the performance
     * improvements make up for it.
     *
     * @generated from field: repeated int32 range = 1;
     */
    range: number[];
    /**
     * (optional) The symbol that appears at this position. See
     * `SymbolInformation.symbol` for how to format symbols as strings.
     *
     * @generated from field: string symbol = 2;
     */
    symbol: string;
    /**
     * (optional) Bitset containing `SymbolRole`s in this occurrence.
     * See `SymbolRole`'s documentation for how to read and write this field.
     *
     * @generated from field: int32 symbol_roles = 3;
     */
    symbolRoles: number;
    /**
     * (optional) CommonMark-formatted documentation for this specific range. If
     * empty, the `Symbol.documentation` field is used instead. One example
     * where this field might be useful is when the symbol represents a generic
     * function (with abstract type parameters such as `List<T>`) and at this
     * occurrence we know the exact values (such as `List<String>`).
     *
     * This field can also be used for dynamically or gradually typed languages,
     * which commonly allow for type-changing assignment.
     *
     * @generated from field: repeated string override_documentation = 4;
     */
    overrideDocumentation: string[];
    /**
     * (optional) What syntax highlighting class should be used for this range?
     *
     * @generated from field: scip.SyntaxKind syntax_kind = 5;
     */
    syntaxKind: SyntaxKind;
    /**
     * (optional) Diagnostics that have been reported for this specific range.
     *
     * @generated from field: repeated scip.Diagnostic diagnostics = 6;
     */
    diagnostics: Diagnostic[];
    /**
     * (optional) Using the same encoding as the sibling `range` field, half-open
     * source range of the nearest non-trivial enclosing AST node. This range must
     * enclose the `range` field. Example applications that make use of the
     * enclosing_range field:
     *
     * - Call hierarchies: to determine what symbols are references from the body
     *   of a function
     * - Symbol outline: to display breadcrumbs from the cursor position to the
     *   root of the file
     * - Expand selection: to select the nearest enclosing AST node.
     * - Highlight range: to indicate the AST expression that is associated with a
     *   hover popover
     *
     * For definition occurrences, the enclosing range should indicate the
     * start/end bounds of the entire definition AST node, including
     * documentation.
     * ```
     * const n = 3
     *       ^ range
     * ^^^^^^^^^^^ enclosing_range
     *
     * /** Parses the string into something *\/
     * ^ enclosing_range start --------------------------------------|
     * function parse(input string): string {                        |
     *          ^^^^^ range                                          |
     *     return input.slice(n)                                     |
     * }                                                             |
     * ^ enclosing_range end <---------------------------------------|
     * ```
     *
     * Any attributes/decorators/attached macros should also be part of the
     * enclosing range.
     *
     * ```python
     * @cache
     * ^ enclosing_range start---------------------|
     * def factorial(n):                           |
     *     return n * factorial(n-1) if n else 1   |
     * < enclosing_range end-----------------------|
     *
     * ```
     *
     * For reference occurrences, the enclosing range should indicate the start/end
     * bounds of the parent expression.
     * ```
     * const a = a.b
     *             ^ range
     *           ^^^ enclosing_range
     * const b = a.b(41).f(42).g(43)
     *                   ^ range
     *           ^^^^^^^^^^^^^ enclosing_range
     * ```
     *
     * @generated from field: repeated int32 enclosing_range = 7;
     */
    enclosingRange: number[];
};
/**
 * Describes the message scip.Occurrence.
 * Use `create(OccurrenceSchema)` to create a new message.
 */
export declare const OccurrenceSchema: GenMessage<Occurrence>;
/**
 * Represents a diagnostic, such as a compiler error or warning, which should be
 * reported for a document.
 *
 * @generated from message scip.Diagnostic
 */
export type Diagnostic = Message<"scip.Diagnostic"> & {
    /**
     * Should this diagnostic be reported as an error, warning, info, or hint?
     *
     * @generated from field: scip.Severity severity = 1;
     */
    severity: Severity;
    /**
     * (optional) Code of this diagnostic, which might appear in the user interface.
     *
     * @generated from field: string code = 2;
     */
    code: string;
    /**
     * Message of this diagnostic.
     *
     * @generated from field: string message = 3;
     */
    message: string;
    /**
     * (optional) Human-readable string describing the source of this diagnostic, e.g.
     * 'typescript' or 'super lint'.
     *
     * @generated from field: string source = 4;
     */
    source: string;
    /**
     * @generated from field: repeated scip.DiagnosticTag tags = 5;
     */
    tags: DiagnosticTag[];
};
/**
 * Describes the message scip.Diagnostic.
 * Use `create(DiagnosticSchema)` to create a new message.
 */
export declare const DiagnosticSchema: GenMessage<Diagnostic>;
/**
 * @generated from enum scip.ProtocolVersion
 */
export declare enum ProtocolVersion {
    /**
     * @generated from enum value: UnspecifiedProtocolVersion = 0;
     */
    UnspecifiedProtocolVersion = 0
}
/**
 * Describes the enum scip.ProtocolVersion.
 */
export declare const ProtocolVersionSchema: GenEnum<ProtocolVersion>;
/**
 * @generated from enum scip.TextEncoding
 */
export declare enum TextEncoding {
    /**
     * @generated from enum value: UnspecifiedTextEncoding = 0;
     */
    UnspecifiedTextEncoding = 0,
    /**
     * @generated from enum value: UTF8 = 1;
     */
    UTF8 = 1,
    /**
     * @generated from enum value: UTF16 = 2;
     */
    UTF16 = 2
}
/**
 * Describes the enum scip.TextEncoding.
 */
export declare const TextEncodingSchema: GenEnum<TextEncoding>;
/**
 * Encoding used to interpret the 'character' value in source ranges.
 *
 * @generated from enum scip.PositionEncoding
 */
export declare enum PositionEncoding {
    /**
     * Default value. This value should not be used by new SCIP indexers
     * so that a consumer can process the SCIP index without ambiguity.
     *
     * @generated from enum value: UnspecifiedPositionEncoding = 0;
     */
    UnspecifiedPositionEncoding = 0,
    /**
     * The 'character' value is interpreted as an offset in terms
     * of UTF-8 code units (i.e. bytes).
     *
     * Example: For the string "🚀 Woo" in UTF-8, the bytes are
     * [240, 159, 154, 128, 32, 87, 111, 111], so the offset for 'W'
     * would be 5.
     *
     * @generated from enum value: UTF8CodeUnitOffsetFromLineStart = 1;
     */
    UTF8CodeUnitOffsetFromLineStart = 1,
    /**
     * The 'character' value is interpreted as an offset in terms
     * of UTF-16 code units (each is 2 bytes).
     *
     * Example: For the string "🚀 Woo", the UTF-16 code units are
     * ['\ud83d', '\ude80', ' ', 'W', 'o', 'o'], so the offset for 'W'
     * would be 3.
     *
     * @generated from enum value: UTF16CodeUnitOffsetFromLineStart = 2;
     */
    UTF16CodeUnitOffsetFromLineStart = 2,
    /**
     * The 'character' value is interpreted as an offset in terms
     * of UTF-32 code units (each is 4 bytes).
     *
     * Example: For the string "🚀 Woo", the UTF-32 code units are
     * ['🚀', ' ', 'W', 'o', 'o'], so the offset for 'W' would be 2.
     *
     * @generated from enum value: UTF32CodeUnitOffsetFromLineStart = 3;
     */
    UTF32CodeUnitOffsetFromLineStart = 3
}
/**
 * Describes the enum scip.PositionEncoding.
 */
export declare const PositionEncodingSchema: GenEnum<PositionEncoding>;
/**
 * SymbolRole declares what "role" a symbol has in an occurrence. A role is
 * encoded as a bitset where each bit represents a different role. For example,
 * to determine if the `Import` role is set, test whether the second bit of the
 * enum value is defined. In pseudocode, this can be implemented with the
 * logic: `const isImportRole = (role.value & SymbolRole.Import.value) > 0`.
 *
 * @generated from enum scip.SymbolRole
 */
export declare enum SymbolRole {
    /**
     * This case is not meant to be used; it only exists to avoid an error
     * from the Protobuf code generator.
     *
     * @generated from enum value: UnspecifiedSymbolRole = 0;
     */
    UnspecifiedSymbolRole = 0,
    /**
     * Is the symbol defined here? If not, then this is a symbol reference.
     *
     * @generated from enum value: Definition = 1;
     */
    Definition = 1,
    /**
     * Is the symbol imported here?
     *
     * @generated from enum value: Import = 2;
     */
    Import = 2,
    /**
     * Is the symbol written here?
     *
     * @generated from enum value: WriteAccess = 4;
     */
    WriteAccess = 4,
    /**
     * Is the symbol read here?
     *
     * @generated from enum value: ReadAccess = 8;
     */
    ReadAccess = 8,
    /**
     * Is the symbol in generated code?
     *
     * @generated from enum value: Generated = 16;
     */
    Generated = 16,
    /**
     * Is the symbol in test code?
     *
     * @generated from enum value: Test = 32;
     */
    Test = 32,
    /**
     * Is this a signature for a symbol that is defined elsewhere?
     *
     * Applies to forward declarations for languages like C, C++
     * and Objective-C, as well as `val` declarations in interface
     * files in languages like SML and OCaml.
     *
     * @generated from enum value: ForwardDefinition = 64;
     */
    ForwardDefinition = 64
}
/**
 * Describes the enum scip.SymbolRole.
 */
export declare const SymbolRoleSchema: GenEnum<SymbolRole>;
/**
 * @generated from enum scip.SyntaxKind
 */
export declare enum SyntaxKind {
    /**
     * @generated from enum value: UnspecifiedSyntaxKind = 0;
     */
    UnspecifiedSyntaxKind = 0,
    /**
     * Comment, including comment markers and text
     *
     * @generated from enum value: Comment = 1;
     */
    Comment = 1,
    /**
     * `;` `.` `,`
     *
     * @generated from enum value: PunctuationDelimiter = 2;
     */
    PunctuationDelimiter = 2,
    /**
     * (), {}, [] when used syntactically
     *
     * @generated from enum value: PunctuationBracket = 3;
     */
    PunctuationBracket = 3,
    /**
     * `if`, `else`, `return`, `class`, etc.
     *
     * @generated from enum value: Keyword = 4;
     */
    Keyword = 4,
    /**
     * @generated from enum value: IdentifierKeyword = 4 [deprecated = true];
     * @deprecated
     */
    IdentifierKeyword = 4,
    /**
     * `+`, `*`, etc.
     *
     * @generated from enum value: IdentifierOperator = 5;
     */
    IdentifierOperator = 5,
    /**
     * non-specific catch-all for any identifier not better described elsewhere
     *
     * @generated from enum value: Identifier = 6;
     */
    Identifier = 6,
    /**
     * Identifiers builtin to the language: `min`, `print` in Python.
     *
     * @generated from enum value: IdentifierBuiltin = 7;
     */
    IdentifierBuiltin = 7,
    /**
     * Identifiers representing `null`-like values: `None` in Python, `nil` in Go.
     *
     * @generated from enum value: IdentifierNull = 8;
     */
    IdentifierNull = 8,
    /**
     * `xyz` in `const xyz = "hello"`
     *
     * @generated from enum value: IdentifierConstant = 9;
     */
    IdentifierConstant = 9,
    /**
     * `var X = "hello"` in Go
     *
     * @generated from enum value: IdentifierMutableGlobal = 10;
     */
    IdentifierMutableGlobal = 10,
    /**
     * Parameter definition and references
     *
     * @generated from enum value: IdentifierParameter = 11;
     */
    IdentifierParameter = 11,
    /**
     * Identifiers for variable definitions and references within a local scope
     *
     * @generated from enum value: IdentifierLocal = 12;
     */
    IdentifierLocal = 12,
    /**
     * Identifiers that shadow other identifiers in an outer scope
     *
     * @generated from enum value: IdentifierShadowed = 13;
     */
    IdentifierShadowed = 13,
    /**
     * Identifier representing a unit of code abstraction and/or namespacing.
     *
     * NOTE: This corresponds to a package in Go and JVM languages,
     * and a module in languages like Python and JavaScript.
     *
     * @generated from enum value: IdentifierNamespace = 14;
     */
    IdentifierNamespace = 14,
    /**
     * @generated from enum value: IdentifierModule = 14 [deprecated = true];
     * @deprecated
     */
    IdentifierModule = 14,
    /**
     * Function references, including calls
     *
     * @generated from enum value: IdentifierFunction = 15;
     */
    IdentifierFunction = 15,
    /**
     * Function definition only
     *
     * @generated from enum value: IdentifierFunctionDefinition = 16;
     */
    IdentifierFunctionDefinition = 16,
    /**
     * Macro references, including invocations
     *
     * @generated from enum value: IdentifierMacro = 17;
     */
    IdentifierMacro = 17,
    /**
     * Macro definition only
     *
     * @generated from enum value: IdentifierMacroDefinition = 18;
     */
    IdentifierMacroDefinition = 18,
    /**
     * non-builtin types
     *
     * @generated from enum value: IdentifierType = 19;
     */
    IdentifierType = 19,
    /**
     * builtin types only, such as `str` for Python or `int` in Go
     *
     * @generated from enum value: IdentifierBuiltinType = 20;
     */
    IdentifierBuiltinType = 20,
    /**
     * Python decorators, c-like __attribute__
     *
     * @generated from enum value: IdentifierAttribute = 21;
     */
    IdentifierAttribute = 21,
    /**
     * `\b`
     *
     * @generated from enum value: RegexEscape = 22;
     */
    RegexEscape = 22,
    /**
     * `*`, `+`
     *
     * @generated from enum value: RegexRepeated = 23;
     */
    RegexRepeated = 23,
    /**
     * `.`
     *
     * @generated from enum value: RegexWildcard = 24;
     */
    RegexWildcard = 24,
    /**
     * `(`, `)`, `[`, `]`
     *
     * @generated from enum value: RegexDelimiter = 25;
     */
    RegexDelimiter = 25,
    /**
     * `|`, `-`
     *
     * @generated from enum value: RegexJoin = 26;
     */
    RegexJoin = 26,
    /**
     * Literal strings: "Hello, world!"
     *
     * @generated from enum value: StringLiteral = 27;
     */
    StringLiteral = 27,
    /**
     * non-regex escapes: "\t", "\n"
     *
     * @generated from enum value: StringLiteralEscape = 28;
     */
    StringLiteralEscape = 28,
    /**
     * datetimes within strings, special words within a string, `{}` in format strings
     *
     * @generated from enum value: StringLiteralSpecial = 29;
     */
    StringLiteralSpecial = 29,
    /**
     * "key" in { "key": "value" }, useful for example in JSON
     *
     * @generated from enum value: StringLiteralKey = 30;
     */
    StringLiteralKey = 30,
    /**
     * 'c' or similar, in languages that differentiate strings and characters
     *
     * @generated from enum value: CharacterLiteral = 31;
     */
    CharacterLiteral = 31,
    /**
     * Literal numbers, both floats and integers
     *
     * @generated from enum value: NumericLiteral = 32;
     */
    NumericLiteral = 32,
    /**
     * `true`, `false`
     *
     * @generated from enum value: BooleanLiteral = 33;
     */
    BooleanLiteral = 33,
    /**
     * Used for XML-like tags
     *
     * @generated from enum value: Tag = 34;
     */
    Tag = 34,
    /**
     * Attribute name in XML-like tags
     *
     * @generated from enum value: TagAttribute = 35;
     */
    TagAttribute = 35,
    /**
     * Delimiters for XML-like tags
     *
     * @generated from enum value: TagDelimiter = 36;
     */
    TagDelimiter = 36
}
/**
 * Describes the enum scip.SyntaxKind.
 */
export declare const SyntaxKindSchema: GenEnum<SyntaxKind>;
/**
 * @generated from enum scip.Severity
 */
export declare enum Severity {
    /**
     * @generated from enum value: UnspecifiedSeverity = 0;
     */
    UnspecifiedSeverity = 0,
    /**
     * @generated from enum value: Error = 1;
     */
    Error = 1,
    /**
     * @generated from enum value: Warning = 2;
     */
    Warning = 2,
    /**
     * @generated from enum value: Information = 3;
     */
    Information = 3,
    /**
     * @generated from enum value: Hint = 4;
     */
    Hint = 4
}
/**
 * Describes the enum scip.Severity.
 */
export declare const SeveritySchema: GenEnum<Severity>;
/**
 * @generated from enum scip.DiagnosticTag
 */
export declare enum DiagnosticTag {
    /**
     * @generated from enum value: UnspecifiedDiagnosticTag = 0;
     */
    UnspecifiedDiagnosticTag = 0,
    /**
     * @generated from enum value: Unnecessary = 1;
     */
    Unnecessary = 1,
    /**
     * @generated from enum value: Deprecated = 2;
     */
    Deprecated = 2
}
/**
 * Describes the enum scip.DiagnosticTag.
 */
export declare const DiagnosticTagSchema: GenEnum<DiagnosticTag>;
/**
 * Language standardises names of common programming languages that can be used
 * for the `Document.language` field. The primary purpose of this enum is to
 * prevent a situation where we have a single programming language ends up with
 * multiple string representations. For example, the C++ language uses the name
 * "CPP" in this enum and other names such as "cpp" are incompatible.
 * Feel free to send a pull-request to add missing programming languages.
 *
 * @generated from enum scip.Language
 */
export declare enum Language {
    /**
     * @generated from enum value: UnspecifiedLanguage = 0;
     */
    UnspecifiedLanguage = 0,
    /**
     * @generated from enum value: ABAP = 60;
     */
    ABAP = 60,
    /**
     * @generated from enum value: Apex = 96;
     */
    Apex = 96,
    /**
     * @generated from enum value: APL = 49;
     */
    APL = 49,
    /**
     * @generated from enum value: Ada = 39;
     */
    Ada = 39,
    /**
     * @generated from enum value: Agda = 45;
     */
    Agda = 45,
    /**
     * @generated from enum value: AsciiDoc = 86;
     */
    AsciiDoc = 86,
    /**
     * @generated from enum value: Assembly = 58;
     */
    Assembly = 58,
    /**
     * @generated from enum value: Awk = 66;
     */
    Awk = 66,
    /**
     * @generated from enum value: Bat = 68;
     */
    Bat = 68,
    /**
     * @generated from enum value: BibTeX = 81;
     */
    BibTeX = 81,
    /**
     * @generated from enum value: C = 34;
     */
    C = 34,
    /**
     * @generated from enum value: COBOL = 59;
     */
    COBOL = 59,
    /**
     * C++ (the name "CPP" was chosen for consistency with LSP)
     *
     * @generated from enum value: CPP = 35;
     */
    CPP = 35,
    /**
     * @generated from enum value: CSS = 26;
     */
    CSS = 26,
    /**
     * @generated from enum value: CSharp = 1;
     */
    CSharp = 1,
    /**
     * @generated from enum value: Clojure = 8;
     */
    Clojure = 8,
    /**
     * @generated from enum value: Coffeescript = 21;
     */
    Coffeescript = 21,
    /**
     * @generated from enum value: CommonLisp = 9;
     */
    CommonLisp = 9,
    /**
     * @generated from enum value: Coq = 47;
     */
    Coq = 47,
    /**
     * @generated from enum value: CUDA = 97;
     */
    CUDA = 97,
    /**
     * @generated from enum value: Dart = 3;
     */
    Dart = 3,
    /**
     * @generated from enum value: Delphi = 57;
     */
    Delphi = 57,
    /**
     * @generated from enum value: Diff = 88;
     */
    Diff = 88,
    /**
     * @generated from enum value: Dockerfile = 80;
     */
    Dockerfile = 80,
    /**
     * @generated from enum value: Dyalog = 50;
     */
    Dyalog = 50,
    /**
     * @generated from enum value: Elixir = 17;
     */
    Elixir = 17,
    /**
     * @generated from enum value: Erlang = 18;
     */
    Erlang = 18,
    /**
     * @generated from enum value: FSharp = 42;
     */
    FSharp = 42,
    /**
     * @generated from enum value: Fish = 65;
     */
    Fish = 65,
    /**
     * @generated from enum value: Flow = 24;
     */
    Flow = 24,
    /**
     * @generated from enum value: Fortran = 56;
     */
    Fortran = 56,
    /**
     * @generated from enum value: Git_Commit = 91;
     */
    Git_Commit = 91,
    /**
     * @generated from enum value: Git_Config = 89;
     */
    Git_Config = 89,
    /**
     * @generated from enum value: Git_Rebase = 92;
     */
    Git_Rebase = 92,
    /**
     * @generated from enum value: Go = 33;
     */
    Go = 33,
    /**
     * @generated from enum value: GraphQL = 98;
     */
    GraphQL = 98,
    /**
     * @generated from enum value: Groovy = 7;
     */
    Groovy = 7,
    /**
     * @generated from enum value: HTML = 30;
     */
    HTML = 30,
    /**
     * @generated from enum value: Hack = 20;
     */
    Hack = 20,
    /**
     * @generated from enum value: Handlebars = 90;
     */
    Handlebars = 90,
    /**
     * @generated from enum value: Haskell = 44;
     */
    Haskell = 44,
    /**
     * @generated from enum value: Idris = 46;
     */
    Idris = 46,
    /**
     * @generated from enum value: Ini = 72;
     */
    Ini = 72,
    /**
     * @generated from enum value: J = 51;
     */
    J = 51,
    /**
     * @generated from enum value: JSON = 75;
     */
    JSON = 75,
    /**
     * @generated from enum value: Java = 6;
     */
    Java = 6,
    /**
     * @generated from enum value: JavaScript = 22;
     */
    JavaScript = 22,
    /**
     * @generated from enum value: JavaScriptReact = 93;
     */
    JavaScriptReact = 93,
    /**
     * @generated from enum value: Jsonnet = 76;
     */
    Jsonnet = 76,
    /**
     * @generated from enum value: Julia = 55;
     */
    Julia = 55,
    /**
     * @generated from enum value: Justfile = 109;
     */
    Justfile = 109,
    /**
     * @generated from enum value: Kotlin = 4;
     */
    Kotlin = 4,
    /**
     * @generated from enum value: LaTeX = 83;
     */
    LaTeX = 83,
    /**
     * @generated from enum value: Lean = 48;
     */
    Lean = 48,
    /**
     * @generated from enum value: Less = 27;
     */
    Less = 27,
    /**
     * @generated from enum value: Lua = 12;
     */
    Lua = 12,
    /**
     * @generated from enum value: Luau = 108;
     */
    Luau = 108,
    /**
     * @generated from enum value: Makefile = 79;
     */
    Makefile = 79,
    /**
     * @generated from enum value: Markdown = 84;
     */
    Markdown = 84,
    /**
     * @generated from enum value: Matlab = 52;
     */
    Matlab = 52,
    /**
     * https://nickel-lang.org/
     *
     * @generated from enum value: Nickel = 110;
     */
    Nickel = 110,
    /**
     * @generated from enum value: Nix = 77;
     */
    Nix = 77,
    /**
     * @generated from enum value: OCaml = 41;
     */
    OCaml = 41,
    /**
     * @generated from enum value: Objective_C = 36;
     */
    Objective_C = 36,
    /**
     * @generated from enum value: Objective_CPP = 37;
     */
    Objective_CPP = 37,
    /**
     * @generated from enum value: Pascal = 99;
     */
    Pascal = 99,
    /**
     * @generated from enum value: PHP = 19;
     */
    PHP = 19,
    /**
     * @generated from enum value: PLSQL = 70;
     */
    PLSQL = 70,
    /**
     * @generated from enum value: Perl = 13;
     */
    Perl = 13,
    /**
     * @generated from enum value: PowerShell = 67;
     */
    PowerShell = 67,
    /**
     * @generated from enum value: Prolog = 71;
     */
    Prolog = 71,
    /**
     * @generated from enum value: Protobuf = 100;
     */
    Protobuf = 100,
    /**
     * @generated from enum value: Python = 15;
     */
    Python = 15,
    /**
     * @generated from enum value: R = 54;
     */
    R = 54,
    /**
     * @generated from enum value: Racket = 11;
     */
    Racket = 11,
    /**
     * @generated from enum value: Raku = 14;
     */
    Raku = 14,
    /**
     * @generated from enum value: Razor = 62;
     */
    Razor = 62,
    /**
     * Internal language for testing SCIP
     *
     * @generated from enum value: Repro = 102;
     */
    Repro = 102,
    /**
     * @generated from enum value: ReST = 85;
     */
    ReST = 85,
    /**
     * @generated from enum value: Ruby = 16;
     */
    Ruby = 16,
    /**
     * @generated from enum value: Rust = 40;
     */
    Rust = 40,
    /**
     * @generated from enum value: SAS = 61;
     */
    SAS = 61,
    /**
     * @generated from enum value: SCSS = 29;
     */
    SCSS = 29,
    /**
     * @generated from enum value: SML = 43;
     */
    SML = 43,
    /**
     * @generated from enum value: SQL = 69;
     */
    SQL = 69,
    /**
     * @generated from enum value: Sass = 28;
     */
    Sass = 28,
    /**
     * @generated from enum value: Scala = 5;
     */
    Scala = 5,
    /**
     * @generated from enum value: Scheme = 10;
     */
    Scheme = 10,
    /**
     * Bash
     *
     * @generated from enum value: ShellScript = 64;
     */
    ShellScript = 64,
    /**
     * @generated from enum value: Skylark = 78;
     */
    Skylark = 78,
    /**
     * @generated from enum value: Slang = 107;
     */
    Slang = 107,
    /**
     * @generated from enum value: Solidity = 95;
     */
    Solidity = 95,
    /**
     * @generated from enum value: Svelte = 106;
     */
    Svelte = 106,
    /**
     * @generated from enum value: Swift = 2;
     */
    Swift = 2,
    /**
     * @generated from enum value: Tcl = 101;
     */
    Tcl = 101,
    /**
     * @generated from enum value: TOML = 73;
     */
    TOML = 73,
    /**
     * @generated from enum value: TeX = 82;
     */
    TeX = 82,
    /**
     * @generated from enum value: Thrift = 103;
     */
    Thrift = 103,
    /**
     * @generated from enum value: TypeScript = 23;
     */
    TypeScript = 23,
    /**
     * @generated from enum value: TypeScriptReact = 94;
     */
    TypeScriptReact = 94,
    /**
     * @generated from enum value: Verilog = 104;
     */
    Verilog = 104,
    /**
     * @generated from enum value: VHDL = 105;
     */
    VHDL = 105,
    /**
     * @generated from enum value: VisualBasic = 63;
     */
    VisualBasic = 63,
    /**
     * @generated from enum value: Vue = 25;
     */
    Vue = 25,
    /**
     * @generated from enum value: Wolfram = 53;
     */
    Wolfram = 53,
    /**
     * @generated from enum value: XML = 31;
     */
    XML = 31,
    /**
     * @generated from enum value: XSL = 32;
     */
    XSL = 32,
    /**
     * @generated from enum value: YAML = 74;
     */
    YAML = 74,
    /**
     * NextLanguage = 111;
     * Steps add a new language:
     * 1. Copy-paste the "NextLanguage = N" line above
     * 2. Increment "NextLanguage = N" to "NextLanguage = N+1"
     * 3. Replace "NextLanguage = N" with the name of the new language.
     * 4. Move the new language to the correct line above using alphabetical order
     * 5. (optional) Add a brief comment behind the language if the name is not self-explanatory
     *
     * @generated from enum value: Zig = 38;
     */
    Zig = 38
}
/**
 * Describes the enum scip.Language.
 */
export declare const LanguageSchema: GenEnum<Language>;
