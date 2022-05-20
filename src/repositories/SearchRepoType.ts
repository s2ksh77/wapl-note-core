import { ChannelId } from '~/@types/common';

export interface ISearchRepo {
  getSearchList(searchKey: string, channelId: ChannelId): Promise<DTO.SearchResponse>;
}
