import { ChannelId } from "../@types/common";
export interface ISearchRepo {
    getSearchList(searchKey: any, channelId: ChannelId): any;
}
