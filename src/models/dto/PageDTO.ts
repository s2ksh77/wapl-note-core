/* eslint-disable camelcase */
import type {
  ChannelId,
  ChannelType,
  ChapterId,
  Color,
  PageId,
  UserId,
  UserName,
  WorkspaceId,
} from '~/@types/common';

// fixme: 스프링 서버 도입하면 optional 붙여둔 거 정리하기.
export interface PageDTO {
  CH_TYPE?: ChannelType;
  TYPE?: string | null;
  USER_ID?: UserId;
  WS_ID?: WorkspaceId;
  children?: string | null;
  color?: Color;
  created_at?: string | null;
  created_date?: string | null;
  deleted_date?: string | null;
  fileList?: any; // fixme
  file_deleted_at?: string | null;
  file_extension?: string | null;
  file_last_update_user_id?: string | null;
  file_name?: string | null;
  file_size?: string | null;
  file_updated_at?: string | null;
  is_edit?: string | null;
  is_favorite?: string | null;
  log_file_id?: string | null;
  messenger_id?: string | null;
  note_deleted_at?: string | null;
  note_id?: PageId;
  note_title?: string | null;
  note_channel_id?: ChannelId;
  id?: string | null;
  modified_date?: string | null;
  note_content?: string | null;
  parent_notebook?: string | null;
  restoreChapterId?: ChapterId;
  resultMsg?: string | null;
  shared_room_name?: string | null;
  shared_user_id?: string | null;
  tagList?: any; // fixme
  target_channel_id?: ChannelId;
  target_workspace_id?: WorkspaceId;
  text?: string | null;
  text_content?: string | null;
  type?: string;
  user_name?: UserName;
}
