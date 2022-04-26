/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { makeAutoObservable } from 'mobx';
import { ChannelId, ChapterId } from '~/@types/common';
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

  async getChapterList() {
    const { success, response } = await this.repo.getChapterList(
      '79b3f1b3-85dc-4965-a8a2-0c4c56244b82',
    );
    if (success) return response;
  }

  async getChapterInfoList(chapterId: ChapterId, channelId: ChannelId) {
    const res = await this.repo.getChapterInfoList(chapterId, channelId);
    return res;
  }
}
