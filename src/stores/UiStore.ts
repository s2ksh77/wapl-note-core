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
  selectFilter = '';
  searchKey = '';

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

  toggleSearchBar(): void {
    this.isSearching = !this.isSearching;
  }

  setSearchKey(value: string): void {
    this.searchKey = value;
  }

  setSelectFilter(selectFilter: string): void {
    this.selectFilter = selectFilter;
  }
}
