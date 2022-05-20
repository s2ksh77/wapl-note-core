import { makeAutoObservable } from 'mobx';

export class EditorStore {
  tinymce: any;
  rootStore;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setEditor(editorInstance: any): void {
    this.tinymce = editorInstance;
  }
}
