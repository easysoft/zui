import 'zui-dev';
import '@zui/button';
import '@zui/css-icons';
import '@zui/avatar/css';
import '@zui/list';
import {FileList} from './src/main';
import {FileInfo, FileList as FileListView} from './src/main-react';

let fileList: FileList | undefined;
let fileListWithIcons: FileList | undefined;
let fileListTags: FileList | undefined;
let fileListThumbnails: FileList | undefined;
let fileListMultiline: FileList | undefined;
let fileListCards: FileList | undefined;
let fileListCardsInline: FileList | undefined;
let fileListGrid: FileList | undefined;
let fileListImages: FileList | undefined;

const itemsWithThumbnails = [
    {
        id: 79939,
        pathname: '202303/2917460608242575.pdf',
        title: '插件安装文档.pdf',
        thumbnail: '/favicon.svg',
        tags: '文档',
        size: 38594,
        addedBy: 'sunhao',
        addedDate: '2023-03-29 00:00:00',
        downloads: 0,
    },
    {
        id: 79940,
        pathname: '202303/2917460608242575.pptx',
        title: '万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾万维实例化需求课程回顾.pptx',
        extension: 'pptx',
        tags: ['课程', '资料'],
        size: 6032614,
        addedBy: 'sunhao',
        addedDate: '2023-03-29 00:00:00',
        downloads: 0,
    },
    {
        id: 79941,
        pathname: '202303/2917460608242575.md',
        title: '测试文档.md',
        extension: 'md',
        size: 8977,
        addedBy: 'sunhao',
        addedDate: '2023-03-29 00:00:00',
        downloads: 0,
    },
    {
        id: 79942,
        pathname: '/lib/avatar/assets/avatar.png',
        thumbnail: '/lib/avatar/assets/avatar.png',
        title: 'avatar.png',
        extension: 'png',
        size: 1024,
        addedBy: 'sunhao',
        addedDate: '2023-03-29 00:00:00',
        downloads: 0,
        actions: [
            {icon: {className: 'example-icon example-icon-eye', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2012c5-10%2015-10%2020%200-5%2010-15%2010-20%200zM9%2012a3%203%200%201%200%206%200%203%203%200%201%200-6%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}, title: '查看', url: '#file?id=79942'},
        ],
    },
    {
        id: 79943,
        pathname: '/lib/avatar/assets/avatar-1.png',
        thumbnail: '/lib/avatar/assets/avatar-1.png',
        title: 'avatar-1.png',
        extension: 'png',
        size: 1024,
        addedBy: 'sunhao',
        addedDate: '2023-03-29 00:00:00',
        downloads: 0,
    },
    {
        id: 79944,
        pathname: '/lib/avatar/assets/avatar-2.png',
        thumbnail: '/lib/avatar/assets/avatar-2.png',
        title: 'avatar-2.png',
        extension: 'png',
        size: 1024,
        addedBy: 'sunhao',
        addedDate: '2023-03-29 00:00:00',
        downloads: 0,
    },
];

const fileActions = (file: FileInfo) => {
    return [
        {icon: {className: 'i-download', 'aria-hidden': true}, title: '下载', url: '#file?id=' + file.id},
        {icon: {className: 'i-trash', 'aria-hidden': true}, title: '删除', url: '#delete?id=' + file.id},
    ];
};

onPageUpdate(() => {
    fileList?.destroy();
    fileListWithIcons?.destroy();
    fileListTags?.destroy();
    fileListThumbnails?.destroy();
    fileListMultiline?.destroy();
    fileListCards?.destroy();
    fileListCardsInline?.destroy();
    fileListGrid?.destroy();
    fileListImages?.destroy();
    fileList = new FileList('#fileList', {
        heading: {title: '附件', icon: {className: 'example-icon example-icon-paper-clip', 'aria-hidden': true, style: {display: 'inline-block', width: '1em', height: '1em', backgroundColor: 'currentColor', mask: 'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%2013l7-7c4-4%209%201%205%205L9%2022c-6%206-13-2-7-8L13%203m-8%2013%2010-10%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat'}}},
        fileUrl: '#file?id={id}',
        hoverItemActions: true,
        fileActions,
        items: itemsWithThumbnails,
    });
    fileListWithIcons = new FileList('#fileListWithIcons', {
        items: fileList.options.items,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
    });
    fileListTags = new FileList('#fileListTags', {
        heading: '共享附件',
        items: itemsWithThumbnails.slice(0, 3),
        renderTag: {
            文档: {tag: 'span', className: 'label primary-pale', children: '使用文档'},
            课程: {tag: 'strong', children: '课程资料'},
        },
    });
    fileListThumbnails = new FileList('#fileListThumbnails', {
        items: fileList.options.items,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        thumbnail: true,
        thumbnailPreview: true,
    });
    fileListMultiline = new FileList('#fileListMultiline', {
        items: itemsWithThumbnails,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        thumbnail: true,
        multiline: true,
        fileActions,
    });
    fileListCards = new FileList('#fileListCards', {
        items: itemsWithThumbnails,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        mode: 'cards',
        thumbnail: true,
        thumbnailPreview: {maxWidth: 320, maxHeight: 240, placement: 'right-start'},
        fileActions,
    });
    fileListCardsInline = new FileList('#fileListCardsInline', {
        items: itemsWithThumbnails,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        mode: 'cards-inline',
        thumbnail: true,
        thumbnailPreview: true,
    });
    fileListGrid = new FileList('#fileListGrid', {
        items: itemsWithThumbnails,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        mode: 'grid',
        thumbnail: true,
        fileActions,
        multiline: true,
        hoverItemActions: true,
    });
    fileListImages = new FileList('#fileListImages', {
        items: [],
        fileIcon: FileListView.getFileIconMap(),
        thumbnail: true,
        thumbnailPreview: true,
    });
    const imageInput = document.querySelector<HTMLInputElement>('#fileListImageInput');
    const thumbnailToggle = document.querySelector<HTMLInputElement>('#fileListThumbnailToggle');
    imageInput?.addEventListener('change', () => {
        fileListImages?.render({items: Array.from(imageInput.files || [], file => ({file}))});
    });
    thumbnailToggle?.addEventListener('change', () => {
        fileListImages?.render({thumbnail: thumbnailToggle.checked});
    });
});
