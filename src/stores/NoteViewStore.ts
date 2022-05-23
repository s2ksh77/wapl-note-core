import { makeAutoObservable } from 'mobx';
import { NoteViewType } from '../@types/common';

export class NoteViewStore {
  rootStore;
  isLongPressed = false;
  type: NoteViewType = NoteViewType.MyNote;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  toggleMultiSelectMode(): void {
    this.isLongPressed = !this.isLongPressed;
  }

  setType(type: NoteViewType): void {
    this.type = type;
  }
}
