import {Component} from 'preact';
import type {RowData} from '@tanstack/table-core';
import type {VTableHeaderContext, VTablePlugin} from '../types';
import './style';

interface ResizeHandleProps<TData extends RowData> {
    context: VTableHeaderContext<TData>;
}

interface ResizeGesture {
    handle: HTMLDivElement;
    pointerId: number;
    startX: number;
    startSize: number;
    guideX: number;
    size: number;
    guide: HTMLDivElement;
    view: Window;
}

/** One handle owns its transient gesture; pointer movement never updates table state. */
class ResizeHandle<TData extends RowData> extends Component<ResizeHandleProps<TData>> {
    private _gesture?: ResizeGesture;

    componentDidUpdate(previous: ResizeHandleProps<TData>) {
        if (previous.context.header.column !== this.props.context.header.column) {
            this._finish();
        }
    }

    componentWillUnmount() {
        this._finish();
    }

    private _clamp = (size: number) => {
        const {columnDef} = this.props.context.header.column;
        return Math.max(columnDef.minSize ?? 20, Math.min(columnDef.maxSize ?? Number.MAX_SAFE_INTEGER, size));
    };

    private _commit = (size: number) => {
        const {table, header: {column}} = this.props.context;
        table.setColumnSizing(previous => ({...previous, [column.id]: this._clamp(size)}));
    };

    private _finish = (commit = false) => {
        const gesture = this._gesture;
        if (!gesture) {
            return;
        }
        this._gesture = undefined;
        const {handle, pointerId, view, guide, size} = gesture;
        view.removeEventListener('pointermove', this._move);
        view.removeEventListener('pointerup', this._up);
        view.removeEventListener('pointercancel', this._cancel);
        view.removeEventListener('keydown', this._cancelKey);
        view.removeEventListener('blur', this._cancel);
        handle.removeEventListener('lostpointercapture', this._cancel);
        if (handle.hasPointerCapture?.(pointerId)) {
            handle.releasePointerCapture(pointerId);
        }
        guide.remove();
        if (commit && handle.isConnected) {
            this._commit(size);
        }
    };

    private _cancel = (event: Event) => {
        if ((event.type === 'pointercancel' || event.type === 'lostpointercapture') && (event as PointerEvent).pointerId !== this._gesture?.pointerId) {
            return;
        }
        this._finish();
    };

    private _cancelKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            this._finish();
        }
    };

    private _move = (event: PointerEvent) => {
        const gesture = this._gesture;
        if (!gesture || event.pointerId !== gesture.pointerId) {
            return;
        }
        if (!gesture.handle.isConnected) {
            this._finish();
            return;
        }
        gesture.size = this._clamp(gesture.startSize + event.clientX - gesture.startX);
        gesture.guide.style.transform = `translateX(${gesture.guideX + gesture.size - gesture.startSize}px)`;
        event.preventDefault();
    };

    private _up = (event: PointerEvent) => {
        if (event.pointerId !== this._gesture?.pointerId) {
            return;
        }
        this._move(event);
        this._finish(true);
    };

    private _down = (event: PointerEvent) => {
        const {context: {header, rootElement}} = this.props;
        if (event.button !== 0 || event.isPrimary === false || !rootElement) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this._finish();
        const handle = event.currentTarget as HTMLDivElement;
        const view = handle.ownerDocument.defaultView;
        if (!view) {
            return;
        }
        const guide = handle.ownerDocument.createElement('div');
        guide.className = 'vtable-resize-guide';
        guide.setAttribute('aria-hidden', 'true');
        const startSize = header.column.getSize();
        const guideX = handle.getBoundingClientRect().right - rootElement.getBoundingClientRect().left - rootElement.clientLeft + rootElement.scrollLeft;
        guide.style.top = `${rootElement.scrollTop}px`;
        guide.style.height = `${rootElement.clientHeight}px`;
        guide.style.transform = `translateX(${guideX}px)`;
        rootElement.append(guide);
        this._gesture = {handle, pointerId: event.pointerId, startX: event.clientX, startSize, guideX, size: startSize, guide, view};
        handle.setPointerCapture?.(event.pointerId);
        handle.addEventListener('lostpointercapture', this._cancel);
        view.addEventListener('pointermove', this._move, {passive: false});
        view.addEventListener('pointerup', this._up);
        view.addEventListener('pointercancel', this._cancel);
        view.addEventListener('keydown', this._cancelKey);
        view.addEventListener('blur', this._cancel);
        handle.focus();
    };

    private _keyDown = (event: KeyboardEvent) => {
        const {column} = this.props.context.header;
        const {key} = event;
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this._finish();
        const size = key === 'Home' ? column.columnDef.minSize ?? 20 : key === 'End' ? column.columnDef.maxSize ?? Number.MAX_SAFE_INTEGER : column.getSize() + (key === 'ArrowLeft' ? -10 : 10);
        this._commit(size);
    };

    render({context: {header: {column}, i18n}}: ResizeHandleProps<TData>) {
        return (
            <div
                className="vtable-resize-handle"
                role="separator"
                tabIndex={0}
                aria-orientation="vertical"
                aria-label={i18n('resizeColumn', [column.id])}
                aria-valuenow={column.getSize()}
                aria-valuemin={column.columnDef.minSize ?? 20}
                aria-valuemax={column.columnDef.maxSize ?? Number.MAX_SAFE_INTEGER}
                onBlur={this._cancel}
                onPointerDown={this._down}
                onKeyDown={this._keyDown}
            />
        );
    }
}

export const vtableColumnResizePlugin = {
    id: 'column-resize',
    decorateHeader<TData extends RowData>(context: VTableHeaderContext<TData>) {
        const {columnDef} = context.header.column;
        if ((columnDef.minSize ?? 20) >= (columnDef.maxSize ?? Number.MAX_SAFE_INTEGER)) {
            return;
        }
        return {extra: <ResizeHandle context={context} />};
    },
} satisfies VTablePlugin;
