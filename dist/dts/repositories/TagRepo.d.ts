import API from "../lib/API";
import type { ITagRepo } from "./TagRepoType";
import { ChannelId, PageId } from "../@types/common";
import { TagDTO } from "../models/dto/TagDTO";
export declare class TagRepo implements ITagRepo {
    API: API;
    constructor();
    getAllTagList(channelId: ChannelId): Promise<any>;
    getTagList(pageId: PageId): Promise<any>;
    createTag(pageId: PageId, dto: TagDTO[]): Promise<any>;
    deleteTag(pageId: PageId, dto: TagDTO[]): Promise<any>;
    updateTag(pageId: PageId, dto: TagDTO[]): Promise<any>;
}
export declare const TagRepoImpl: TagRepo;
