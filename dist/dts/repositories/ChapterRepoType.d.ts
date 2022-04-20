import { ChannelId, ChapterId } from "../@types/common";
import type { ChapterDTO } from "../models/dto/ChapterDTO";
import type { PageDTO } from "../models/dto/PageDTO";
export declare type GetChapterListResponseDTO = {
    success: boolean;
    response: ChapterDTO[];
};
export declare type GetChapterChildrenResponseDTO = {
    success: boolean;
    response: PageDTO[];
};
export declare type GetChapterInfoResponseDTO = {
    success: boolean;
    response: ChapterDTO;
};
export interface IChapterRepo {
    getChapterList(channelId: ChannelId): any;
    getChapterInfoList(chapterId: ChapterId, channelId: ChannelId): any;
    createShareChapter(chapterList: any, channelId: ChannelId): any;
    createChapter(dto: ChapterDTO, i18nLanguage: string, channelId: ChannelId): any;
    updateChapter(dto: ChapterDTO, channelId: ChannelId): any;
}
