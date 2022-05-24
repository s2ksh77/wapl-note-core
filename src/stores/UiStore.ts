import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export interface IHeaderButton {
  action: string;
  onClick?: () => void;
}

export interface IHeaderInfo {
  title?: string;
  leftSide?: IHeaderButton[];
  rightSide?: IHeaderButton[];
}

export class UiStore {
  rootStore: RootStore;
  headerInfo: IHeaderInfo = {};
  isSearching = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setHeaderInfo(headerInfo: IHeaderInfo): void {
    this.headerInfo = headerInfo;
  }

  setHeaderTitle(title: string): void {
    this.headerInfo.title = title;
  }

  setIsSearching(isSearching: boolean): void {
    this.isSearching = isSearching;
  }

  toggleSearchBar(): void {
    this.setIsSearching(!this.isSearching);
  }
}
