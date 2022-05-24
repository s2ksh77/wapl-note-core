import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';
import { PageStore } from './PageStore';
import { NoteStore } from './NoteStore';
import { TagStore } from './TagStore';
import { EditorStore } from './EditorStore';
import { UiStore } from './UiStore';

export class RootStore {
  noteViewStore: NoteViewStore;
  chapterStore: ChapterStore;
  pageStore: PageStore;
  noteStore: NoteStore;
  tagStore: TagStore;
  editorStore: EditorStore;
  uiStore: UiStore;

  constructor() {
    this.noteViewStore = new NoteViewStore(this);
    this.chapterStore = new ChapterStore(this);
    this.pageStore = new PageStore(this);
    this.noteStore = new NoteStore(this);
    this.tagStore = new TagStore(this);
    this.editorStore = new EditorStore(this);
    this.uiStore = new UiStore(this);
  }
}
