import { NoteViewType } from '../@types/common';
export declare class NoteViewStore {
    rootStore: any;
    isLongPressed: boolean;
    type: NoteViewType;
    constructor(rootStore: any);
    toggleMultiSelectMode(): void;
    setType(type: any): void;
}
