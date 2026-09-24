import {fireEvent, render} from '@testing-library/preact';
import {describe, expect, expectTypeOf, it, vi} from 'vitest';
import {Component, getReactComponent} from '@zui/core';
import {FileList, type FileInfo, type FileInfoLike, type FileListProps, type OriginFileInfo} from '@zui/file-list';
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
    it('types rendering callbacks with normalized metadata and preserves custom fields', () => {
        const file = new File(['hello'], 'Hello.txt');
        const fileUrl = (info: FileInfo) => `/files/${info.title.toLowerCase()}`;
        const options: FileListProps = {
            items: [{file}],
            fileUrl,
            fileActions: info => [{text: info.title.toUpperCase()}],
            onClickItem: ({item}) => expectTypeOf(item.title).toEqualTypeOf<string>(),
            onLoad: (items) => {
                expectTypeOf(items[0].title).toEqualTypeOf<string | undefined>();
                return items;
            },
        };
        const customOptions: FileListProps<OriginFileInfo & {projectId: number}> = {
            items: [{file, projectId: 42}],
            fileUrl: info => `/projects/${info.projectId}/${info.title}`,
            fileActions: info => [{text: `${info.projectId}: ${info.title.toUpperCase()}`}],
            getThumbnail: (info) => {
                expectTypeOf(info.title).toEqualTypeOf<string>();
                expectTypeOf(info.projectId).toEqualTypeOf<number>();
                return '';
            },
        };
        const {getByRole, rerender} = render(<FileListView {...options} />);
        expect(getByRole('link', {name: /Hello.txt/})).toHaveAttribute('href', '/files/hello.txt');
        expect(getByRole('button', {name: 'HELLO.TXT'})).toBeInTheDocument();
        rerender(<FileListView {...customOptions} />);
        expect(getByRole('link', {name: /Hello.txt/})).toHaveAttribute('href', '/projects/42/Hello.txt');
        expect(getByRole('button', {name: '42: HELLO.TXT'})).toBeInTheDocument();
    });

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

    it('gives repeated native files distinct item ids while sharing their preview URL', async () => {
        const createObjectURL = vi.fn(() => 'blob:shared-image');
        vi.stubGlobal('URL', class extends URL {
            static createObjectURL = createObjectURL;
            static revokeObjectURL = vi.fn();
        });
        const file = new File(['image'], 'shared.png', {type: 'image/png'});
        const first = Object.freeze({file, title: 'First'});
        const second = Object.freeze({file, title: 'Second'});
        const host = document.createElement('div');
        document.body.append(host);
        const onClickItem = vi.fn();
        const list = new FileList(host, {items: [first, second, first], onClickItem});
        await flushAnimationFrame();
        const keys = () => Array.from(host.querySelectorAll('[z-type="item"]'), item => item.getAttribute('z-key')!);
        const initialKeys = keys();

        expect(new Set(initialKeys).size).toBe(3);
        expect(list.$!.getItem(initialKeys[1])!.title).toBe('Second');
        fireEvent.click(host.querySelector(`[z-key="${initialKeys[1]}"] .item-title`)!);
        expect(onClickItem).toHaveBeenCalledWith(expect.objectContaining({item: expect.objectContaining({title: 'Second'})}));
        list.render({items: [second, first, first]});
        expect(keys()).toEqual([initialKeys[1], initialKeys[0], initialKeys[2]]);
        list.render({items: [first, second]});
        expect(keys()).toEqual(initialKeys.slice(0, 2));
        list.render({items: [{file, title: 'Inserted'}, second, first]});
        expect(keys().slice(1)).toEqual([initialKeys[1], initialKeys[0]]);
        expect(new Set(keys()).size).toBe(3);
        expect(createObjectURL).toHaveBeenCalledTimes(1);
        expect(first).toEqual({file, title: 'First'});

        list.render({items: [first, {...files[0], id: initialKeys[0]}]});
        const reservedKeys = keys();
        expect(reservedKeys[0]).not.toBe(initialKeys[0]);
        expect(reservedKeys[1]).toBe(initialKeys[0]);
        list.destroy();
        host.remove();
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

    it('shows native image thumbnails by default and restores configured icons when disabled', () => {
        const createObjectURL = vi.fn((file: File) => `blob:${file.name}`);
        const revokeObjectURL = vi.fn();
        vi.stubGlobal('URL', class extends URL {
            static createObjectURL = createObjectURL;
            static revokeObjectURL = revokeObjectURL;
        });
        const image = new File(['image'], 'photo.bin', {type: 'image/png'});
        const untypedImage = new File(['image'], 'photo.JPG');
        const items = [{file: image}, {file: untypedImage}, {file: new File(['text'], 'notes.txt')}, {...files[0], title: 'remote.png', extension: 'png'}];
        const {container, rerender} = render(<FileListView items={items} />);

        const thumbnails = container.querySelectorAll('img.item-icon');
        expect(thumbnails).toHaveLength(2);
        expect(thumbnails[0]).toHaveAttribute('src', 'blob:photo.bin');
        expect(thumbnails[0]).toHaveAttribute('alt', '');
        expect(thumbnails[1]).toHaveAttribute('src', 'blob:photo.JPG');
        expect(createObjectURL).toHaveBeenCalledTimes(2);
        expect(createObjectURL).toHaveBeenCalledWith(image);
        expect(createObjectURL).toHaveBeenCalledWith(untypedImage);

        rerender(<FileListView items={items} fileIcon="paper-clip" />);
        expect(container.querySelectorAll('img.item-icon')).toHaveLength(2);
        expect(container.querySelectorAll('.icon-paper-clip')).toHaveLength(2);
        expect(createObjectURL).toHaveBeenCalledTimes(2);

        rerender(<FileListView items={items} fileIcon="paper-clip" thumbnail={false} />);
        expect(container.querySelector('img')).toBeNull();
        expect(container.querySelectorAll('.icon-paper-clip')).toHaveLength(4);
        expect(revokeObjectURL.mock.calls).toEqual([['blob:photo.bin'], ['blob:photo.JPG']]);

        rerender(<FileListView items={items} fileIcon={false} thumbnail={false} />);
        expect(container.querySelector('.item-icon')).toBeNull();
        expect(createObjectURL).toHaveBeenCalledTimes(2);

        rerender(<FileListView items={items} />);
        expect(container.querySelectorAll('img.item-icon')).toHaveLength(2);
        expect(createObjectURL).toHaveBeenCalledTimes(4);
    });

    it('uses each file thumbnail URL without a native file and never revokes caller URLs', () => {
        const createObjectURL = vi.fn();
        const revokeObjectURL = vi.fn();
        vi.stubGlobal('URL', class extends URL {
            static createObjectURL = createObjectURL;
            static revokeObjectURL = revokeObjectURL;
        });
        const file = Object.freeze({...files[0], thumbnail: '/covers/guide.png'});
        const {container, rerender, unmount} = render(<FileListView items={[file]} />);

        expect(container.querySelector('img.item-icon')).toHaveAttribute('src', '/covers/guide.png');
        rerender(<FileListView items={[file]} thumbnail={false} fileIcon="paper-clip" />);
        expect(container.querySelector('img')).toBeNull();
        expect(container.querySelector('.icon-paper-clip')).not.toBeNull();

        rerender(<FileListView items={[{...file, thumbnail: 'blob:caller-cover'}]} />);
        expect(container.querySelector('img.item-icon')).toHaveAttribute('src', 'blob:caller-cover');
        rerender(<FileListView items={[{...file, thumbnail: ''}]} fileIcon="paper-clip" />);
        expect(container.querySelector('img')).toBeNull();
        expect(container.querySelector('.icon-paper-clip')).not.toBeNull();
        unmount();
        expect(createObjectURL).not.toHaveBeenCalled();
        expect(revokeObjectURL).not.toHaveBeenCalled();
    });

    it('falls back after thumbnail errors and retries when the source changes', () => {
        const file = {...files[0], thumbnail: '/covers/broken.png'};
        const {container, rerender} = render(<FileListView items={[file]} fileIcon="file-pdf" />);
        fireEvent.error(container.querySelector('img')!);
        expect(container.querySelector('img')).toBeNull();
        expect(container.querySelector('.item-icon.icon-file-pdf')).not.toBeNull();

        rerender(<FileListView items={[file]} fileIcon={() => 'paper-clip'} />);
        expect(container.querySelector('img')).toBeNull();
        expect(container.querySelector('.item-icon.icon-paper-clip')).not.toBeNull();

        rerender(<FileListView items={[{...file, thumbnail: '/covers/replaced.png'}]} />);
        expect(container.querySelector('img')).toHaveAttribute('src', '/covers/replaced.png');
        fireEvent.error(container.querySelector('img')!);
        expect(container.querySelector('.item-icon')).toBeNull();

        rerender(<FileListView items={[file]} fileIcon="file-pdf" />);
        expect(container.querySelector('img')).toHaveAttribute('src', '/covers/broken.png');
    });

    it('falls back for invalid native images and releases their preview URLs on removal', () => {
        const createObjectURL = vi.fn(() => 'blob:invalid-image');
        const revokeObjectURL = vi.fn();
        vi.stubGlobal('URL', class extends URL {
            static createObjectURL = createObjectURL;
            static revokeObjectURL = revokeObjectURL;
        });
        const items = [{file: new File(['invalid image'], 'invalid.png', {type: 'image/png'})}];
        const {container, rerender} = render(<FileListView items={items} fileIcon="file-image" />);
        fireEvent.error(container.querySelector('img')!);
        expect(container.querySelector('.icon-file-image')).not.toBeNull();
        rerender(<FileListView items={items} fileIcon="file-image" />);
        expect(container.querySelector('img')).toBeNull();
        expect(createObjectURL).toHaveBeenCalledTimes(1);
        rerender(<FileListView items={[]} />);
        expect(revokeObjectURL).toHaveBeenCalledExactlyOnceWith('blob:invalid-image');
    });

    it('resolves custom thumbnail URLs before file metadata and skips the callback when disabled', () => {
        const file = new File(['image'], 'local.png', {type: 'image/png'});
        const items = [{file, thumbnail: '/covers/local.png'}];
        const getThumbnail = vi.fn(() => '/covers/custom.png');
        const {container, rerender} = render(<FileListView items={items} getThumbnail={getThumbnail} />);

        expect(container.querySelector('img.item-icon')).toHaveAttribute('src', '/covers/custom.png');
        expect(getThumbnail).toHaveBeenCalledWith(expect.objectContaining({file, title: 'local.png', extension: 'png', id: expect.any(String)}));

        getThumbnail.mockReturnValue('');
        rerender(<FileListView items={items} getThumbnail={getThumbnail} />);
        expect(container.querySelector('img.item-icon')).toHaveAttribute('src', '/covers/local.png');

        getThumbnail.mockClear();
        rerender(<FileListView items={items} getThumbnail={getThumbnail} thumbnail={false} fileIcon="paper-clip" />);
        expect(container.querySelector('img')).toBeNull();
        expect(container.querySelector('.icon-paper-clip')).not.toBeNull();
        expect(getThumbnail).not.toHaveBeenCalled();
    });

    it('reuses thumbnail URLs and releases them on replacement, removal and vanilla destruction', async () => {
        let urlId = 0;
        const createObjectURL = vi.fn(() => `blob:preview-${++urlId}`);
        const revokeObjectURL = vi.fn();
        vi.stubGlobal('URL', class extends URL {
            static createObjectURL = createObjectURL;
            static revokeObjectURL = revokeObjectURL;
        });
        const first = new File(['first'], 'photo.png', {type: 'image/png'});
        const second = new File(['second'], 'photo.png', {type: 'image/png'});
        const host = document.createElement('div');
        document.body.append(host);
        const beforeDestroy = vi.fn();
        const list = new FileList(host, {items: [{id: 'image', file: first}], beforeDestroy});
        await flushAnimationFrame();

        expect(host.querySelector('img')).toHaveAttribute('src', 'blob:preview-1');
        list.render({items: [{id: 'image', file: first, title: 'Renamed'}]});
        expect(createObjectURL).toHaveBeenCalledTimes(1);
        expect(revokeObjectURL).not.toHaveBeenCalled();

        list.render({items: [{id: 'image', file: second}]});
        expect(host.querySelector('img')).toHaveAttribute('src', 'blob:preview-2');
        expect(revokeObjectURL.mock.calls).toEqual([['blob:preview-1']]);

        list.render({items: [{id: 'image', file: second, thumbnail: '/covers/photo.png'}]});
        expect(host.querySelector('img')).toHaveAttribute('src', '/covers/photo.png');
        expect(revokeObjectURL.mock.calls).toEqual([['blob:preview-1'], ['blob:preview-2']]);

        list.render({items: []});
        expect(host.querySelector('img')).toBeNull();
        expect(revokeObjectURL.mock.calls).toEqual([['blob:preview-1'], ['blob:preview-2']]);

        list.render({items: [{file: first}]});
        expect(host.querySelector('img')).toHaveAttribute('src', 'blob:preview-3');
        list.destroy();
        expect(revokeObjectURL.mock.calls).toEqual([['blob:preview-1'], ['blob:preview-2'], ['blob:preview-3']]);
        expect(beforeDestroy).toHaveBeenCalledTimes(1);
        expect(host.querySelector('img')).toBeNull();
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
