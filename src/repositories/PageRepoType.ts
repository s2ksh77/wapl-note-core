import { PageId, ChannelId, ChapterId } from '~/@types/common';
import { PageModel } from '~/models';

export type PageResponseArray = {
  success: boolean;
  response?: PageModel[] | null;
  error?: string | null;
};

export type PageResponseObject = {
  success: boolean;
  response?: PageModel | null;
  error?: string | null;
};
export interface IPageRepo {
  getAllPageList(channelId: ChannelId): Promise<DTO.PageList>;
  getRecentList(channelId: ChannelId, num): Promise<DTO.PageInfo>;
  getNoteInfoList(pageId: PageId, channelId: ChannelId): Promise<DTO.GEtPageInfoResponse>;
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
