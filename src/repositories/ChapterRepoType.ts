import { ChannelId, ChapterId, ResponseFormat } from '~/@types/common';
import type { ChapterDTO } from '~/models/dto/ChapterDTO';
import type { PageDTO } from '~/models/dto/PageDTO';

export type GetChapterListResponseDTO = {
  success: boolean;
  response: ChapterDTO[];
};

export type GetChapterChildrenResponseDTO = {
  success: boolean;
  response: PageDTO[];
};

export type GetChapterInfoResponseDTO = {
  success: boolean;
  response: ChapterDTO;
};

export interface IChapterRepo {
  getChapterList(channelId: ChannelId): Promise<ResponseFormat>;
  getChapterInfoList(chapterId: ChapterId, channelId: ChannelId);
  createShareChapter(chapterList, channelId: ChannelId);
  createChapter(dto: ChapterDTO, i18nLanguage: string, channelId: ChannelId);
  // deleteChapter(chapterList: ChapterDTO[], channelId: ChannelId, chapterId: ChapterId);
  updateChapter(dto: ChapterDTO, channelId: ChannelId);
}
