import {ComponentChildren} from 'preact';

export type CollapsableCellProps = {
    /**
     * 标题
     */
    title?: string;

    /**
     * 描述
     */
    caption?: string;

    /**
     * 是否折叠
     * - true: 折叠
     * - false: 展开
     * - 'disabled': 禁用折叠
     */
    collapsed?: boolean | 'disabled';

    children?: ComponentChildren;
};

export function CollapsableCell(props: CollapsableCellProps) {
    const {children, title, caption, collapsed} = props;
    return (
        <details className="collapsable-cell" open={!collapsed || collapsed === 'disabled'}>
            {(title != undefined || caption != undefined) ? (
                <summary className="collapsable-cell-header" style={collapsed === 'disabled' ? {'pointer-events': 'none'} : undefined}>
                    <div className="collapsable-cell-heading">
                        <div className="collapsable-cell-title">{title}</div>
                        <div className="collapsable-cell-caption">{caption}</div>
                    </div>
                </summary>
            ) : null}
            <div className="collapsable-cell-content">
                {children}
            </div>
        </details>
    );
}
