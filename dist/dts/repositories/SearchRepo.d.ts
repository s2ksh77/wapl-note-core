import API from "../lib/API";
import { ChannelId } from "../@types/common";
import type { ISearchRepo } from "./SearchRepoType";
export declare class SearchRepo implements ISearchRepo {
    API: API;
    constructor();
    getSearchList(searchKey: string, channelId: ChannelId): Promise<DTO.SearchResponse>;
}
export declare const SearchRepoImpl: SearchRepo;
