import { makeAutoObservable } from 'mobx';

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
}
