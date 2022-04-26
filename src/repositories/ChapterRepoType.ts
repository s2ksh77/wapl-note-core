import { ChannelId, ChapterId } from '~/@types/common';
import { ChapterModel } from '~/models';

export type ChapterResponseArray = {
  success: boolean;
  response?: ChapterModel[] | null;
  error?: string | null;
};

export type ChapterResponseObject = {
  success: boolean;
  response?: ChapterModel | null;
  error?: string | null;
};

export interface IChapterRepo {
  getChapterList(channelId: ChannelId): Promise<DTO.ChapterList>;
  getChapterInfoList(
    chapterId: ChapterId,
    channelId: ChannelId,
  ): Promise<DTO.ChapterInfo>;
  createShareChapter(chapterList, channelId: ChannelId);
  createChapter(dto: ChapterDTO, i18nLanguage: string, channelId: ChannelId);
  updateChapter(dto: ChapterDTO, channelId: ChannelId);
}
