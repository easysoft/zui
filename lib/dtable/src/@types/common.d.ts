type ClassNameLike = import('../../../browser-helpers/src/classes').ClassNameLike;

type CustomRenderResult = (Partial<{
    html: string;
    style: preact.JSX.CSSProperties;
    className: ClassNameLike;
    outer: boolean;
    children: preact.ComponentChildren;
}> | preact.ComponentChildren)[];
