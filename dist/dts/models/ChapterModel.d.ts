import { ChapterType } from "../@types/chapter";
import { ChannelId, ChapterId, Color, SharedDate, ModifiedDate, SharedRoomId, SharedUserId, Name } from "../@types/common";
import { ChapterDTO } from "./dto/ChapterDTO";
import type { PageDTO } from "./dto/PageDTO";
export declare class ChapterModel {
    type: ChapterType;
    response: ChapterDTO;
    constructor(chapterInfo: ChapterDTO);
    get id(): ChapterId;
    get channelId(): ChannelId;
    get name(): Name;
    get modifiedDate(): ModifiedDate;
    get color(): Color;
    get pageList(): PageDTO[];
    get sharedDate(): SharedDate;
    get sharedRoomId(): SharedRoomId;
    get sharedUserId(): SharedUserId;
}
