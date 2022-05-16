/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import API from '~/lib/API';
import type { ChannelId, ChapterId } from '~/@types/common';
import { baseUrl, prefix } from '~/@types/common';
import type { IChapterRepo } from '~/repositories/ChapterRepoType';
import { ChapterDTO } from '~/models/dto/ChapterDTO';
import { ChapterModel } from '~/models';

export class ChapterRepo implements IChapterRepo {
  API: API;

  constructor() {
    this.API = new API();
  }

  async getChapterList(channelId: ChannelId): Promise<DTO.ChapterList> {
    try {
      const res = await this.API.get(`${baseUrl}${prefix}/app/${channelId}`);
      if (res.success)
        return res.response?.map(chapter => new ChapterModel(chapter) || []);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getChapterInfoList(
    chapterId: ChapterId,
    channelId: ChannelId,
  ): Promise<DTO.ChapterInfo> {
    try {
      const res = await this.API.get(
        `${baseUrl}${prefix}/app/${channelId}/chapter/${chapterId}`,
      );
      if (res.success) return new ChapterModel(res.response);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createShareChapter(chapterList: ChapterDTO[], channelId: ChannelId) {
    const res = await this.API.post(
      `${baseUrl}${prefix}/app/${channelId}/chapter/share`,
      {
        chapterList,
      },
    );
    return res;
  }

  async createChapter(
    dto: ChapterModel,
    language: string,
    channelId: ChannelId,
  ): Promise<DTO.ChapterInfo> {
    try {
      const res = await this.API.post(
        `${baseUrl}${prefix}/app/${channelId}/chapter?language=${language}`,
        dto.response,
      );
      if (res.success) return new ChapterModel(res.response);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  // async createEmptyChapter(dto: ChapterDTO) {
  //   try {
  //     const res = await this.API.post(`${prefix}/children/none}/notebooks`, {
  //       dto,
  //     });
  //     return data;
  //   } catch (e) {
  //     throw Error(JSON.stringify(e));
  //   }
  // }

  // async deleteChapter(
  //   chapterList: ChapterDTO[],
  //   channelId: ChannelId,
  //   chapterId: ChapterId,
  // ) {
  //   try {
  //     const res = await this.API.delete(
  //       `${prefix}/app/${channelId}/chapter/${chapterId}`,
  //       chapterList,
  //     );

  //   } catch (e) {
  //     throw Error(JSON.stringify(e));
  //   }
  // }

  // async deleteChapter(
  //   chapterList: ChapterDTO[],
  //   channelId: ChannelId,
  //   chapterId: ChapterId,
  // ) {
  //   try {
  //     const res = await this.API.delete(
  //       `${prefix}/app/${channelId}/chapter/${chapterId}`,
  //       {
  //         dto,
  //       },
  //     );

  //   } catch (e) {
  //     throw Error(JSON.stringify(e));
  //   }
  // }

  async updateChapter(dto: ChapterModel, channelId: ChannelId): Promise<DTO.ChapterInfo> {
    try {
      const res = await this.API.put(
        `${baseUrl}${prefix}/app/${channelId}/chapter`,
        dto.response,
      );
      if (res.success) return new ChapterModel(res.response);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const ChapterRepoImpl = new ChapterRepo();
