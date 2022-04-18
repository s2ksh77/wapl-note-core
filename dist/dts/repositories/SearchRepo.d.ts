import { ChannelId } from "../@types/common";
import type { ISearchRepo } from "./SearchRepoType";
export declare class SearchRepo implements ISearchRepo {
    prefix: string;
    getSearchList(searchKey: any, channelId: ChannelId): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
}
export declare const SearchRepoImpl: SearchRepo;
