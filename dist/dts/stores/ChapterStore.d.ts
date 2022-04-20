export declare class ChapterStore {
    rootStore: any;
    headerTitle: string;
    constructor(rootStore: any);
    setHeaderTitle(title: any): void;
    getChapterList(): Promise<import("axios").AxiosResponse<any, any>>;
}
