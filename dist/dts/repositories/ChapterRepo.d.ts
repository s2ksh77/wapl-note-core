import type { ChannelId, ChapterId } from "../@types/common";
import type { IChapterRepo } from "./ChapterRepoType";
import { ChapterDTO } from "../models/dto/ChapterDTO";
export declare class ChapterRepo implements IChapterRepo {
    prefix: string;
    getChapterList(channelId: ChannelId): Promise<Dto.GetChapterListResponse>;
    getChapterChildren(chapterId: ChapterId, channelId: ChannelId): Promise<Dto.GetChapterChildrenResponse>;
    getChapterInfo(chapterId: ChapterId): Promise<Dto.GetChapterInfoResponse>;
    createShareChapter(chapterList: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    createChapter(dto: ChapterDTO, i18nLanguage: any): Promise<{
        dto: any;
    }>;
    createEmptyChapter(dto: ChapterDTO): Promise<{
        dto: any;
    }>;
    deleteChapter(chapterList: any): Promise<{
        dto: any;
    }>;
    updateChapter(dto: ChapterDTO): Promise<{
        dto: any;
    }>;
}
export declare const ChapterRepoImpl: ChapterRepo;
