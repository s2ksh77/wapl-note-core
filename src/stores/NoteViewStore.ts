import { makeAutoObservable } from 'mobx';
import { NoteViewType } from '../@types/common';

export class NoteViewStore {
  rootStore;

  isLongPressed: boolean;

  type: NoteViewType;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.type = NoteViewType.MyNote;
  }

  toggleMultiSelectMode(): void {
    this.isLongPressed = !this.isLongPressed;
  }

  setType(type): void {
    this.type = type;
  }
}
