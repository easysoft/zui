import {fireEvent, render} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {Component, getReactComponent} from '@zui/core';
import {FileList, type FileInfo} from '@zui/file-list';
import {FileList as FileListView} from '@zui/file-list/react';
import {flushAnimationFrame} from '../setup/dom';

const files: FileInfo[] = [{
    id: 1,
    title: 'Guide.pdf',
    extension: 'pdf',
    size: 2048,
    pathname: 'guide.pdf',
    addedBy: 'user',
    addedDate: '2026-09-24',
}];

describe('FileList', () => {
    it('renders file links, sizes, headings and actions without requiring file icons', () => {
        const onDownload = vi.fn();
        const {container, getByText, getByRole} = render(
            <FileListView
                items={files}
                heading={{title: 'Attachments'}}
                fileUrl="/files/{id}"
                fileActions={() => [{text: 'Download', onClick: onDownload}]}
            />,
        );

        expect(getByText('Attachments')).toBeInTheDocument();
        expect(getByText('(2.00KB)')).toBeInTheDocument();
        expect(getByRole('link', {name: /Guide.pdf/})).toHaveAttribute('href', '/files/1');
        expect(container.querySelector('.item-icon')).toBeNull();
        fireEvent.click(getByRole('button', {name: 'Download'}));
        expect(onDownload).toHaveBeenCalledTimes(1);
    });

    it('accepts optional icon names, extension maps and callbacks', () => {
        const {container, rerender, getByRole} = render(<FileListView items={files} fileIcon="paper-clip" />);
        expect(container.querySelector('.icon-paper-clip')).not.toBeNull();

        rerender(<FileListView items={files} fileIcon={{pdf: 'file-pdf'}} />);
        expect(container.querySelector('.icon-file-pdf')).not.toBeNull();

        rerender(<FileListView items={files} fileIcon={{}} />);
        expect(container.querySelector('.icon-file')).not.toBeNull();

        const fileIcon = vi.fn(file => file.extension === 'pdf' ? 'file-text' : 'file');
        rerender(<FileListView items={files} fileIcon={fileIcon} fileUrl={file => `/preview/${file.id}`} fileSizeFormat="{size}" />);
        expect(fileIcon).toHaveBeenCalledWith(files[0]);
        expect(container.querySelector('.icon-file-text')).not.toBeNull();
        expect(getByRole('link', {name: /Guide.pdf/})).toHaveAttribute('href', '/preview/1');

        rerender(<FileListView items={files} fileIcon={false} />);
        expect(container.querySelector('.item-icon')).toBeNull();
    });

    it('registers both component forms and supports vanilla updates and cleanup', async () => {
        expect(Component.map.get('filelist')).toBe(FileList);
        expect(getReactComponent('FileList')).toBe(FileListView);
        const host = document.createElement('div');
        document.body.appendChild(host);
        const list = new FileList(host, {items: files});
        await flushAnimationFrame();

        expect(host.textContent).toContain('Guide.pdf');
        expect(host.querySelector('.file-list')).not.toBeNull();
        list.render({items: []});
        expect(host.textContent).not.toContain('Guide.pdf');

        list.destroy();
        expect(host.querySelector('.file-list')).toBeNull();
        expect(Component.ALL.get(host)).toBeUndefined();
    });
});
