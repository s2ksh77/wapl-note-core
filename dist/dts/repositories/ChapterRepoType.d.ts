import { ChannelId, ChapterId } from "../@types/common";
import type { ChapterDTO } from "../models/dto/ChapterDTO";
import type { PageDTO } from "../models/dto/PageDTO";
export declare type GetChapterListResponseDTO = {
    notbookList: ChapterDTO[];
};
export declare type GetChapterChildrenResponseDTO = {
    noteList: PageDTO[];
};
export declare type GetChapterInfoResponseDTO = {
    dto: ChapterDTO;
};
export interface IChapterRepo {
    getChapterList(channelId: ChannelId): Promise<Dto.GetChapterListResponse>;
    getChapterChildren(chapterId: ChapterId, channelId: ChannelId): Promise<Dto.GetChapterChildrenResponse>;
    getChapterInfo(chapterId: ChapterId): Promise<Dto.GetChapterInfoResponse>;
    createShareChapter(chapterList: any): any;
    createChapter(dto: ChapterDTO, i18nLanguage: any): any;
    createEmptyChapter(dto: ChapterDTO): any;
    deleteChapter(chapterList: ChapterDTO[]): any;
    updateChapter(dto: ChapterDTO): any;
}
