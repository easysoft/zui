export type SidebarID = 'guide' | 'basic' | 'utilities' | 'lib' | 'icons' | 'js' | 'themes' | 'customize';

export type LibSidebarSection = 'content' | 'form' | 'component';

export interface LibPageItem {
    text: string;
    link: string;
}

export interface LibDocsSidebar<T = SidebarID> {
    sidebar: T,
    section?: LibSidebarSection | string,
    items?: LibPageItem[]
}

export type LibDocs = LibDocsSidebar | LibDocsSidebar[];
