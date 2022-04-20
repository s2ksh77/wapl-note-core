import { PageId, ChannelId, ChapterId } from '~/@types/common';
import { PageDTO } from '~/models/dto/PageDTO';

export interface IPageRepo {
  getAllPageList(channelId: ChannelId);
  getRecentList(channelId: ChannelId, num);
  getNoteInfoList(pageId: PageId, channelId: ChannelId);
  createPage(channelId: ChannelId, chapterId: ChapterId, dto: PageDTO);
  deletePage(channelId: ChannelId, chapterId: ChapterId, pageId: PageId);
  updatePage(channelId: ChannelId, chapterId: ChapterId, action: string, dto: PageDTO);
  createSharePage(channelId: ChannelId, dto: PageDTO);
  updateRecyclePage(channelId: ChannelId, action: string, dto: PageDTO);
  bookmarkPage(pageId: PageId);
  unbookmarkPage(pageId: PageId);
  getBookmarkInChannel(channelId: ChannelId);
  getBookmarkInUser();
}
