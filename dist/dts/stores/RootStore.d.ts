import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';
import { PageStore } from './PageStore';
import { NoteStore } from './NoteStore';
import { TagStore } from './TagStore';
import { EditorStore } from './EditorStore';
import { UiStore } from './UiStore';
export declare class RootStore {
    noteViewStore: NoteViewStore;
    chapterStore: ChapterStore;
    pageStore: PageStore;
    noteStore: NoteStore;
    tagStore: TagStore;
    editorStore: EditorStore;
    uiStore: UiStore;
    constructor();
}
