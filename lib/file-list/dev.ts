import 'zui-dev';
import '@zui/button';
import '@zui/icons';
import {FileList} from './src/main';
import {FileList as FileListView} from './src/main-react';

let fileList: FileList | undefined;
let fileListWithIcons: FileList | undefined;
let fileListThumbnails: FileList | undefined;
let fileListCards: FileList | undefined;
let fileListCardsInline: FileList | undefined;
let fileListImages: FileList | undefined;

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
        fileActions: (file) => {
            return [
                {icon: 'download', title: '下载', url: '#file?id=' + file.id},
                {icon: 'trash', title: '删除', url: '#delete?id=' + file.id},
            ];
        },
        items: [
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
                title: '万维实例化需求课程回顾.pptx',
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
        ],
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
        items: fileList.options.items,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        mode: 'cards',
    });
    fileListCardsInline = new FileList('#fileListCardsInline', {
        items: fileList.options.items,
        fileUrl: '#file?id={id}',
        fileIcon: FileListView.getFileIconMap(),
        mode: 'cards-inline',
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
