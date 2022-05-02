import { ChannelId } from "../@types/common";
import { IPageRepo } from "../repositories/PageRepoType";
export declare class PageStore {
    rootStore: any;
    repo: IPageRepo;
    isLongPressed: boolean;
    constructor(rootStore: any);
    changeMode(): void;
    getBookmarkInChannel(channelId: ChannelId): Promise<DTO.PageList>;
}
