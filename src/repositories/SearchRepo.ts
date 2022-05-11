/* eslint-disable consistent-return */
import API from '~/lib/API';
import { baseUrl, ChannelId, prefix } from '~/@types/common';
import type { ISearchRepo } from '~/repositories/SearchRepoType';

export class SearchRepo implements ISearchRepo {
  API: API;

  constructor() {
    this.API = new API();
  }

  async getSearchList(searchKey: string, channelId: ChannelId): Promise<void> {
    try {
      const res = await this.API.get(
        `${baseUrl}${prefix}/app/${channelId}/search?text=${searchKey}`,
      );
      if (res.success) return res.response;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const SearchRepoImpl = new SearchRepo();
