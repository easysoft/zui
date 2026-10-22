import type {IconType} from '@zui/core';

// Component-owned line drawings; names remain compatible with getFileIconMap().
const details: Record<string, string> = {
    file: '',
    'file-o': '',
    'file-image': 'M6 17l3-4 3 3 2-2 4 3M8 10h.01',
    'file-audio': 'M10 11v7M10 11l6-1v7M7 18h3M13 17h3',
    'file-video': 'M6 12h7v6H6zM13 14l4-2v6l-4-2',
    'file-archive': 'M11 9h2m-2 3h2m-2 3h2m-2 3h2',
    'file-code': 'M9 12l-3 3 3 3m6-6 3 3-3 3m-2-7-2 8',
    markdown: 'M6 18v-6l3 3 3-3v6m3-6v6m-2-2 2 2 2-2',
    'file-pdf': 'M6 18v-6h3v3H6m6 3v-6h2l1 1v4l-1 1zm6 0v-6h2m-2 3h2',
    'file-word': 'M6 12l2 6 3-5 3 5 2-6',
    'file-excel': 'M8 12l7 6m0-6-7 6',
    'file-powerpoint': 'M9 18v-6h5l1 1v2l-1 1H9',
    'file-text': 'M7 12h10M7 15h10M7 18h7',
};

/** Resolve only this library's built-in file names; custom icons pass through. */
export function resolveFileIcon(icon: IconType | null): IconType | null {
    if (typeof icon !== 'string') return icon;
    const name = icon.replace(/^icon-/, '');
    if (!Object.hasOwn(details, name)) return icon;
    return (
        <svg className={`file-icon file-icon-${name}`} viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            <path d="M14 3H5v18h14V8zM14 3v5h5" />
            {details[name] ? <path d={details[name]} /> : null}
        </svg>
    );
}
