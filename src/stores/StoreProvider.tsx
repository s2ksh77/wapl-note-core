import React, { createContext, useContext } from 'react';
import { RootStore } from './RootStore';
import { NoteViewStore } from './NoteViewStore';
import { ChapterStore } from './ChapterStore';
import { PageStore } from './PageStore';
import { NoteStore } from './NoteStore';
import { TagStore } from './TagStore';
import { EditorStore } from './EditorStore';
// import { HeaderStore } from './HeaderStore';

interface IRootStore {
  noteViewStore: NoteViewStore;
  chapterStore: ChapterStore;
  pageStore: PageStore;
  noteStore: NoteStore;
  tagStore: TagStore;
  editorStore: EditorStore;
  // headerStore: HeaderStore;
}

const rootStore = new RootStore();
const RootStoreContext = createContext<IRootStore>(rootStore);

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
  );
};

export const useNoteStore = (): IRootStore => useContext(RootStoreContext);
