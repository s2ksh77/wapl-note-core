import { ChapterDTO } from './ChapterDTO';
import { PageDTO } from './PageDTO';
import { TagDTO } from './TagDTO';

export interface SearchDTO {
  chapterList: ChapterDTO[];
  pageList: PageDTO[];
  tagList: TagDTO[];
}
