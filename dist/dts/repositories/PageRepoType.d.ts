import { PageId, ChannelId, ChapterId } from "../@types/common";
import { PageDTO } from "../models/dto/PageDTO";
export declare type PageResponseArray = {
    success: boolean;
    response?: PageDTO[] | null;
    error?: string | null;
};
export declare type PageResponseObject = {
    success: boolean;
    response?: PageDTO | null;
    error?: string | null;
};
export interface IPageRepo {
    getAllPageList(channelId: ChannelId): Promise<DTO.GetPageListResponse>;
    getRecentList(channelId: ChannelId, num: any): Promise<DTO.GetPageListResponse>;
    getNoteInfoList(pageId: PageId, channelId: ChannelId): Promise<DTO.GEtPageInfoResponse>;
    createPage(channelId: ChannelId, chapterId: ChapterId, dto: PageDTO): any;
    deletePage(channelId: ChannelId, chapterId: ChapterId, pageId: PageId): any;
    updatePage(channelId: ChannelId, chapterId: ChapterId, action: string, dto: PageDTO): any;
    createSharePage(channelId: ChannelId, dto: PageDTO): any;
    updateRecyclePage(channelId: ChannelId, action: string, dto: PageDTO): any;
    bookmarkPage(pageId: PageId): any;
    unbookmarkPage(pageId: PageId): any;
    getBookmarkInChannel(channelId: ChannelId): any;
    getBookmarkInUser(): any;
}
