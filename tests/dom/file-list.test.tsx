import {fireEvent, render} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {Component, getReactComponent} from '@zui/core';
import {FileList, type FileInfo, type FileInfoLike, type OriginFileInfo} from '@zui/file-list';
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
        expect(getByText('2.00KB')).toBeInTheDocument();
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
        expect(fileIcon.mock.calls[0][0]).toBe(files[0]);
        expect(container.querySelector('.icon-file-text')).not.toBeNull();
        expect(getByRole('link', {name: /Guide.pdf/})).toHaveAttribute('href', '/preview/1');

        rerender(<FileListView items={files} fileIcon={false} />);
        expect(container.querySelector('.item-icon')).toBeNull();
    });

    it('derives native file metadata and passes the original file to callbacks', () => {
        const file = new File(['a'.repeat(2048)], 'Guide.PDF', {type: 'application/pdf'});
        const source: OriginFileInfo = Object.freeze({file});
        const fileIcon = vi.fn((info: FileInfo) => FileListView.getFileIconMap()[info.extension]);
        const fileUrl = vi.fn((info: FileInfoLike) => `/preview/${info.id}`);
        const onOpen = vi.fn();
        const fileActions = vi.fn(() => [{text: 'Open', onClick: onOpen}]);
        const onClickItem = vi.fn();
        const {container, getByText, getByRole} = render(
            <FileListView items={[source]} fileIcon={fileIcon} fileUrl={fileUrl} fileActions={fileActions} onClickItem={onClickItem} />,
        );

        expect(getByText('2.00KB')).toBeInTheDocument();
        expect(container.querySelector('.icon-file-pdf')).not.toBeNull();
        const info = fileIcon.mock.calls[0][0];
        expect(info).toEqual({
            file,
            id: expect.any(String),
            title: 'Guide.PDF',
            extension: 'pdf',
            size: 2048,
            pathname: '',
            addedBy: '',
            addedDate: '',
        });
        expect(fileUrl).toHaveBeenCalledWith(info);
        expect(fileActions).toHaveBeenCalledWith(info);
        expect(getByRole('link', {name: /Guide.PDF/})).toHaveAttribute('href', `/preview/${info.id}`);
        fireEvent.click(getByText('2.00KB'));
        expect(onClickItem).toHaveBeenCalledWith(expect.objectContaining({item: expect.objectContaining(info)}));
        expect(onClickItem.mock.calls[0][0].item.file).toBe(file);
        fireEvent.click(getByRole('button', {name: 'Open'}));
        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(source).toEqual({file});
    });

    it('preserves explicit metadata, string and zero ids, and handles extensionless files', () => {
        const file = new File(['content'], 'Original.TXT');
        Object.defineProperty(file, 'webkitRelativePath', {value: 'folder/Original.TXT'});
        const override: OriginFileInfo = {file, id: 0, title: 'Renamed', extension: 'pdf', size: 0, pathname: 'uploads/custom', addedBy: 'user', addedDate: '2026-09-24'};
        const fileIcon = vi.fn(() => 'file');
        const {container, getByRole, getByText} = render(
            <FileListView
                items={[override, {...files[0], id: 'remote-file'}, {file}, {file: new File([], 'README')}, {file: new File([], '.gitignore')}]}
                fileUrl="/files/{id}/{pathname}"
                fileIcon={fileIcon}
            />,
        );

        expect(fileIcon).toHaveBeenCalledWith(override);
        expect(fileIcon).toHaveBeenCalledWith(expect.objectContaining({title: 'Original.TXT', extension: 'txt', pathname: 'folder/Original.TXT'}));
        expect(fileIcon).toHaveBeenCalledWith(expect.objectContaining({title: 'README', extension: '', size: 0}));
        expect(fileIcon).toHaveBeenCalledWith(expect.objectContaining({title: '.gitignore', extension: ''}));
        expect(getByRole('link', {name: /Renamed/})).toHaveAttribute('href', '/files/0/uploads/custom');
        expect(container.querySelector('[z-key="0"] .item-subtitle')).toHaveTextContent('0B');
        expect(container.querySelector('[z-key="remote-file"]')).not.toBeNull();
        expect(getByText('Guide.pdf')).toBeInTheDocument();
    });

    it('keeps generated ids unique and stable across updates and reordering', () => {
        const first = new File(['same'], 'Same.txt');
        const second = new File(['same'], 'Same.txt');
        const withoutId = Object.freeze({...files[0], id: undefined});
        const emptyId = Object.freeze({...files[0], id: '', title: 'Empty id'});
        const {container, rerender} = render(<FileListView items={[{file: first}, {file: second}, withoutId, emptyId]} />);
        const keys = () => Array.from(container.querySelectorAll('[z-type="item"]'), item => item.getAttribute('z-key'));
        const initialKeys = keys();

        expect(new Set(initialKeys).size).toBe(4);
        initialKeys.forEach(key => expect(key).toMatch(/^file-/));
        rerender(<FileListView mode="cards" items={[emptyId, withoutId, {file: second, title: 'Updated'}, {file: first}]} />);
        expect(keys()).toEqual(initialKeys.toReversed());
        expect(container.querySelectorAll('.file-list-card')).toHaveLength(4);
        expect(container.querySelector(`[z-key="${initialKeys[1]}"]`)).toHaveTextContent('Updated');
        rerender(<FileListView items={[{file: second}]} />);
        expect(keys()).toEqual([initialKeys[1]]);
        expect(withoutId.id).toBeUndefined();
        expect(emptyId.id).toBe('');
    });

    it('normalizes native files returned by an asynchronous items source', async () => {
        const file = new File(['content'], 'Loaded.txt');
        const load = vi.fn(async () => [{file}]);
        const {getByText} = render(<FileListView items={load} />);
        await flushAnimationFrame();

        expect(load).toHaveBeenCalledTimes(1);
        expect(getByText('Loaded.txt')).toBeInTheDocument();
        expect(getByText('7.00B')).toBeInTheDocument();
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
        const file = new File(['content'], 'Local.txt');
        list.render({items: [{file}]});
        expect(host.textContent).toContain('Local.txt');
        expect(list.$?.getItems()[0]).toMatchObject({file, title: 'Local.txt', extension: 'txt', size: 7});
        list.render({items: []});
        expect(host.textContent).not.toContain('Local.txt');

        list.destroy();
        expect(host.querySelector('.file-list')).toBeNull();
        expect(Component.ALL.get(host)).toBeUndefined();
    });
});
