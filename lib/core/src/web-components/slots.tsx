import {Component, createRef} from 'preact';

import type {VNode} from 'preact';

/** Maps direct-child slot names (an empty string for the default slot) to content props. */
export type ElementSlotMap<O extends object = Record<string, unknown>> = Readonly<Record<string, 'children' | {
    [K in keyof O]-?: VNode extends O[K] ? Extract<K, string> : never;
}[keyof O]>>;

type SlotGroup = {nodes: Node[]; outlet?: HTMLSlotElement};
type SlotEntry = {node: Node; marker: Comment};

/** Owns source nodes independently of the Preact tree that displays them. */
export class ElementSlots {
    private _entries = new Map<Node, SlotEntry>();

    private _groups = new Map<string, SlotGroup>();

    private _parking: DocumentFragment;

    private _observer: MutationObserver;

    constructor(private _host: HTMLElement, private _container: HTMLElement, private _map: ElementSlotMap, requestUpdate: () => void) {
        const targets = Object.values(_map);
        if (targets.some(target => !target) || new Set(targets).size !== targets.length) {
            throw new TypeError('[ZUI] Element slots must map to distinct, non-empty content props.');
        }
        this._parking = _host.ownerDocument.createDocumentFragment();
        this._observer = new MutationObserver(() => {
            if (_host.isConnected && this.update()) {
                requestUpdate();
            }
        });
        const observeOptions = {childList: true, subtree: true, attributes: true, attributeFilter: ['slot'], characterData: true};
        this._observer.observe(_host, observeOptions);
        this._observer.observe(this._parking, observeOptions);
    }

    private _name(node: Node): string {
        return node.nodeType === 1 ? (node as Element).getAttribute('slot') ?? '' : '';
    }

    /** Reconcile declarations, ignoring changes made inside the component's own render tree. */
    update(): boolean {
        const outlets = new Set([...this._groups.values()].map(group => group.outlet));
        for (const [node, {marker}] of this._entries) {
            const parent = node.parentNode;
            if (marker.parentNode !== this._host || (parent !== this._host && parent !== this._parking && !outlets.has(parent as HTMLSlotElement))) {
                marker.remove();
                this._entries.delete(node);
            } else if (!Object.hasOwn(this._map, this._name(node))) {
                marker.replaceWith(node);
                this._entries.delete(node);
            }
        }
        for (const node of [...this._host.childNodes]) {
            if (node === this._container || (node.nodeType !== 1 && node.nodeType !== 3) || !Object.hasOwn(this._map, this._name(node))) {
                continue;
            }
            let entry = this._entries.get(node);
            if (!entry) {
                entry = {node, marker: this._host.ownerDocument.createComment('zui-slot')};
                this._entries.set(node, entry);
            }
            if (entry.marker.nextSibling !== node) {
                this._host.insertBefore(entry.marker, node);
            }
        }
        const markers = new Map([...this._entries.values()].map(entry => [entry.marker as Node, entry.node]));
        const nodes = [...this._host.childNodes].flatMap(node => markers.has(node) ? [markers.get(node)!] : []);
        let changed = false;
        for (const name of Object.keys(this._map)) {
            let group = this._groups.get(name);
            if (!group) {
                group = {nodes: []};
                this._groups.set(name, group);
            }
            let next = nodes.filter(node => this._name(node) === name);
            // Formatting whitespace alone must not suppress a component's fallback content.
            if (next.every(node => node.nodeType === 3 && !node.textContent?.trim())) {
                next = [];
            }
            if (next.length !== group.nodes.length || next.some((node, index) => node !== group.nodes[index])) {
                group.nodes = next;
                changed = true;
            }
        }
        for (const node of nodes) {
            if (node.parentNode === this._host) {
                this._parking.append(node);
            }
        }
        return changed;
    }

    props(): Record<string, VNode> {
        const props: Record<string, VNode> = Object.create(null);
        for (const [name, group] of this._groups) {
            if (group.nodes.length) {
                props[this._map[name]] = <SlotContent key={name} owner={this} group={group} />;
            }
        }
        return props;
    }

    mount(group: SlotGroup, outlet: HTMLSlotElement): void {
        group.outlet = outlet;
        for (const node of [...outlet.childNodes]) {
            if (this._entries.has(node) && !group.nodes.includes(node)) {
                this._parking.append(node);
            }
        }
        let next = outlet.firstChild;
        for (const node of group.nodes) {
            if (node === next) {
                next = next.nextSibling;
            } else {
                outlet.insertBefore(node, next);
            }
        }
    }

    unmount(group: SlotGroup, outlet: HTMLSlotElement): void {
        for (const node of [...outlet.childNodes]) {
            if (this._entries.has(node)) {
                this._parking.append(node);
            }
        }
        if (group.outlet === outlet) {
            group.outlet = undefined;
        }
    }

    /** Restore original children before Preact unmounts its containers. */
    destroy(): void {
        this._observer.disconnect();
        this.update();
        for (const {node, marker} of this._entries.values()) {
            if (marker.parentNode === this._host) {
                marker.replaceWith(node);
            }
        }
        this._entries.clear();
        this._groups.clear();
    }
}

class SlotContent extends Component<{owner: ElementSlots; group: SlotGroup}> {
    private _ref = createRef<HTMLSlotElement>();

    componentDidMount(): void {
        this.props.owner.mount(this.props.group, this._ref.current!);
    }

    componentDidUpdate(): void {
        this.props.owner.mount(this.props.group, this._ref.current!);
    }

    componentWillUnmount(): void {
        this.props.owner.unmount(this.props.group, this._ref.current!);
    }

    render() {
        // A light-DOM slot is a transparent container; source nodes are placed explicitly.
        return <slot ref={this._ref} />;
    }
}
