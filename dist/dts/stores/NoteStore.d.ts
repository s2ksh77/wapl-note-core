import type { ChannelId } from "../@types/common";
import { ISearchRepo } from "../repositories/SearchRepoType";
export declare class NoteStore {
    rootStore: any;
    searchRepo: ISearchRepo;
    headerTitle: string;
    marker: any;
    searchKeyword: string;
    constructor(rootStore: any);
    getSearchList(searchKey: string, channelId: ChannelId): Promise<DTO.SearchResponse>;
    setMarker(el: HTMLElement): void;
    mark(): void;
    unmark(option: any): void;
    setSearchKeyword(keyword: string): void;
    endSearching(): void;
}
