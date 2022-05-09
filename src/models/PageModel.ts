import { makeAutoObservable } from 'mobx';
import {
  PageId,
  ChannelId,
  Name,
  CreatedDate,
  ModifiedDate,
  SharedDate,
  SharedRoomId,
  SharedUserId,
  Favorite,
  EditingUserId,
  UserName,
  RestoreChapterId,
  Content,
  UpdatedUserId,
  Type,
  TextContent,
} from '~/@types/common';
import type { PageDTO } from '~/models/dto/PageDTO';

export class PageModel {
  response: Partial<PageDTO>;

  constructor(page: Partial<PageDTO>) {
    this.response = page;
    makeAutoObservable(this);
  }

  get channelId(): ChannelId {
    return this.response.channelId;
  }

  get name(): Name {
    return this.response.name;
  }

  get createdDate(): CreatedDate {
    return this.response.createdDate;
  }

  get modifiedDate(): ModifiedDate {
    return this.response.modifiedDate;
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

  get restoreChapterId(): RestoreChapterId {
    return this.response.restoreChapterId;
  }

  get userName(): UserName {
    return this.response.userName;
  }

  get editingUserId(): EditingUserId {
    return this.response.editingUserId;
  }

  get favorite(): Favorite {
    return this.response.favorite;
  }

  get content(): Content {
    return this.response.content;
  }

  get updatedUserId(): UpdatedUserId {
    return this.response.updatedUserId;
  }

  get type(): Type {
    return this.response.type;
  }

  get textContent(): TextContent {
    return this.response.textContent;
  }
}
