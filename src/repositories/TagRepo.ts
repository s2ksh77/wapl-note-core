import { API } from '~/lib/external';
import type { ITagRepo } from '~/repositories/TagRepoType';

export class TagRepo implements ITagRepo {
  prefix = 'note-api';

  async createTag(tagList) {
    try {
      return API.post(`${this.prefix}/tag`, {
        dto: {
          tagList,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async deleteTag(targetList) {
    try {
      return API.post(`${this.prefix}/tag?action=Delete`, {
        dto: {
          tagList: targetList,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async updateTag(tagList) {
    try {
      return API.post(`${this.prefix}/tag?action=Update`, {
        dto: {
          tagList,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getNoteTagList(pageId) {
    return API.get(
      `${this.prefix}/tag?action=List&note_id=${pageId}&t=${new Date()
        .getTime()
        .toString()}`,
    );
  }

  async getAllSortedTagList(ChannelId) {
    return API.get(
      `${this.prefix}/tagSort?action=List&note_channel_id=${ChannelId}&t=${new Date()
        .getTime()
        .toString()}`,
    );
  }

  async getTagNoteList(tagId, userId, ChannelId) {
    return API.get(
      `${this.prefix}/tagnote?action=List&tag_id=${tagId}&USER_ID=${userId}
      &note_channel_id=${ChannelId}`,
    );
  }
}

export const TagRepoImpl = new TagRepo();
