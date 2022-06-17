/* eslint-disable camelcase */
import type { ChannelId, ChapterId, PageId } from '~/@types/common';
import { TagDTO } from './TagDTO';

// fixme: 스프링 서버 도입하면 optional 붙여둔 거 정리하기.
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
  type: string; // not exist
  updatedUserId: string;
  userName: string;
}
