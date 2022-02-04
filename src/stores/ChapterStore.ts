import { ChapterId } from '~/@types/common';
import { ChapterRepo, ChapterRepoImpl } from '~/repositories/ChapterRepo';

export class ChapterStore {
  currentChapterId: ChapterId;
  repo: ChapterRepo;

  constructor() {
    this.repo = ChapterRepoImpl;
  }
}
