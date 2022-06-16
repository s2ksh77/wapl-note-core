import { TagDTO } from "../models/dto/TagDTO";
export declare type ChannelId = string | null;
export declare type CreatedUserId = string | null;
export declare type UserId = string | null;
export declare type ChapterId = string | null;
export declare type WorkspaceId = string | null;
export declare type RoomId = string;
export declare type ChannelType = string | null;
export declare type UserName = string | null;
export declare type Color = string | null;
export declare type PageId = string | null;
export declare type Read = boolean;
export declare type Shared = boolean;
export declare type SharedDate = string | null;
export declare type SharedRoomId = string | null;
export declare type SharedUserId = string | null;
export declare type Name = string | null;
export declare type CreatedDate = string | null;
export declare type DeletedDate = string | null;
export declare type ModifiedDate = string | null;
export declare type RestoreChapterId = string | null;
export declare type EditingUserId = string | null;
export declare type Favorite = boolean;
export declare type Content = string | null;
export declare type UpdatedUserId = string | null;
export declare type Type = string | null;
export declare type TextContent = string | null;
export declare type TagList = TagDTO[] | null;
export declare type FileList = any;
export declare type TagId = string;
export declare const baseUrl = "http://192.168.151.53:8080";
export declare const prefix = "/apis/v1";
export declare enum NoteViewType {
    MyNote = "MyNote",
    TalkNote = "TalkNote",
    SharedNote = "SharedNote"
}
export declare enum SelectType {
    Checkbox = "Checkbox",
    Radio = "Radio"
}
export declare enum MenuType {
    TALKROOM = "talk",
    CHAPTER = "chapter",
    PAGE = "page",
    TAG = "tag"
}
