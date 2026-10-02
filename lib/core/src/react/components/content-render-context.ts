import {createContext} from 'preact';
import type {ComponentChildren, ComponentType} from 'preact';
import type {CustomContentType, LazyContentProps} from '../types';

/** Host-owned rules shared by the generic content renderers. */
export interface ContentRenderPolicy {
    resolveContent?: (content: CustomContentType) => CustomContentType;
    prepareElement?: (component: ComponentType | string, props: Record<string, unknown>) => {component: ComponentType | string; props: Record<string, unknown>};
    prepareHTML?: (html: string, executeScript: boolean, source: 'html' | 'lazy') => {html: string; executeScript: boolean};
    prepareLazy?: (props: LazyContentProps) => LazyContentProps;
    renderError?: (error: unknown) => ComponentChildren;
}

export const ContentRenderContext = createContext<ContentRenderPolicy | undefined>(undefined);

// Kept out of the public barrel: JSON cannot create a provider or forge this identity.
export const ContentSourceContext = createContext<'html' | 'lazy'>('html');
export const preparedHTML = new WeakSet<object>();

export function renderContentError(policy: ContentRenderPolicy | undefined, error: unknown): ComponentChildren {
    if (policy?.renderError) {
        return policy.renderError(error);
    }
    throw error;
}
