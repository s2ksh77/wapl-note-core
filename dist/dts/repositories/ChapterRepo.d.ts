import API from "../lib/API";
import type { ChannelId, ChapterId } from "../@types/common";
import type { IChapterRepo } from "./ChapterRepoType";
import { ChapterDTO } from "../models/dto/ChapterDTO";
import { ChapterModel } from "../models";
export declare class ChapterRepo implements IChapterRepo {
    API: API;
    constructor();
    getChapterList(channelId: ChannelId): Promise<DTO.ChapterList>;
    getChapterInfoList(chapterId: ChapterId, channelId: ChannelId): Promise<DTO.ChapterInfo>;
    createShareChapter(chapterList: ChapterDTO[], channelId: ChannelId): Promise<any>;
    createChapter(dto: ChapterModel, language: string, channelId: ChannelId): Promise<DTO.ChapterInfo>;
    updateChapter(dto: ChapterDTO, channelId: ChannelId): Promise<any>;
}
export declare const ChapterRepoImpl: ChapterRepo;
