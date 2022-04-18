import { PageStore } from './PageStore';
import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';

export class RootStore {
  pageStore;

  chapterStore;

  noteViewStore;

  constructor() {
    this.pageStore = new PageStore(this);
    this.noteViewStore = new NoteViewStore(this);
    this.chapterStore = new ChapterStore(this);
  }
}
