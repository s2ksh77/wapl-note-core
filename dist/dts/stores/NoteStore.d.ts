import type { ChannelId } from "../@types/common";
import { ISearchRepo } from "../repositories/SearchRepoType";
export declare class NoteStore {
    rootStore: any;
    searchRepo: ISearchRepo;
    headerTitle: string;
    constructor(rootStore: any);
    getSearchList(searchKey: string, channelId: ChannelId): Promise<void>;
}
