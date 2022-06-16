import { ChannelId, ChapterId } from "../@types/common";
import { ChapterModel } from "../models";
import { IChapterRepo } from "../repositories/ChapterRepoType";
export declare class ChapterStore {
    rootStore: any;
    repo: IChapterRepo;
    headerTitle: string;
    currentId: string;
    constructor(rootStore: any);
    setHeaderTitle(title: any): void;
    getChapterList(channelId: ChannelId): Promise<{
        normal: ChapterModel[];
        shared: ChapterModel[];
        recycle: ChapterModel[];
    }>;
    sortChapterList(chapters: ChapterModel[]): Promise<{
        normal: ChapterModel[];
        shared: ChapterModel[];
        recycle: ChapterModel[];
    }>;
    getChapterInfoList(chapterId: ChapterId, channelId: ChannelId): Promise<ChapterModel>;
    createChapter(dto: ChapterModel, language: string, channelId: ChannelId): Promise<ChapterModel>;
    renameChapter(dto: ChapterModel, channelId: ChannelId): Promise<ChapterModel>;
    deleteChapter(dto: ChapterModel[], channelId: ChannelId): Promise<void>;
    getEditingUserIds(chapterIds: ChapterId[], channelId: ChannelId): Promise<string[]>;
    get RandomColor(): string;
}
