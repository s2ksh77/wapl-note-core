export declare class EditorStore {
    tinymce: any;
    rootStore: any;
    marker: any;
    searchInputValue: any;
    searchingKeyword: string;
    searchTotalCount: number;
    searchCurrentIndex: any;
    searchedEleArr: any;
    constructor(rootStore: any);
    setEditor(editorInstance: any): void;
    setMarker(el: HTMLElement): void;
    mark(keyword: string): void;
    unmark(): void;
    setSearchInputValue(value: string): void;
    endSearching(): void;
    handleSearchEditor(): void;
    handleSearchNext(): void;
}
