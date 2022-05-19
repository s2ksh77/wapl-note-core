import React from 'react';
import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';
import { PageStore } from './PageStore';
import { NoteStore } from './NoteStore';
import { TagStore } from './TagStore';
interface IRootStore {
    noteViewStore: NoteViewStore;
    chapterStore: ChapterStore;
    pageStore: PageStore;
    noteStore: NoteStore;
    tagStore: TagStore;
}
export declare const StoreProvider: React.FC;
export declare const useNoteStore: () => IRootStore;
export {};
