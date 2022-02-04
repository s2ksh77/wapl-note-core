import { ChannelId } from '~/@types/common';

export interface ISearchRepo {
  getSearchList(searchKey, channelId: ChannelId);
}
