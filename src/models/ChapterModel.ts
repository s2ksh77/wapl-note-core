import { ChapterType } from '~/@types/chapter';
import {
  ChannelId,
  ChapterId,
  Color,
  SharedDate,
  ModifiedDate,
  SharedRoomId,
  SharedUserId,
  Name,
} from '~/@types/common';
import { ChapterDTO } from '~/models/dto/ChapterDTO';
import type { PageDTO } from '~/models/dto/PageDTO';

export class ChapterModel {
  type: ChapterType;
  response: ChapterDTO;

  constructor(chapterInfo: ChapterDTO) {
    this.type = chapterInfo.type;

    // Origin
    this.response = chapterInfo;
  }

  get id(): ChapterId {
    return this.response.id;
  }

  get channelId(): ChannelId {
    return this.response.channelId;
  }

  get name(): Name {
    return this.response.name;
  }

  get modifiedDate(): ModifiedDate {
    return this.response.modifiedDate;
  }

  get color(): Color {
    return this.response.color;
  }

  get pageList(): PageDTO[] {
    return this.response.pageList;
  }

  get sharedDate(): SharedDate {
    return this.response.sharedDate;
  }

  get sharedRoomId(): SharedRoomId {
    return this.response.sharedRoomId;
  }

  get sharedUserId(): SharedUserId {
    return this.response.sharedUserId;
  }
}
