import API from "../lib/API";
import type { ITagRepo } from "./TagRepoType";
import { ChannelId, PageId } from "../@types/common";
import { TagDTO, TagListDTO } from "../models/dto/TagDTO";
export declare class TagRepo implements ITagRepo {
    API: API;
    constructor();
    getAllTagList(channelId: ChannelId): Promise<TagListDTO>;
    getTagList(pageId: PageId): Promise<TagDTO[]>;
    createTag(pageId: PageId, dto: Pick<TagDTO, 'name' | 'pageId'>[]): Promise<TagDTO[]>;
    deleteTag(pageId: PageId, dto: Pick<TagDTO, 'id' | 'pageId'>[]): Promise<void>;
    updateTag(pageId: PageId, dto: Pick<TagDTO, 'id' | 'name' | 'pageId'>[]): Promise<void>;
}
export declare const TagRepoImpl: TagRepo;
