import { ChannelId, ChapterId, Color, SharedDate, ModifiedDate, SharedRoomId, SharedUserId, Name, Type } from "../@types/common";
import { ChapterDTO } from "./dto/ChapterDTO";
import type { PageDTO } from "./dto/PageDTO";
export declare class ChapterModel {
    response: ChapterDTO;
    constructor(chapter: ChapterDTO);
    get id(): ChapterId;
    get channelId(): ChannelId;
    get name(): Name;
    get type(): Type;
    get modifiedDate(): ModifiedDate;
    get color(): Color;
    get pageList(): PageDTO[];
    get sharedDate(): SharedDate;
    get sharedRoomId(): SharedRoomId;
    get sharedUserId(): SharedUserId;
}
