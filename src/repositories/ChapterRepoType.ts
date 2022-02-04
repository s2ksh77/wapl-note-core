import { ChannelId, ChapterId, Color, WorkspaceId } from '~/@types/common';
import type { ChapterDTO } from '~/models/dto/ChapterDTO';
import type { PageDTO } from '~/models/dto/PageDTO';

export type GetChapterListResponseDTO = {
  notbookList: ChapterDTO[];
};

export type GetChapterChildrenResponseDTO = {
  noteList: PageDTO[];
};

export type GetChapterInfoResponseDTO = {
  dto: ChapterDTO;
};

export interface IChapterRepo {
  getChapterList(channelId: ChannelId): Promise<Dto.GetChapterListResponse>;
  getChapterChildren(
    chapterId: ChapterId,
    channelId: ChannelId,
  ): Promise<Dto.GetChapterChildrenResponse>;
  getChapterInfo(chapterId: ChapterId): Promise<Dto.GetChapterInfoResponse>;
  createShareChapter(chapterList);
  createChapter(dto: ChapterDTO, i18nLanguage);
  createEmptyChapter(dto: ChapterDTO);
  deleteChapter(chapterList: ChapterDTO[]);
  updateChapter(dto: ChapterDTO);
}
