import API from "../lib/API";
import type { ChannelId, PageId } from "../@types/common";
import { PageDTO } from "../models/dto/PageDTO";
import type { IPageRepo } from "./PageRepoType";
export declare class PageRepo implements IPageRepo {
    API: API;
    constructor();
    getNoteInfoList(pageId: PageId, channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    createPage(dto: PageDTO): Promise<import("axios").AxiosResponse<any, any>>;
    deletePage(pageList: any): Promise<import("axios").AxiosResponse<any, any>>;
    updatePage(dto: PageDTO): Promise<import("axios").AxiosResponse<any, any>>;
    createSharePage(pageList: any): Promise<import("axios").AxiosResponse<any, any>>;
    throwPage(pageList: any): Promise<import("axios").AxiosResponse<any, any>>;
    restorePage(pageList: any): Promise<import("axios").AxiosResponse<any, any>>;
    bookmarkPage(pageId: any): Promise<import("axios").AxiosResponse<any, any>>;
    unbookmarkPage(pageId: any): Promise<import("axios").AxiosResponse<any, any>>;
    getbookmarkList(channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    getRecentList(channelId: ChannelId, num: any): Promise<import("axios").AxiosResponse<any, any>>;
}
export declare const PageRepoImpl: PageRepo;
