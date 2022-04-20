import API from "../lib/API";
import type { ITagRepo } from "./TagRepoType";
export declare class TagRepo implements ITagRepo {
    API: API;
    constructor();
    createTag(tagList: any): Promise<import("axios").AxiosResponse<any, any>>;
    deleteTag(targetList: any): Promise<import("axios").AxiosResponse<any, any>>;
    updateTag(tagList: any): Promise<import("axios").AxiosResponse<any, any>>;
    getNoteTagList(pageId: any): Promise<import("axios").AxiosResponse<any, any>>;
    getAllSortedTagList(ChannelId: any): Promise<import("axios").AxiosResponse<any, any>>;
    getTagNoteList(tagId: any, userId: any, ChannelId: any): Promise<import("axios").AxiosResponse<any, any>>;
}
export declare const TagRepoImpl: TagRepo;
