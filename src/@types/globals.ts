/* eslint-disable @typescript-eslint/no-namespace */
import type {
  GetChapterListResponseDTO,
  GetChapterChildrenResponseDTO,
  GetChapterInfoResponseDTO,
} from '~/repositories/ChapterRepoType';

declare global {
  namespace Dto {
    type GetChapterListResponse = GetChapterListResponseDTO;
    type GetChapterChildrenResponse = GetChapterChildrenResponseDTO;
    type GetChapterInfoResponse = GetChapterInfoResponseDTO;
  }
}

export {};
