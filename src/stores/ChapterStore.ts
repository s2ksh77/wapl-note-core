/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { makeAutoObservable } from 'mobx';
import { ChapterType } from '~/@types/chapter';
import { ChannelId, ChapterId } from '~/@types/common';
import { ChapterDTO, ChapterModel } from '~/models';
import { ChapterRepoImpl } from '~/repositories';
import { IChapterRepo } from '~/repositories/ChapterRepoType';

export class ChapterStore {
  rootStore;
  repo: IChapterRepo;
  headerTitle = '';
  currentId = '';

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

  async createChapter(dto: ChapterModel, language: string, channelId: ChannelId) {
    const res = await this.repo.createChapter(dto, language, channelId);
    return res;
  }

  async renameChapter(dto: ChapterModel, channelId: ChannelId) {
    const res = await this.repo.updateChapter(dto, channelId);
    return res;
  }

  async deleteChapter(dto: ChapterModel[], channelId: ChannelId): Promise<void> {
    await this.repo.deleteChapter(dto, channelId);
  }

  get RandomColor(): string {
    const colorArray = [
      '#C84847',
      '#F29274',
      '#F6C750',
      '#77B69B',
      '#679886',
      '#3A7973',
      '#77BED3',
      '#5C83DA',
      '#8F91E7',
      '#DF97AA',
      '#CA6D6D',
    ];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }
}
