/* eslint-disable camelcase */
import type { ChapterId } from '~/@types/common';
import { ChapterType } from '~/@types/chapter';
import type { PageDTO } from '~/models/dto/PageDTO';

// fixme: 스프링 서버 도입하면 optional 붙여둔 거 정리하기.
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
