import API from '~/lib/API';
import type { ITagRepo } from '~/repositories/TagRepoType';
import { baseUrl, ChannelId, PageId, prefix, TagId } from '~/@types/common';
import { TagDTO, TagListObjDTO } from '~/models/dto/TagDTO';
import { PageDTO } from '~/models';

export class TagRepo implements ITagRepo {
  API: API;

  constructor() {
    this.API = new API();
  }

  async getAllTagList(channelId: ChannelId): Promise<TagListObjDTO> {
    try {
      const res = await this.API.get(`${baseUrl}${prefix}/app/${channelId}/tag`);
      return res.response;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getAllSearchTagList(
    channelId: ChannelId,
    searchKey: string,
  ): Promise<TagListObjDTO> {
    try {
      const res = await this.API.get(
        `${baseUrl}${prefix}/app/${channelId}/tag/${searchKey}`,
      );
      return res.response;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getTagList(pageId: PageId): Promise<TagDTO[]> {
    try {
      const res = await this.API.get(`${baseUrl}${prefix}/page/${pageId}/tag`);
      return res.response;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getTagPageList(tagId: TagId, channelId: ChannelId): Promise<PageDTO[]> {
    try {
      const res = await this.API.get(
        `${baseUrl}${prefix}/app/${channelId}/tag/${tagId}/page`,
      );
      return res.response;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createTag(
    pageId: PageId,
    dto: Pick<TagDTO, 'name' | 'pageId'>[],
  ): Promise<TagDTO[]> {
    try {
      const res = await this.API.post(`${baseUrl}${prefix}/page/${pageId}/tag`, dto);
      return res.response;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async deleteTag(pageId: PageId, dto: Pick<TagDTO, 'id' | 'pageId'>[]): Promise<void> {
    try {
      return this.API.post(`${baseUrl}${prefix}/page/${pageId}/tag/delete`, dto);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async updateTag(
    pageId: PageId,
    dto: Pick<TagDTO, 'id' | 'name' | 'pageId'>[],
  ): Promise<void> {
    try {
      this.API.put(`${baseUrl}${prefix}/page/${pageId}/tag`, {
        dto,
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const TagRepoImpl = new TagRepo();
