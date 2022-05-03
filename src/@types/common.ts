import { TagDTO } from '~/models/dto/TagDTO';

export type ChannelId = string | null;
export type UserId = string | null;
export type ChapterId = string | null;
export type WorkspaceId = string | null;
export type RoomId = string;
export type ChannelType = string | null;
export type UserName = string | null;
export type Color = string | null;
export type PageId = string | null;
export type SharedDate = string | null;
export type SharedRoomId = string | null;
export type SharedUserId = string | null;
export type Name = string | null;
export type CreatedDate = string | null;
export type ModifiedDate = string | null;
export type RestoreChapterId = string | null;
export type EditingUserId = string | null;
export type Favorite = boolean;
export type Content = string | null;
export type UpdatedUserId = string | null;
export type Type = string | null;
export type TextContent = string | null;
export type TagList = TagDTO[] | null;

export const baseUrl = 'http://192.168.151.53:8282'; // for test
export const prefix = '/apis/v1';

export enum NoteViewType {
  MyNote = 'MyNote',
  TalkNote = 'TalkNote',
  SharedNote = 'SharedNote',
}

export enum SelectType {
  Checkbox = 'Checkbox',
  Radio = 'Radio',
}

export enum MenuType {
  TALKROOM = 'talk',
  CHAPTER = 'chapter',
  PAGE = 'page',
  TAG = 'tag',
}
