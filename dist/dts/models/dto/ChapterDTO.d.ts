import type { ChapterId } from "../../@types/common";
import { ChapterType } from "../../@types/chapter";
import type { PageDTO } from "./PageDTO";
export interface ChapterDTO {
    id: ChapterId;
    channelId: string;
    name: string;
    modifiedDate?: string | null;
    type?: ChapterType | null;
    color: string;
    sharedDate?: string | null;
    sharedUserId?: string | null;
    sharedRoomId?: string | null;
    read: boolean;
    pageList?: PageDTO[];
}
