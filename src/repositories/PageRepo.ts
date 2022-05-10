/* eslint-disable consistent-return */
import API from '~/lib/API';
import { baseUrl, ChannelId, ChapterId, PageId, prefix, Action } from '~/@types/common';
import { PageDTO } from '~/models/dto/PageDTO';
import type { IPageRepo } from '~/repositories/PageRepoType';
import { PageModel } from '~/models';

export class PageRepo implements IPageRepo {
  API: API;
  channelId; // TODO: param으로 다 받을까..

  constructor() {
    this.API = new API();
  }

  async getAllPageList(channelId: ChannelId): Promise<DTO.PageList> {
    try {
      return await this.API.get(`${baseUrl}${prefix}/app/${channelId}/page/all`);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getRecentList(channelId: ChannelId, num): Promise<DTO.PageInfo> {
    const query = num ? `?count=${num}` : '';
    try {
      return await this.API.get(`${baseUrl}${prefix}/app/${channelId}/page${query}`);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getPageInfoList(pageId: PageId, channelId: ChannelId): Promise<DTO.PageInfo> {
    try {
      const res = await this.API.get(
        `${baseUrl}${prefix}/app/${channelId}/page/${pageId}`,
      );
      if (res.success) return new PageModel(res.response);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createPage(channelId: ChannelId, chapterId: ChapterId, dto: PageDTO) {
    try {
      return this.API.post(
        `${baseUrl}${prefix}/app/${channelId}/chapter/${chapterId}/page`,
        {
          dto,
        },
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  // 단일 페이지 삭제
  async deletePage(channelId: ChannelId, chapterId: ChapterId, pageId: PageId) {
    try {
      return await this.API.delete(
        `${baseUrl}${prefix}/app/${channelId}/chapter/${chapterId}/page/${pageId}`,
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async updatePage(
    channelId: ChannelId,
    chapterId: ChapterId,
    action: string,
    dto: PageDTO,
  ) {
    try {
      return await this.API.put(
        `${baseUrl}${prefix}/app/${channelId}/chapter/${chapterId}/page?action=${action}`,
        {
          dto,
        },
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createSharePage(channelId: ChannelId, dto: PageDTO) {
    return this.API.post(`${baseUrl}${prefix}/app/${channelId}/page/copy`, {
      dto,
    });
  }

  async updateRecyclePage(
    channelId: ChannelId,
    action: Action,
    dto: PageModel,
  ): Promise<DTO.PageInfo> {
    try {
      const res = await this.API.put(
        `${baseUrl}${prefix}/app/${channelId}/page/recycle?action=${action}`,
        dto.response,
      );
      if (res.success) return new PageModel(res.response);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async bookmarkPage(pageId: PageId) {
    try {
      return await this.API.post(`${baseUrl}${prefix}/page/${pageId}/bookmark`);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async unbookmarkPage(pageId: PageId) {
    try {
      return await this.API.delete(`${baseUrl}${prefix}/page/${pageId}/bookmark`);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getBookmarkInChannel(channelId: ChannelId): Promise<DTO.PageList> {
    try {
      const res = await this.API.get(`${baseUrl}${prefix}/app/${channelId}/bookmark`);
      if (res.success) return res.response?.map(page => new PageModel(page) || []);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getBookmarkInUser() {
    try {
      return await this.API.get(`${baseUrl}${prefix}/bookmark`);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const PageRepoImpl = new PageRepo();
