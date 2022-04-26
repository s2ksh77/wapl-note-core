import API from "../lib/API";
import type { ChannelId, ChapterId, ResponseFormat } from "../@types/common";
import type { IChapterRepo } from "./ChapterRepoType";
import { ChapterDTO } from "../models/dto/ChapterDTO";
export declare class ChapterRepo implements IChapterRepo {
    API: API;
    constructor();
    getChapterList(channelId: ChannelId): Promise<ResponseFormat>;
    getChapterInfoList(chapterId: ChapterId, channelId: ChannelId): Promise<any>;
    createShareChapter(chapterList: ChapterDTO[], channelId: ChannelId): Promise<any>;
    createChapter(dto: ChapterDTO, i18nLanguage: string, channelId: ChannelId): Promise<any>;
    updateChapter(dto: ChapterDTO, channelId: ChannelId): Promise<any>;
}
export declare const ChapterRepoImpl: ChapterRepo;
