import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';
import { PageStore } from './PageStore';
import { NoteStore } from './NoteStore';
import { TagStore } from './TagStore';
import { EditorStore } from './EditorStore';
export declare class RootStore {
    noteViewStore: NoteViewStore;
    chapterStore: ChapterStore;
    pageStore: PageStore;
    noteStore: NoteStore;
    tagStore: TagStore;
    editorStore: EditorStore;
    constructor();
}
