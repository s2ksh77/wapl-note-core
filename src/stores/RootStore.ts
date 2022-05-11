import { PageStore } from './PageStore';
import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';
import { TagStore } from './TagStore';

export class RootStore {
  pageStore;

  chapterStore;

  noteViewStore;

  tagStore;

  constructor() {
    this.pageStore = new PageStore(this);
    this.noteViewStore = new NoteViewStore(this);
    this.chapterStore = new ChapterStore(this);
    this.tagStore = new TagStore();
  }
}
