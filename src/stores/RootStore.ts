import { PageStore } from './PageStore';
import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';
import { TagStore } from './TagStore';
import { NoteStore } from './NoteStore';

export class RootStore {
  pageStore;

  chapterStore;

  noteViewStore;

  tagStore;

  noteStore;

  constructor() {
    this.pageStore = new PageStore(this);
    this.noteViewStore = new NoteViewStore(this);
    this.chapterStore = new ChapterStore(this);
    this.tagStore = new TagStore();
    this.noteStore = new NoteStore(this);
  }
}
