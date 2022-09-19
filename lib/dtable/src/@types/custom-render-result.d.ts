type CustomRenderResult = (Partial<{
    html: string;
    style: preact.JSX.CSSProperties;
    className: ClassNameLike;
    cellStyle: JSX.CSSProperties;
    cellClass: ClassNameLike;
}> | preact.ComponentChildren)[];
