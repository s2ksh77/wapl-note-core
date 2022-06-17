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
import { ChapterType } from '~/@types';
import { ChapterDTO } from '~/models/dto/ChapterDTO';
import type { PageDTO } from '~/models/dto/PageDTO';
import { makeAutoObservable } from 'mobx';

export class ChapterModel {
  response: Partial<ChapterDTO>;

  constructor(chapter?: Partial<ChapterDTO>) {
    // Origin
    this.response = chapter;
    makeAutoObservable(this);
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

  get type(): ChapterType {
    return this.response.type;
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
