type ClassNameLike = import('../../../browser-helpers/src/classes').ClassNameLike;

type CustomRenderResultItem = Partial<{
    html: string;
    style: preact.JSX.CSSProperties;
    className: ClassNameLike;
    outer: boolean;
    children: preact.ComponentChildren;
}>;

type CustomRenderResult = (CustomRenderResultItem | preact.ComponentChildren)[];
