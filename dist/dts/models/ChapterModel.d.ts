import { ChannelId, ChapterId, Color, SharedDate, ModifiedDate, SharedRoomId, SharedUserId, Name } from "../@types/common";
import { ChapterType } from "../@types";
import { ChapterDTO } from "./dto/ChapterDTO";
import type { PageDTO } from "./dto/PageDTO";
export declare class ChapterModel {
    response: Partial<ChapterDTO>;
    constructor(chapter?: Partial<ChapterDTO>);
    get id(): ChapterId;
    get channelId(): ChannelId;
    get name(): Name;
    get type(): ChapterType;
    get modifiedDate(): ModifiedDate;
    get color(): Color;
    get pageList(): PageDTO[];
    get sharedDate(): SharedDate;
    get sharedRoomId(): SharedRoomId;
    get sharedUserId(): SharedUserId;
}
