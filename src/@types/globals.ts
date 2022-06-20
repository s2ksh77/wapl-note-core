/* eslint-disable @typescript-eslint/no-namespace */
import { ChapterModel, PageModel } from '~/models';
import type {
  ChapterResponseArray,
  ChapterResponseObject,
} from '~/repositories/ChapterRepoType';
import { PageResponseArray, PageResponseObject } from '~/repositories/PageRepoType';
import { SearchDTO } from '~/models/dto/SearchDTO';

declare global {
  namespace DTO {
    type GetChapterListResponse = ChapterResponseArray; // model 변환 안한 dto 채로 넘길때 사용해야 되나?
    type GetChapterInfoResponse = ChapterResponseObject;

    type GetPageListResponse = PageResponseArray;
    type GEtPageInfoResponse = PageResponseObject;

    type ChapterList = ChapterModel[];
    type ChapterInfo = ChapterModel;

    type PageList = PageModel[];
    type PageInfo = PageModel;

    type SearchResponse = SearchDTO;
  }
}

export {};
