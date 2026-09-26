import 'zui-dev';
import '@zui/button';
import '@zui/icons';
import '@zui/avatar/css';
import '@zui/list';
import {FileList} from './src/main';
import {FileInfo, FileList as FileListView} from './src/main-react';

let fileList: FileList | undefined;
let fileListWithIcons: FileList | undefined;
let fileListThumbnails: FileList | undefined;
let fileListCards: FileList | undefined;
let fileListCardsInline: FileList | undefined;
let fileListImages: FileList | undefined;

const itemsWithThumbnails = [
    {
        id: 79939,
        pathname: '202303/2917460608242575.pdf',
        title: '插件安装文档.pdf',
        thumbnail: '/favicon.svg',
        extension: 'pdf',
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
            {icon: 'eye', title: '查看', url: '#file?id=79942'},
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
        {icon: 'download', title: '下载', url: '#file?id=' + file.id},
        {icon: 'trash', title: '删除', url: '#delete?id=' + file.id},
    ];
};

onPageUpdate(() => {
    fileList?.destroy();
    fileListWithIcons?.destroy();
    fileListThumbnails?.destroy();
    fileListCards?.destroy();
    fileListCardsInline?.destroy();
    fileListImages?.destroy();
    fileList = new FileList('#fileList', {
        heading: {title: '附件', icon: 'paper-clip'},
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
    fileListThumbnails = new FileList('#fileListThumbnails', {
        items: fileList.options.items,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        thumbnail: true,
    });
    fileListCards = new FileList('#fileListCards', {
        items: itemsWithThumbnails,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        mode: 'cards',
        thumbnail: true,
        fileActions,
    });
    fileListCardsInline = new FileList('#fileListCardsInline', {
        items: itemsWithThumbnails,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        mode: 'cards-inline',
        thumbnail: true,
    });
    fileListImages = new FileList('#fileListImages', {
        items: [],
        fileIcon: FileListView.getFileIconMap(),
        thumbnail: true,
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
