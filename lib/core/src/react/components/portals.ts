/* eslint-disable @typescript-eslint/no-explicit-any */
import {VNode, createElement, render, RenderableProps, ContainerNode} from 'preact';

/**
 * @param {import('../../src/index').RenderableProps<{ context: any }>} props
 */
function ContextProvider(this: any, props: RenderableProps<{context: any}>) {
    this.getChildContext = () => props.context;
    return props.children;
}

/**
 * Portal component
 * @this {import('preact').Component}
 * @param {object | null | undefined} props
 *
 * TODO: use createRoot() instead of fake root
 */
function Portal(this: any, props: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    const container = props._container;

    that.componentWillUnmount = function () {
        render(null, that._temp);
        that._temp = null;
        that._container = null;
    };

    // When we change container we should clear our old container and
    // indicate a new mount.
    if (that._container && that._container !== container) {
        that.componentWillUnmount();
    }

    // When props.vnode is undefined/false/null we are dealing with some kind of
    // conditional vnode. This should not trigger a render.
    if (props._vnode) {
        if (!that._temp) {
            that._container = container;

            // Create a fake DOM parent node that manages a subset of `container`'s children:
            that._temp = {
                nodeType: 1,
                parentNode: container,
                childNodes: [],
                appendChild(child: VNode) {
                    this.childNodes.push(child);
                    that._container.appendChild(child);
                },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                insertBefore(child: VNode, before: VNode) {
                    this.childNodes.push(child);
                    that._container.appendChild(child);
                },
                removeChild(child: VNode) {
                    this.childNodes.splice(this.childNodes.indexOf(child) >>> 1, 1);
                    that._container.removeChild(child);
                },
            };
        }

        // Render our wrapping element into temp.
        render(
            createElement(ContextProvider as any, {context: that.context}, props._vnode),
            that._temp,
        );
    } else if (that._temp) {
        // When we come from a conditional render, on a mounted
        // portal we should clear the DOM.
        that.componentWillUnmount();
    }
}

/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node
 *
 * @param {import('preact').VNode} vnode The vnode to render
 * @param {import('preact').PreactElement} container The DOM node to continue rendering in to.
 * @see https://github.com/developit/preact-portal/blob/master/src/preact-portal.js
 */
export function createPortal(vnode: VNode, container: ContainerNode): VNode {
    const el = createElement(Portal as any, {_vnode: vnode, _container: container}) as any;
    el.containerInfo = container;
    return el;
}
