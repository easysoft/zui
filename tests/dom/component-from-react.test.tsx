// @vitest-environment jsdom

import {Component as PreactComponent} from 'preact';
import {screen, within} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {ComponentFromReact} from '@zui/core/src/react/component-from-react';
import {HElement} from '@zui/core/src/react/components/h-element';
import {Component} from '@zui/core/src/component/component';
import {flushAnimationFrame} from '../setup/dom';

import type {RenderableProps} from 'preact';
import type {HElementProps} from '@zui/core/src/react/types';

type ViewProps = {
    label?: string;
    start?: number;
    onUnmount?: () => void;
};

type ViewState = {
    count: number;
};

class TestView extends PreactComponent<ViewProps, ViewState> {
    resetCalls = 0;

    constructor(props: ViewProps) {
        super(props);
        this.state = {count: props.start ?? 0};
    }

    echo(value: string) {
        return `${this.props.label}:${value}`;
    }

    resetState(props?: ViewProps) {
        this.resetCalls += 1;
        this.setState({count: props?.start ?? 0});
    }

    componentWillUnmount() {
        this.props.onUnmount?.();
    }

    render() {
        return <span className="test-view">{`${this.props.label}:${this.state.count}`}</span>;
    }
}

class TestWrapper extends ComponentFromReact<ViewProps, TestView> {
    static NAME = 'TestReactWrapper';

    static Component = TestView;

    wrapperEcho(value: string) {
        return `wrapper:${value}`;
    }
}

interface ReplaceViewProps extends HElementProps {
    label?: string;
    onChildUnmount?: () => void;
}

class ReplaceView extends HElement<ReplaceViewProps> {
    static NAME = 'ReplaceView';

    protected _getChildren(props: RenderableProps<ReplaceViewProps>) {
        return [props.label, props.onChildUnmount ? <TestView label="nested" onUnmount={props.onChildUnmount} /> : null];
    }
}

class ReplaceWrapper extends ComponentFromReact<ReplaceViewProps, ReplaceView> {
    static NAME = 'ReplaceWrapper';

    static Component = ReplaceView;

    static replace = 'section';
}

describe('ComponentFromReact', () => {
    it('renders after component initialization and exposes the Preact instance', async () => {
        const host = document.createElement('div');
        document.body.appendChild(host);
        const wrapper = new TestWrapper(host, {label: 'first', start: 2});

        expect(screen.queryByText('first:2')).not.toBeInTheDocument();
        await flushAnimationFrame();

        expect(screen.getByText('first:2')).toBeInTheDocument();
        expect(wrapper.$).toBeInstanceOf(TestView);
        expect(wrapper.executeCommand('echo', ['value'])).toBe('first:value');
        expect(wrapper.executeCommand('wrapperEcho', ['value'])).toBe('wrapper:value');
    });

    it('updates props and forwards reset requests to an existing view instance', async () => {
        const host = document.createElement('div');
        document.body.appendChild(host);
        const wrapper = new TestWrapper(host, {label: 'first', start: 2});
        await flushAnimationFrame();
        const view = wrapper.$!;
        view.setState({count: 9});

        wrapper.render({label: 'second', start: 4}, true);

        expect(wrapper.$).toBe(view);
        expect(view.resetCalls).toBe(1);
        expect(within(host).getByText('second:4')).toBeInTheDocument();
    });

    it('unmounts the Preact tree before destroying component metadata', async () => {
        const host = document.createElement('div');
        document.body.appendChild(host);
        const onUnmount = vi.fn();
        const wrapper = new TestWrapper(host, {label: 'mounted', onUnmount});
        await flushAnimationFrame();
        expect(within(host).getByText('mounted:0')).toBeInTheDocument();

        wrapper.destroy();

        expect(onUnmount).toHaveBeenCalledOnce();
        expect(within(host).queryByText('mounted:0')).not.toBeInTheDocument();
        expect(Component.ALL.get(host)).toBeUndefined();
        expect(wrapper.$).toBeNull();
    });

    it('preserves host attributes when an HElement view replaces a matching host', async () => {
        const parent = document.createElement('div');
        const host = document.createElement('section');
        host.className = 'original';
        host.dataset.source = 'markup';
        parent.appendChild(host);
        document.body.appendChild(parent);

        const wrapper = new ReplaceWrapper(host, {label: 'replacement'});
        await flushAnimationFrame();
        const replacement = within(parent).getByText('replacement').closest('section')!;

        expect(within(replacement).getByText('replacement')).toBeInTheDocument();
        expect(replacement.classList.contains('original')).toBe(true);
        expect(replacement.dataset.source).toBe('markup');
        expect(replacement.hasAttribute(`z-gid-${wrapper.$?.gid}`)).toBe(true);
    });

    it.each([undefined, true, false])('unmounts its own tree and preserves siblings ($replace=%s)', async (replace) => {
        const parent = document.createElement('div');
        const host = document.createElement('section');
        const siblingHost = document.createElement('section');
        const untouched = document.createElement('span');
        untouched.textContent = 'untouched';
        parent.append(host, siblingHost, untouched);
        document.body.append(parent);

        const onUnmount = vi.fn();
        const onChildUnmount = vi.fn();
        const onSiblingUnmount = vi.fn();
        const wrapper = new ReplaceWrapper(host, {
            $replace: replace,
            label: 'first',
            onUnmount,
            onChildUnmount,
        });
        const sibling = new ReplaceWrapper(siblingHost, {label: 'sibling', onUnmount: onSiblingUnmount});
        await flushAnimationFrame();
        const view = wrapper.$;
        wrapper.render({label: 'updated'});
        expect(wrapper.$).toBe(view);
        expect(within(parent).getByText('nested:0')).toBeInTheDocument();
        expect(onChildUnmount).not.toHaveBeenCalled();

        wrapper.destroy();
        wrapper.destroy();

        expect(onUnmount).toHaveBeenCalledOnce();
        expect(onChildUnmount).toHaveBeenCalledOnce();
        expect(wrapper.$).toBeNull();
        expect(Component.ALL.get(host)).toBeUndefined();
        expect(within(parent).queryByText('updated')).not.toBeInTheDocument();
        expect(within(parent).queryByText('nested:0')).not.toBeInTheDocument();
        expect(host.isConnected).toBe(replace === false);
        expect(onSiblingUnmount).not.toHaveBeenCalled();
        expect(untouched).toBeInTheDocument();
        sibling.render({label: 'sibling updated'});
        expect(within(parent).getByText('sibling updated')).toBeInTheDocument();

        sibling.destroy();
        expect(onSiblingUnmount).toHaveBeenCalledOnce();
        expect(untouched).toBeInTheDocument();
    });

    it('can render component HTML without creating a vanilla instance', () => {
        const html = TestWrapper.renderHTML({label: 'static', start: 3});

        expect(html).toContain('class="test-view"');
        expect(html).toContain('static:3');
        expect(Component.ALL.size).toBe(0);
    });
});
