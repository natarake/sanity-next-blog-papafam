declare module "react-markdown" {
  import { ComponentType } from "react";

  type AllowedTypes =
    | "root"
    | "text"
    | "break"
    | "paragraph"
    | "emphasis"
    | "strong"
    | "thematicBreak"
    | "blockquote"
    | "delete"
    | "link"
    | "image"
    | "linkReference"
    | "imageReference"
    | "list"
    | "listItem"
    | "definition"
    | "heading"
    | "inlineCode"
    | "code"
    | "html"
    | "table"
    | "tableCell"
    | "tableRow";

  type RenderProps = Record<string, unknown>;

  export type NodeType = {
    type: AllowedTypes;
    children: Array<NodeType>;
    [key: string]: unknown;
  };

  export type Renderers = {
    [key in AllowedTypes]?: ComponentType<RenderProps>;
  };

  export type ReactMarkdownProps = {
    className?: string;
    source: string;
    escapeHtml?: boolean;
    skipHtml?: boolean;
    sourcePos?: boolean;
    rawSourcePos?: boolean;
    includeNodeIndex?: boolean;
    transformLinkUri?: (
      uri: string,
      children: NodeType,
      title?: string
    ) => string;
    linkTarget?:
      | string
      | ((
          url: string,
          text: string,
          title?: string,
          children?: NodeType
        ) => string | undefined);
    renderers?: Renderers;
    astPlugins?: Array<(ast: NodeType) => NodeType>;
    plugins?: Array<unknown>;
    allowDangerousHtml?: boolean;
  };

  const ReactMarkdown: ComponentType<ReactMarkdownProps>;

  export default ReactMarkdown;
}
