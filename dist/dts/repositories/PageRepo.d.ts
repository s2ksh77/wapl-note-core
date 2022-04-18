import type { ChannelId, PageId } from "../@types/common";
import { PageDTO } from "../models/dto/PageDTO";
import type { IPageRepo } from "./PageRepoType";
export declare class PageRepo implements IPageRepo {
    prefix: string;
    getNoteInfoList(pageId: PageId, channelId: ChannelId): Promise<{
        data: {
            dto: any;
        };
    }>;
    createPage(dto: PageDTO): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    deletePage(pageList: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    updatePage(dto: PageDTO): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    createSharePage(pageList: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    throwPage(pageList: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    restorePage(pageList: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    bookmarkPage(pageId: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    unbookmarkPage(pageId: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    getbookmarkList(channelId: ChannelId): Promise<{
        data: {
            dto: any;
        };
    }>;
    getRecentList(channelId: ChannelId, num: any): Promise<{
        data: {
            dto: any;
        };
    }>;
}
export declare const PageRepoImpl: PageRepo;
