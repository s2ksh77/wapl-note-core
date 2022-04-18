import { makeAutoObservable } from 'mobx';

export class PageStore {
  rootStore;

  isLongPressed: boolean;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  changeMode(): void {
    this.isLongPressed = !this.isLongPressed;
  }
}
