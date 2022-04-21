import API from '~/lib/API';
import type { ITagRepo } from '~/repositories/TagRepoType';
import { baseUrl, ChannelId, PageId, prefix } from '~/@types/common';
import { TagDTO } from '~/models/dto/TagDTO';

export class TagRepo implements ITagRepo {
  API: API;

  constructor() {
    this.API = new API();
  }

  async getAllTagList(channelId: ChannelId) {
    return this.API.get(`${baseUrl}${prefix}/app/${channelId}/tag`);
  }

  async getTagList(pageId: PageId) {
    return this.API.get(`${baseUrl}${prefix}/page/${pageId}/tag`);
  }

  async createTag(pageId: PageId, dto: TagDTO[]) {
    try {
      return this.API.post(`${baseUrl}${prefix}/page/${pageId}/tag`, {
        dto,
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async deleteTag(pageId: PageId, dto: TagDTO[]) {
    try {
      return this.API.post(`${baseUrl}${prefix}/page/${pageId}/tag`, {
        dto,
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async updateTag(pageId: PageId, dto: TagDTO[]) {
    try {
      return this.API.put(`${baseUrl}${prefix}/page/${pageId}/tag`, {
        dto,
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const TagRepoImpl = new TagRepo();
