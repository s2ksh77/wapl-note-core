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
export type SharedRoomName = string | null;
export type SharedUserId = string | null;
export type Title = string | null;
export type CreatedDate = string | null;
export type DeletedDate = string | null;

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
