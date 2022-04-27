/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { makeAutoObservable } from 'mobx';
import { ChapterType } from '~/@types/chapter';
import { ChannelId, ChapterId } from '~/@types/common';
import { ChapterModel } from '~/models';
import { ChapterRepoImpl } from '~/repositories';
import { IChapterRepo } from '~/repositories/ChapterRepoType';

export class ChapterStore {
  rootStore;
  repo: IChapterRepo;

  headerTitle: string;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.repo = ChapterRepoImpl;
  }

  setHeaderTitle(title): void {
    this.headerTitle = title;
  }

  async getChapterList(channelId: ChannelId) {
    const chapters = await this.repo.getChapterList(channelId);

    return this.sortChapterList(chapters);
  }

  async sortChapterList(chapters: ChapterModel[]) {
    // 임시
    const normal = chapters.filter(chapter => chapter.type === ChapterType.NOTEBOOK);
    const shared = chapters.filter(
      chapter => chapter.type === ChapterType.SHARED && ChapterType.SHARED_PAGE,
    );
    const recycle = chapters.filter(chapter => chapter.type === ChapterType.RECYCLE_BIN);
    return { normal, shared, recycle };
  }

  async getChapterInfoList(chapterId: ChapterId, channelId: ChannelId) {
    const res = await this.repo.getChapterInfoList(chapterId, channelId);
    return res;
  }
}
