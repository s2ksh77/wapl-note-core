import {
  ChannelId,
  ChapterId,
  Color,
  SharedDate,
  ModifiedDate,
  SharedRoomId,
  SharedUserId,
  Name,
  Type,
} from '~/@types/common';
import { ChapterDTO } from '~/models/dto/ChapterDTO';
import type { PageDTO } from '~/models/dto/PageDTO';
import { makeAutoObservable, observable } from 'mobx';

export class ChapterModel {
  response: ChapterDTO;

  constructor(chapter: ChapterDTO) {
    // Origin
    this.response = chapter;
    makeAutoObservable<ChapterModel>(this);
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

  get type(): Type {
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
