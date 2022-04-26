/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import API from '~/lib/API';
import type { ChannelId, ChapterId, ResponseFormat } from '~/@types/common';
import { baseUrl, prefix } from '~/@types/common';
import type { IChapterRepo } from '~/repositories/ChapterRepoType';
import { ChapterDTO } from '~/models/dto/ChapterDTO';

export class ChapterRepo implements IChapterRepo {
  API: API;

  constructor() {
    this.API = new API();
  }

  async getChapterList(channelId: ChannelId): Promise<ResponseFormat> {
    try {
      const res = await this.API.get(`${baseUrl}${prefix}/app/${channelId}`);
      return res;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getChapterInfoList(chapterId: ChapterId, channelId: ChannelId) {
    try {
      const res = await this.API.get(
        `${baseUrl}${prefix}/app/${channelId}/chapter/${chapterId}`,
      );
      return res;
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

  async createChapter(dto: ChapterDTO, i18nLanguage: string, channelId: ChannelId) {
    try {
      const res = await this.API.post(`${baseUrl}${prefix}/app/${channelId}/chapter`, {
        dto,
      });
      return res;
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

  async updateChapter(dto: ChapterDTO, channelId: ChannelId) {
    try {
      const res = await this.API.put(`${baseUrl}${prefix}/app/${channelId}/chapter`, {
        dto,
      });
      return res;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const ChapterRepoImpl = new ChapterRepo();
