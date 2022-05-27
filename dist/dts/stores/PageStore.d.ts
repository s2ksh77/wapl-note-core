import { ChannelId, ChapterId, PageId } from "../@types/common";
import { PageModel } from "../models";
import { IPageRepo } from "../repositories/PageRepoType";
export declare class PageStore {
    rootStore: any;
    repo: IPageRepo;
    isLongPressed: boolean;
    pageInfo: PageModel;
    constructor(rootStore: any);
    changeMode(): void;
    getBookmarkInChannel(channelId: ChannelId): Promise<DTO.PageList>;
    fetchPageInfoList(pageId: PageId, channelId: ChannelId): Promise<void>;
    getRecentList(channelId: ChannelId, num?: number): Promise<DTO.PageList>;
    renamePage(channelId: ChannelId, chapterId: ChapterId, dto: PageModel): Promise<DTO.PageInfo>;
    throwPage(channelId: ChannelId, dto: PageModel[]): Promise<DTO.PageInfo>;
    restorePage(channelId: ChannelId, dto: PageModel[]): Promise<DTO.PageInfo>;
    bookmarkPage(pageId: PageId): Promise<any>;
    unbookmarkPage(pageId: PageId): Promise<any>;
    savePage(channelId: ChannelId, chapterId: ChapterId, dto: PageModel, isNewPage: boolean): Promise<DTO.PageInfo>;
}
