import { API } from 'teespace-core';
import type { ChannelId, ChapterId } from '~/@types/common';
import type { IChapterRepo } from '~/repositories/ChapterRepoType';
import { ChapterDTO } from '~/models/dto/ChapterDTO';

export class ChapterRepo implements IChapterRepo {
  prefix = 'note-api';

  async getChapterList(channelId: ChannelId): Promise<Dto.GetChapterListResponse> {
    try {
      return await API.get(
        `${this.prefix}/noteChapter?action=List&note_channel_id=${channelId}`,
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getChapterChildren(
    chapterId: ChapterId,
    channelId: ChannelId,
  ): Promise<Dto.GetChapterChildrenResponse> {
    try {
      return await API.Get(
        `${this.prefix}/note?action=List&note_channel_id=${channelId}&parent_notebook=${chapterId}`,
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getChapterInfo(chapterId: ChapterId): Promise<Dto.GetChapterInfoResponse> {
    return API.Get(`${this.prefix}/chaptershare?action=List&id=${chapterId}`);
  }

  async createShareChapter(chapterList) {
    return API.post(`${this.prefix}/chaptershare`, {
      dto: {
        notbookList: chapterList,
      },
    });
  }

  async createChapter(dto: ChapterDTO, i18nLanguage) {
    try {
      const { data } = await API.post(
        `${this.prefix}/langauge/${i18nLanguage}/notebooks`,
        {
          dto,
        },
      );
      return data;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createEmptyChapter(dto: ChapterDTO) {
    try {
      const { data } = await API.post(`${this.prefix}/children/none}/notebooks`, {
        dto,
      });
      return data;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async deleteChapter(chapterList) {
    try {
      const { data } = await API.post(`${this.prefix}/notebook?action=Delete`, {
        dto: {
          notbookList: chapterList,
        },
      });
      return data;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async updateChapter(dto: ChapterDTO) {
    try {
      const { data } = await API.put(`${this.prefix}/notebooks?action=Update`, {
        dto,
      });
      return data;
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const ChapterRepoImpl = new ChapterRepo();
