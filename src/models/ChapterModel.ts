import { ChapterType } from '~/@types/chapter';
import {
  ChannelId,
  ChapterId,
  Color,
  SharedDate,
  SharedRoomName,
  SharedUserId,
  Title,
  UserId,
} from '~/@types/common';
import { ChapterDTO } from '~/models/dto/ChapterDTO';
import type { PageDTO } from '~/models/dto/PageDTO';

export class ChapterModel {
  type: ChapterType;
  dto: ChapterDTO;

  constructor(chapterInfo: ChapterDTO) {
    this.type = chapterInfo.type;

    // Origin
    this.dto = chapterInfo;
  }

  get id(): ChapterId {
    return this.dto.id;
  }

  get color(): Color {
    return this.dto.color;
  }

  get pageList(): PageDTO[] {
    return this.dto.children;
  }

  get sharedDate(): SharedDate {
    return this.dto.shared_date;
  }

  get sharedRoomName(): SharedRoomName {
    return this.dto.shared_room_name;
  }

  get sharedUserId(): SharedUserId {
    return this.dto.shared_user_id;
  }

  get userId(): UserId {
    return this.dto.USER_ID;
  }

  get messengerId(): string {
    return this.dto.messenger_id;
  }

  get channelId(): ChannelId {
    return this.dto.note_channel_id;
  }

  get title(): Title {
    return this.dto.text;
  }
}
