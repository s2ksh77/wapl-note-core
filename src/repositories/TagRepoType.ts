import { ChannelId, PageId } from '~/@types/common';
import { PageDTO } from '~/models';
import { TagDTO, TagListObjDTO } from '~/models/dto/TagDTO';

export interface ITagRepo {
  getAllTagList(channelId: ChannelId): Promise<TagListObjDTO>;
  getTagList(pageId: PageId): Promise<TagDTO[]>;
  getTagPageList(channelId: ChannelId, tagId: TagId): Promise<PageDTO[]>;
  createTag(pageId: PageId, dto: Pick<TagDTO, 'name' | 'pageId'>[]): Promise<TagDTO[]>;
  deleteTag(pageId: PageId, dto: Pick<TagDTO, 'id' | 'pageId'>[]): Promise<void>;
  updateTag(pageId: PageId, dto: Pick<TagDTO, 'id' | 'name' | 'pageId'>[]): Promise<void>;
}
