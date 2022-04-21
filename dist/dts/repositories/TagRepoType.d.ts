import { ChannelId, PageId } from "../@types/common";
import { TagDTO } from "../models/dto/TagDTO";
export interface ITagRepo {
    getAllTagList(channelId: ChannelId): any;
    getTagList(pageId: PageId): any;
    createTag(pageId: PageId, dto: TagDTO[]): any;
    deleteTag(pageId: PageId, dto: TagDTO[]): any;
    updateTag(pageId: PageId, dto: TagDTO[]): any;
}
