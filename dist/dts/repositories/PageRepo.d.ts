import API from "../lib/API";
import { ChannelId, ChapterId, PageId } from "../@types/common";
import { PageDTO } from "../models/dto/PageDTO";
import type { IPageRepo } from "./PageRepoType";
export declare class PageRepo implements IPageRepo {
    API: API;
    channelId: any;
    constructor();
    getAllPageList(channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    getRecentList(channelId: ChannelId, num: any): Promise<import("axios").AxiosResponse<any, any>>;
    getNoteInfoList(pageId: PageId, channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    createPage(channelId: ChannelId, chapterId: ChapterId, dto: PageDTO): Promise<import("axios").AxiosResponse<any, any>>;
    deletePage(channelId: ChannelId, chapterId: ChapterId, pageId: PageId): Promise<import("axios").AxiosResponse<any, any>>;
    updatePage(channelId: ChannelId, chapterId: ChapterId, action: string, dto: PageDTO): Promise<import("axios").AxiosResponse<any, any>>;
    createSharePage(channelId: ChannelId, dto: PageDTO): Promise<import("axios").AxiosResponse<any, any>>;
    updateRecyclePage(channelId: ChannelId, action: string, dto: PageDTO): Promise<import("axios").AxiosResponse<any, any>>;
    bookmarkPage(pageId: PageId): Promise<import("axios").AxiosResponse<any, any>>;
    unbookmarkPage(pageId: PageId): Promise<import("axios").AxiosResponse<any, any>>;
    getBookmarkInChannel(channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    getBookmarkInUser(): Promise<import("axios").AxiosResponse<any, any>>;
}
export declare const PageRepoImpl: PageRepo;
