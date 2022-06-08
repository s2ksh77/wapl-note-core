import { makeAutoObservable } from 'mobx';
import Mark from 'mark.js';

export class EditorStore {
  tinymce: any;
  rootStore;
  marker;
  searchInputValue;
  searchingKeyword = '';
  searchTotalCount = 0;
  searchCurrentIndex;
  searchedEleArr;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setEditor(editorInstance: any): void {
    this.tinymce = editorInstance;
  }

  setMarker(el: HTMLElement): void {
    this.marker = new Mark(el);
  }

  mark(keyword: string): void {
    this.marker.mark(keyword, {
      accuracy: {
        value: 'partially',
        limiters: [],
      },
      done: (count: number): void => {
        this.searchTotalCount = count;
      },
    });
  }

  unmark(): void {
    this.marker.unmark();
  }

  setSearchInputValue(value: string): void {
    this.searchInputValue = value;
  }

  endSearching(): void {
    this.searchingKeyword = '';
    this.searchInputValue = '';
    this.searchTotalCount = 0;
    this.unmark();
  }

  handleSearchEditor(): void {
    if (this.searchInputValue === '') return;
    if (this.searchInputValue === this.searchingKeyword) {
      this.handleSearchNext();
    } else {
      this.unmark();
      this.searchingKeyword = this.searchInputValue;
      this.mark(this.searchInputValue);
      this.searchedEleArr = this.tinymce.getBody().querySelectorAll('mark');
      if (this.searchTotalCount === 0) this.searchCurrentIndex = -1;
      else {
        this.searchCurrentIndex = 0;
        this.searchedEleArr[this.searchCurrentIndex].classList.add('searchselected');
      }
    }
  }

  handleSearchNext(): void {
    if (this.searchTotalCount !== 0) {
      if (this.searchCurrentIndex < this.searchTotalCount - 1) {
        this.searchedEleArr[this.searchCurrentIndex].classList.remove('searchselected');
        this.searchCurrentIndex += 1;
      } else {
        this.searchedEleArr[this.searchCurrentIndex].classList.remove('searchselected');
        this.searchCurrentIndex = 0;
      }
      this.searchedEleArr[this.searchCurrentIndex].scrollIntoView(false);
      this.searchedEleArr[this.searchCurrentIndex].classList.add('searchselected');
    }
  }
}
