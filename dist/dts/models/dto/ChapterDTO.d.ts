import type { UserId, ChannelId } from "../../@types/common";
import { ChapterType } from "../../@types/chapter";
import type { PageDTO } from "./PageDTO";
export interface ChapterDTO {
    USER_ID?: UserId;
    children?: Partial<PageDTO>[];
    color?: string | null;
    id: string | null;
    messenger_id?: string | null;
    modified_date?: string | null;
    note_channel_id?: ChannelId;
    resultMsg?: string | null;
    shared_date?: string | null;
    shared_room_name?: string | null;
    shared_user_id?: string | null;
    target_channel_id?: string | null;
    target_workspace_id?: string | null;
    text?: string | null;
    type?: ChapterType | null;
    user_name?: string | null;
    ws_id?: string | null;
}
