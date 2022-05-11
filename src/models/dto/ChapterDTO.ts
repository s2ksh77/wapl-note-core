/* eslint-disable camelcase */
import type { ChapterId } from '~/@types/common';
import { ChapterType } from '~/@types/chapter';
import type { PageDTO } from '~/models/dto/PageDTO';

// model 만들어서 일부 column만 사용하는건데 이건 좀 에반데.
export interface ChapterDTO {
  id: ChapterId;
  channelId: string;
  name: string;
  modifiedDate: string;
  type: ChapterType;
  color: string;
  sharedDate: string;
  sharedUserId: string;
  sharedRoomId: string;
  read: boolean;
  pageList: PageDTO[];
}
