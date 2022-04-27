import { ChannelId, ChapterId } from "../@types/common";
import { ChapterModel } from "../models";
import type { ChapterDTO } from "../models/dto/ChapterDTO";
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
    getChapterList(channelId: ChannelId): Promise<DTO.GetChapterListResponse>;
    getChapterInfoList(chapterId: ChapterId, channelId: ChannelId): Promise<DTO.GetChapterInfoResponse>;
    createShareChapter(chapterList: any, channelId: ChannelId): any;
    createChapter(dto: ChapterDTO, i18nLanguage: string, channelId: ChannelId): any;
    updateChapter(dto: ChapterDTO, channelId: ChannelId): any;
}
