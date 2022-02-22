import type { ChannelId, PageId } from "../@types/common";
import { PageDTO } from "../models/dto/PageDTO";
import type { IPageRepo } from "./PageRepoType";
export declare class PageRepo implements IPageRepo {
    prefix: string;
    getNoteInfoList(pageId: PageId, channelId: ChannelId): Promise<any>;
    createPage(dto: PageDTO): Promise<any>;
    deletePage(pageList: any): Promise<any>;
    updatePage(dto: PageDTO): Promise<any>;
    createSharePage(pageList: any): Promise<any>;
    throwPage(pageList: any): Promise<any>;
    restorePage(pageList: any): Promise<any>;
    bookmarkPage(pageId: any): Promise<any>;
    unbookmarkPage(pageId: any): Promise<any>;
    getbookmarkList(channelId: ChannelId): Promise<any>;
    getRecentList(channelId: ChannelId, num: any): Promise<any>;
}
export declare const PageRepoImpl: PageRepo;
