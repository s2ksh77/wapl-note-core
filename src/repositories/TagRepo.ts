import API from '~/lib/API';
import type { ITagRepo } from '~/repositories/TagRepoType';
import { prefix } from '~/@types/common';

export class TagRepo implements ITagRepo {
  API: API;

  constructor() {
    this.API = new API();
  }

  async createTag(tagList) {
    try {
      return this.API.post(`${prefix}/tag`, {
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
      return this.API.post(`${prefix}/tag?action=Delete`, {
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
      return this.API.post(`${prefix}/tag?action=Update`, {
        dto: {
          tagList,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getNoteTagList(pageId) {
    return this.API.get(
      `${prefix}/tag?action=List&note_id=${pageId}&t=${new Date().getTime().toString()}`,
    );
  }

  async getAllSortedTagList(ChannelId) {
    return this.API.get(
      `${prefix}/tagSort?action=List&note_channel_id=${ChannelId}&t=${new Date()
        .getTime()
        .toString()}`,
    );
  }

  async getTagNoteList(tagId, userId, ChannelId) {
    return this.API.get(
      `${prefix}/tagnote?action=List&tag_id=${tagId}&USER_ID=${userId}
      &note_channel_id=${ChannelId}`,
    );
  }
}

export const TagRepoImpl = new TagRepo();
