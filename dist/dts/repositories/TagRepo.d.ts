import API from "../lib/API";
import type { ITagRepo } from "./TagRepoType";
import { ChannelId, PageId } from "../@types/common";
import { TagDTO } from "../models/dto/TagDTO";
export declare class TagRepo implements ITagRepo {
    API: API;
    constructor();
    getAllTagList(channelId: ChannelId): Promise<import("axios").AxiosResponse<any, any>>;
    getTagList(pageId: PageId): Promise<import("axios").AxiosResponse<any, any>>;
    createTag(pageId: PageId, dto: TagDTO[]): Promise<import("axios").AxiosResponse<any, any>>;
    deleteTag(pageId: PageId, dto: TagDTO[]): Promise<import("axios").AxiosResponse<any, any>>;
    updateTag(pageId: PageId, dto: TagDTO[]): Promise<import("axios").AxiosResponse<any, any>>;
}
export declare const TagRepoImpl: TagRepo;
