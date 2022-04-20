import { PageId, ChannelId, ChapterId } from "../@types/common";
import { PageDTO } from "../models/dto/PageDTO";
export interface IPageRepo {
    getAllPageList(channelId: ChannelId): any;
    getRecentList(channelId: ChannelId, num: any): any;
    getNoteInfoList(pageId: PageId, channelId: ChannelId): any;
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
