import type { ChapterId } from "../../@types/common";
import { ChapterType } from "../../@types/chapter";
import type { PageDTO } from "./PageDTO";
export interface ChapterDTO {
    id?: ChapterId;
    channelId?: string;
    name?: string;
    modifiedDate?: string;
    type?: ChapterType;
    color?: string;
    sharedDate?: string;
    sharedUserId?: string;
    sharedRoomId?: string;
    read?: boolean;
    pageList?: PageDTO[];
}
