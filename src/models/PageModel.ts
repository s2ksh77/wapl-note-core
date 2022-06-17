import { makeAutoObservable } from 'mobx';
import {
  ChannelId,
  ChapterId,
  Content,
  CreatedDate,
  CreatedUserId,
  DeletedDate,
  EditingUserId,
  Favorite,
  FileList,
  PageId,
  ModifiedDate,
  Name,
  Read,
  RestoreChapterId,
  Shared,
  SharedRoomId,
  SharedUserId,
  TagList,
  TextContent,
  UpdatedUserId,
  UserName,
  Type,
  Color,
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

  get chapterId(): ChapterId {
    return this.response.chapterId;
  }

  get color(): Color {
    return this.response.color;
  }

  get content(): Content {
    return this.response.content;
  }

  set content(data: Content) {
    this.response.content = data;
  }

  get createdDate(): CreatedDate {
    return this.response.createdDate;
  }

  get createdUserId(): CreatedUserId {
    return this.response.createdUserId;
  }

  get deletedDate(): DeletedDate {
    return this.response.deletedDate;
  }

  get editingUserId(): EditingUserId {
    return this.response.editingUserId;
  }

  set editingUserId(editingUserId: EditingUserId) {
    this.response.editingUserId = editingUserId;
  }

  get favorite(): Favorite {
    return this.response.favorite;
  }

  set favorite(favorite: Favorite) {
    this.response.favorite = favorite;
  }

  get fileList(): FileList {
    return this.response.fileList;
  }

  get id(): PageId {
    return this.response.id;
  }

  get modifiedDate(): ModifiedDate {
    return this.response.modifiedDate;
  }

  get name(): Name {
    return this.response.name;
  }

  set name(name: Name) {
    this.response.name = name;
  }

  get read(): Read {
    return this.response.read;
  }

  get restoreChapterId(): RestoreChapterId {
    return this.response.restoreChapterId;
  }

  set restoreChapterId(chapterId) {
    this.response.restoreChapterId = chapterId;
  }

  get shared(): Shared {
    return this.response.shared;
  }

  get sharedDate(): CreatedDate {
    return this.response.shared ? this.response.createdDate : null;
  }

  get sharedRoomId(): SharedRoomId {
    return this.response.sharedRoomId;
  }

  get sharedUserId(): SharedUserId {
    return this.response.sharedUserId;
  }

  get tagList(): TagList {
    return this.response.tagList;
  }

  get textContent(): TextContent {
    return this.response.textContent;
  }

  set textContent(data: string) {
    this.response.textContent = data;
  }

  get type(): Type {
    return this.response.type;
  }

  get updatedUserId(): UpdatedUserId {
    return this.response.updatedUserId;
  }

  get userName(): UserName {
    return this.response.userName;
  }
}
