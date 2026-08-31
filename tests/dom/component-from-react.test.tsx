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
}

class ReplaceView extends HElement<ReplaceViewProps> {
    static NAME = 'ReplaceView';

    protected _getChildren(props: RenderableProps<ReplaceViewProps>) {
        return props.label;
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

    it('can render component HTML without creating a vanilla instance', () => {
        const html = TestWrapper.renderHTML({label: 'static', start: 3});

        expect(html).toContain('class="test-view"');
        expect(html).toContain('static:3');
        expect(Component.ALL.size).toBe(0);
    });
});
