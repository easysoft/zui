import type {HElementProps} from './h-element-props';

/**
 * HTML content component props.
 */
export interface HtmlContentProps extends HElementProps {
    /**
     * HTML code.
     */
    html: string,

    /**
     * Execute script.
     */
    executeScript?: boolean,

    /**
     * Element inner html updater.
     */
    htmlRender?: (element: HTMLElement, props: HtmlContentProps) => void,
}
