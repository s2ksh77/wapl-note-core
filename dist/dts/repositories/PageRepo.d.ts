import API from "../lib/API";
import { ChannelId, ChapterId, PageId } from "../@types/common";
import { PageDTO } from "../models/dto/PageDTO";
import type { IPageRepo } from "./PageRepoType";
export declare class PageRepo implements IPageRepo {
    API: API;
    channelId: any;
    constructor();
    getAllPageList(channelId: ChannelId): Promise<DTO.PageList>;
    getRecentList(channelId: ChannelId, num: any): Promise<DTO.PageInfo>;
    getNoteInfoList(pageId: PageId, channelId: ChannelId): Promise<DTO.GEtPageInfoResponse>;
    createPage(channelId: ChannelId, chapterId: ChapterId, dto: PageDTO): Promise<any>;
    deletePage(channelId: ChannelId, chapterId: ChapterId, pageId: PageId): Promise<any>;
    updatePage(channelId: ChannelId, chapterId: ChapterId, action: string, dto: PageDTO): Promise<any>;
    createSharePage(channelId: ChannelId, dto: PageDTO): Promise<any>;
    updateRecyclePage(channelId: ChannelId, action: string, dto: PageDTO): Promise<any>;
    bookmarkPage(pageId: PageId): Promise<any>;
    unbookmarkPage(pageId: PageId): Promise<any>;
    getBookmarkInChannel(channelId: ChannelId): Promise<DTO.PageList>;
    getBookmarkInUser(): Promise<any>;
}
export declare const PageRepoImpl: PageRepo;
