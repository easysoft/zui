import {JSX} from 'preact';
import {ClassNameLike, classes, getClassList} from '@zui/browser-helpers/src/classes';

export function setClass(element: HTMLElement, classNames: ClassNameLike, reset?: boolean) {
    if (reset) {
        element.setAttribute('class', classes(classNames));
        return;
    }
    getClassList(element.getAttribute('class'), classNames).forEach(([name, toggle]) => {
        element.classList.toggle(name, toggle);
    });
}

export function setStyle(element: HTMLElement, name: string, value: undefined | null | string | number): void;

export function setStyle(element: HTMLElement, style: JSX.CSSProperties): void;

export function setStyle(element: HTMLElement, name: JSX.CSSProperties | string, value?: undefined | null | string | number): void {
    if (typeof name === 'object') {
        return Object.entries(name).forEach(([styleName, styleValue]) => {
            setStyle(element, styleName, styleValue);
        });
    }
    if (value === undefined) {
        return;
    }
    element.style[name] = typeof value === 'number' ? `${value}px` : value;
}

export function setAttr(element: HTMLElement, name: string, value: undefined | null | string): void;

export function setAttr(element: HTMLElement, style: JSX.HTMLAttributes): void;

export function setAttr(element: HTMLElement, attr: JSX.HTMLAttributes | string, value?: undefined | null | string): void {
    if (typeof attr === 'object') {
        return Object.entries(attr).forEach(([attrName, attrValue]) => {
            setAttr(element, attrName, attrValue);
        });
    }
    if (value === undefined) {
        return;
    }
    if (value === null) {
        element.removeAttribute(attr);
    } else {
        element.setAttribute(attr, value);
    }
}
