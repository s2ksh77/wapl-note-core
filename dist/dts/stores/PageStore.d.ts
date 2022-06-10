import { ChannelId, ChapterId, PageId } from "../@types/common";
import { PageModel } from "../models";
import { IPageRepo } from "../repositories/PageRepoType";
export declare class PageStore {
    rootStore: any;
    repo: IPageRepo;
    isLongPressed: boolean;
    currentId: string;
    pageInfo: PageModel;
    constructor(rootStore: any);
    changeMode(): void;
    getBookmarkInChannel(channelId: ChannelId): Promise<DTO.PageList>;
    fetchPageInfoList(pageId: PageId, channelId: ChannelId): Promise<void>;
    getRecentList(channelId: ChannelId, num?: number): Promise<DTO.PageList>;
    createPage(channelId: ChannelId, chapterId: ChapterId, dto: PageModel): Promise<void>;
    renamePage(channelId: ChannelId, chapterId: ChapterId, dto: PageModel): Promise<DTO.PageInfo>;
    movePage(channelId: ChannelId, chapterId: ChapterId, dto: PageModel): Promise<DTO.PageInfo>;
    throwPage(channelId: ChannelId, dto: PageModel[]): Promise<DTO.PageInfo>;
    restorePage(channelId: ChannelId, dto: PageModel[]): Promise<DTO.PageInfo>;
    bookmarkPage(pageId: PageId): Promise<any>;
    unbookmarkPage(pageId: PageId): Promise<any>;
    editPage(channelId: ChannelId, chapterId: ChapterId, dto: PageModel): Promise<DTO.PageInfo>;
    savePage(channelId: ChannelId, chapterId: ChapterId, dto: PageModel, isNewPage: boolean): Promise<DTO.PageInfo>;
}
