import { PageId, ChannelId, ChapterId } from '~/@types/common';
import { PageModel } from '~/models';
import { PageDTO } from '~/models/dto/PageDTO';
import { Action } from '~/@types/page';

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
  getRecentList(channelId: ChannelId, num): Promise<DTO.PageList>;
  getPageInfoList(pageId: PageId, channelId: ChannelId): Promise<DTO.PageInfo>;
  createPage(channelId: ChannelId, chapterId: ChapterId, dto: PageDTO);
  deletePage(channelId: ChannelId, chapterId: ChapterId, pageId: PageId);
  updatePage(
    channelId: ChannelId,
    chapterId: ChapterId,
    action: string,
    dto: PageDTO,
    isNewPage: boolean,
  );
  createSharePage(channelId: ChannelId, dto: PageDTO);
  updateRecyclePage(channelId: ChannelId, action: Action, dto: PageModel);
  bookmarkPage(pageId: PageId);
  unbookmarkPage(pageId: PageId);
  getBookmarkInChannel(channelId: ChannelId): Promise<DTO.PageList>;
  getBookmarkInUser();
}
