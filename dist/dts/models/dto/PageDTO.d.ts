import type { ChannelId, ChapterId, PageId } from "../../@types/common";
import { TagDTO } from './TagDTO';
export interface PageDTO {
    channelId: ChannelId;
    chapterId: ChapterId;
    color: string;
    content: string;
    createdDate: string;
    createdUserId: string;
    deletedDate: string;
    editingUserId: string;
    favorite: boolean;
    fileList: any;
    id: PageId;
    modifiedDate: string;
    name: string;
    read: boolean;
    restoreChapterId: string;
    shared: boolean;
    sharedRoomId: string;
    sharedUserId: string;
    tagList: TagDTO[];
    textContent: string;
    type: string;
    updatedUserId: string;
    userName: string;
}
