import { PageId, ChannelId } from "../@types/common";
import { PageDTO } from "../models/dto/PageDTO";
export interface IPageRepo {
    getNoteInfoList(pageId: PageId, channelId: ChannelId): any;
    createPage(dto: PageDTO): any;
    deletePage(pageList: any): any;
    updatePage(updateDTO: any): any;
    createSharePage(pageList: any): any;
    throwPage(pageList: any): any;
    restorePage(pageList: any): any;
    bookmarkPage(pageId: any): any;
    unbookmarkPage(pageId: any): any;
    getbookmarkList(channelId: ChannelId): any;
    getRecentList(channelId: ChannelId, num: any): any;
}
