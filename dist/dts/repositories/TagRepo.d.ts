import type { ITagRepo } from "./TagRepoType";
export declare class TagRepo implements ITagRepo {
    prefix: string;
    createTag(tagList: any): Promise<any>;
    deleteTag(targetList: any): Promise<any>;
    updateTag(tagList: any): Promise<any>;
    getNoteTagList(pageId: any): Promise<any>;
    getAllSortedTagList(ChannelId: any): Promise<any>;
    getTagNoteList(tagId: any, userId: any, ChannelId: any): Promise<any>;
}
export declare const TagRepoImpl: TagRepo;
