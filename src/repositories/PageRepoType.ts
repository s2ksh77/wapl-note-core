import { PageId, ChannelId } from '~/@types/common';
import { PageDTO } from '~/models/dto/PageDTO';

export interface IPageRepo {
  getNoteInfoList(pageId: PageId, channelId: ChannelId);
  createPage(dto: PageDTO);
  deletePage(pageList);
  updatePage(updateDTO);
  createSharePage(pageList);
  throwPage(pageList);
  restorePage(pageList);
  bookmarkPage(pageId);
  unbookmarkPage(pageId);
  getbookmarkList(channelId: ChannelId);
  getRecentList(channelId: ChannelId, num);
}
