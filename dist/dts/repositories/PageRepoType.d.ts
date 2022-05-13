import { PageId, ChannelId, ChapterId } from "../@types/common";
import { PageModel } from "../models";
import { PageDTO } from "../models/dto/PageDTO";
import { Action } from "../@types/page";
export declare type PageResponseArray = {
    success: boolean;
    response?: PageModel[] | null;
    error?: string | null;
};
export declare type PageResponseObject = {
    success: boolean;
    response?: PageModel | null;
    error?: string | null;
};
export interface IPageRepo {
    getAllPageList(channelId: ChannelId): Promise<DTO.PageList>;
    getRecentList(channelId: ChannelId, num: any): Promise<DTO.PageList>;
    getPageInfoList(pageId: PageId, channelId: ChannelId): Promise<DTO.PageInfo>;
    createPage(channelId: ChannelId, chapterId: ChapterId, dto: PageDTO): any;
    deletePage(channelId: ChannelId, chapterId: ChapterId, pageId: PageId): any;
    updatePage(channelId: ChannelId, chapterId: ChapterId, action: string, dto: PageDTO, isNewPage: boolean): any;
    createSharePage(channelId: ChannelId, dto: PageDTO): any;
    updateRecyclePage(channelId: ChannelId, action: Action, dto: PageModel): any;
    bookmarkPage(pageId: PageId): any;
    unbookmarkPage(pageId: PageId): any;
    getBookmarkInChannel(channelId: ChannelId): Promise<DTO.PageList>;
    getBookmarkInUser(): any;
}
