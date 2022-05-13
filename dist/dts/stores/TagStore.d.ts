import { ChannelId, TagId, PageId } from "../@types/common";
import { TagRepo } from "../repositories";
import { TagDTO, TagListObjDTO } from "../models/dto/TagDTO";
import { TagModel } from "../models/TagModel";
export declare class TagStore {
    sortedTagList: TagListObjDTO;
    pageTagList: TagModel[];
    repo: TagRepo;
    constructor();
    fetchSortedTagList(channelId: ChannelId): Promise<void>;
    fetchPageTagList(pageId: PageId): Promise<void>;
    createTag(pageId: PageId, tagName: string): Promise<TagDTO[]>;
    deleteTag(pageId: PageId, tagId: TagId): Promise<void>;
    updateTag(pageId: PageId, tagId: TagId, newTagName: string): Promise<void>;
}