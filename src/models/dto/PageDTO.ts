/* eslint-disable camelcase */
import type { ChannelId, ChapterId, PageId } from '~/@types/common';
import { TagDTO } from './TagDTO';

// fixme: 스프링 서버 도입하면 optional 붙여둔 거 정리하기.
export interface PageDTO {
  id: PageId;
  chapterId: ChapterId;
  channelId: ChannelId;
  restoreChapterId: string;
  name: string;
  createdDate: string;
  modifiedDate: string;
  userName: string;
  editingUserId: string;
  favorite: boolean;
  content: string;
  updatedUserId: string;
  type: string;
  sharedDate: string;
  sharedUserId: string;
  sharedRoomId: string;
  createdUserId: string;
  deletedDate: string;
  textContent: string;
  read: boolean;
  fileList: any;
  tagList: TagDTO[];
}
