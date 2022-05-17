import { ChannelId, ChapterId } from "../@types/common";
import { ChapterModel } from "../models";
export declare type ChapterResponseArray = {
    success: boolean;
    response?: ChapterModel[] | null;
    error?: string | null;
};
export declare type ChapterResponseObject = {
    success: boolean;
    response?: ChapterModel | null;
    error?: string | null;
};
export interface IChapterRepo {
    getChapterList(channelId: ChannelId): Promise<DTO.ChapterList>;
    getChapterInfoList(chapterId: ChapterId, channelId: ChannelId): Promise<DTO.ChapterInfo>;
    createShareChapter(chapterList: any, channelId: ChannelId): any;
    createChapter(dto: ChapterModel, language: string, channelId: ChannelId): Promise<DTO.ChapterInfo>;
    updateChapter(dto: ChapterModel, channelId: ChannelId): Promise<DTO.ChapterInfo>;
}
