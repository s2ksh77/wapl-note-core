import API from "../lib/API";
import type { ChannelId, ChapterId } from "../@types/common";
import type { IChapterRepo } from "./ChapterRepoType";
import { ChapterDTO } from "../models/dto/ChapterDTO";
export declare class ChapterRepo implements IChapterRepo {
    API: API;
    constructor();
    getChapterList(channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    getChapterInfoList(chapterId: ChapterId, channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    createShareChapter(chapterList: ChapterDTO[], channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    createChapter(dto: ChapterDTO, i18nLanguage: string, channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    updateChapter(dto: ChapterDTO, channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
}
export declare const ChapterRepoImpl: ChapterRepo;
