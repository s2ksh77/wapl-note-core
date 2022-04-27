import { PageId, ChannelId, Name, CreatedDate, ModifiedDate, SharedDate, SharedRoomId, SharedUserId, Favorite, EditingUserId, UserName, RestoreChapterId, Content, UpdatedUserId, Type, TextContent } from "../@types/common";
import type { PageDTO } from "./dto/PageDTO";
export declare class PageModel {
    response: PageDTO;
    constructor(page: PageDTO);
    get id(): PageId;
    get channelId(): ChannelId;
    get name(): Name;
    get createdDate(): CreatedDate;
    get modifiedDate(): ModifiedDate;
    get sharedDate(): SharedDate;
    get sharedRoomId(): SharedRoomId;
    get sharedUserId(): SharedUserId;
    get restoreChapterId(): RestoreChapterId;
    get userName(): UserName;
    get editingUserId(): EditingUserId;
    get favorite(): Favorite;
    get content(): Content;
    get updatedUserId(): UpdatedUserId;
    get type(): Type;
    get textContent(): TextContent;
}
