import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';
import { PageStore } from './PageStore';
import { NoteStore } from './NoteStore';
import { TagStore } from './TagStore';
import { EditorStore } from './EditorStore';
// import { HeaderStore } from './HeaderStore';

export class RootStore {
  noteViewStore: NoteViewStore;
  chapterStore: ChapterStore;
  pageStore: PageStore;
  noteStore: NoteStore;
  tagStore: TagStore;
  editorStore: EditorStore;
  // headerStore: HeaderStore;

  constructor() {
    this.noteViewStore = new NoteViewStore(this);
    this.chapterStore = new ChapterStore(this);
    this.pageStore = new PageStore(this);
    this.noteStore = new NoteStore(this);
    this.tagStore = new TagStore(this);
    this.editorStore = new EditorStore(this);
    // this.headerStore = new HeaderStore(this);
  }
}
