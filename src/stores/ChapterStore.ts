/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { makeAutoObservable } from 'mobx';
import { ChapterRepoImpl } from '~/repositories';

export class ChapterStore {
  rootStore;

  headerTitle: string;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setHeaderTitle(title): void {
    this.headerTitle = title;
  }

  async getChapterList() {
    const res = await ChapterRepoImpl.getChapterList(
      '79b3f1b3-85dc-4965-a8a2-0c4c56244b82',
    );
    console.log(res);
    return res;
  }
}
