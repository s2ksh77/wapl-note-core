import { ChannelId, PageId } from "../@types/common";
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
    getPageInfoList(pageId: PageId, channelId: ChannelId): Promise<PageModel>;
    throwPage(channelId: ChannelId, action: string, dto: PageModel): Promise<DTO.PageInfo>;
}
