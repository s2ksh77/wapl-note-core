import type { ITagRepo } from "./TagRepoType";
export declare class TagRepo implements ITagRepo {
    prefix: string;
    createTag(tagList: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    deleteTag(targetList: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    updateTag(tagList: any): Promise<{
        status: number;
        data: {
            dto: any;
        };
    }>;
    getNoteTagList(pageId: any): Promise<{
        data: {
            dto: any;
        };
    }>;
    getAllSortedTagList(ChannelId: any): Promise<{
        data: {
            dto: any;
        };
    }>;
    getTagNoteList(tagId: any, userId: any, ChannelId: any): Promise<{
        data: {
            dto: any;
        };
    }>;
}
export declare const TagRepoImpl: TagRepo;
