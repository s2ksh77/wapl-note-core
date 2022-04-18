import { API } from '~/lib/external';
import { ChannelId } from '~/@types/common';
import type { ISearchRepo } from '~/repositories/SearchRepoType';

export class SearchRepo implements ISearchRepo {
  prefix = 'note-api';

  async getSearchList(searchKey, channelId: ChannelId) {
    try {
      return API.post(`${this.prefix}/noteSearch?action=List`, {
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
