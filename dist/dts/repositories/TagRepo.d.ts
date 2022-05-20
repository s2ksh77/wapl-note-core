import API from "../lib/API";
import type { ITagRepo } from "./TagRepoType";
import { ChannelId, PageId, TagId } from "../@types/common";
import { TagDTO, TagListObjDTO } from "../models/dto/TagDTO";
import { PageDTO } from "../models";
export declare class TagRepo implements ITagRepo {
    API: API;
    constructor();
    getAllTagList(channelId: ChannelId): Promise<TagListObjDTO>;
    getTagList(pageId: PageId): Promise<TagDTO[]>;
    getTagPageList(tagId: TagId, channelId: ChannelId): Promise<PageDTO[]>;
    createTag(pageId: PageId, dto: Pick<TagDTO, 'name' | 'pageId'>[]): Promise<TagDTO[]>;
    deleteTag(pageId: PageId, dto: Pick<TagDTO, 'id' | 'pageId'>[]): Promise<void>;
    updateTag(pageId: PageId, dto: Pick<TagDTO, 'id' | 'name' | 'pageId'>[]): Promise<void>;
}
export declare const TagRepoImpl: TagRepo;
