import { ChapterType } from "../@types/chapter";
import { ChannelId, ChapterId, Color, SharedDate, SharedRoomName, SharedUserId, Title, UserId } from "../@types/common";
import { ChapterDTO } from "./dto/ChapterDTO";
import type { PageDTO } from "./dto/PageDTO";
export declare class ChapterModel {
    type: ChapterType;
    dto: ChapterDTO;
    constructor(chapterInfo: ChapterDTO);
    get id(): ChapterId;
    get color(): Color;
    get pageList(): PageDTO[];
    get sharedDate(): SharedDate;
    get sharedRoomName(): SharedRoomName;
    get sharedUserId(): SharedUserId;
    get userId(): UserId;
    get messengerId(): string;
    get channelId(): ChannelId;
    get title(): Title;
}
