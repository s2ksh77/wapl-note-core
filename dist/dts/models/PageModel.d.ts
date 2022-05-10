import { ChannelId, ChapterId, Content, CreatedDate, CreatedUserId, DeletedDate, EditingUserId, Favorite, FileList, PageId, ModifiedDate, Name, Read, RestoreChapterId, Shared, SharedRoomId, SharedUserId, TagList, TextContent, UpdatedUserId, UserName, Type } from "../@types/common";
import type { PageDTO } from "./dto/PageDTO";
export declare class PageModel {
    response: Partial<PageDTO>;
    constructor(page: Partial<PageDTO>);
    get channelId(): ChannelId;
    get chapterId(): ChapterId;
    get content(): Content;
    get createdDate(): CreatedDate;
    get createdUserId(): CreatedUserId;
    get deletedDate(): DeletedDate;
    get editingUserId(): EditingUserId;
    get favorite(): Favorite;
    get fileList(): FileList;
    get id(): PageId;
    get modifiedDate(): ModifiedDate;
    get name(): Name;
    get read(): Read;
    get restoreChapterId(): RestoreChapterId;
    get shared(): Shared;
    get sharedDate(): CreatedDate;
    get sharedRoomId(): SharedRoomId;
    get sharedUserId(): SharedUserId;
    get tagList(): TagList;
    get textContent(): TextContent;
    get type(): Type;
    get updatedUserId(): UpdatedUserId;
    get userName(): UserName;
}
