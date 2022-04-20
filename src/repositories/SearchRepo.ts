import API from '~/lib/API';
import { ChannelId, prefix } from '~/@types/common';
import type { ISearchRepo } from '~/repositories/SearchRepoType';

export class SearchRepo implements ISearchRepo {
  API: API;

  constructor() {
    this.API = new API();
  }

  async getSearchList(searchKey, channelId: ChannelId) {
    try {
      return this.API.post(`${prefix}/noteSearch?action=List`, {
        dto: {
          note_channel_id: channelId,
          text: searchKey,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const SearchRepoImpl = new SearchRepo();
