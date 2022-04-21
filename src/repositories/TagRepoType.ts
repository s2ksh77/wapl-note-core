import { ChannelId, PageId } from '~/@types/common';
import { TagDTO } from '~/models/dto/TagDTO';

export interface ITagRepo {
  getAllTagList(channelId: ChannelId);
  getTagList(pageId: PageId);
  createTag(pageId: PageId, dto: TagDTO[]);
  deleteTag(pageId: PageId, dto: TagDTO[]);
  updateTag(pageId: PageId, dto: TagDTO[]);
}
