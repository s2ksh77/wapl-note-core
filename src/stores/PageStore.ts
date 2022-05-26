import { makeAutoObservable } from 'mobx';
import { ChannelId, ChapterId, PageId } from '~/@types/common';
import { PageModel } from '~/models';
import { PageRepoImpl } from '~/repositories';
import { IPageRepo } from '~/repositories/PageRepoType';
import { Action } from '~/@types/page';

export class PageStore {
  rootStore;
  repo: IPageRepo;
  isLongPressed = false;
  currentId = '';
  pageInfo: PageModel = new PageModel({});

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.repo = PageRepoImpl;
  }

  changeMode(): void {
    this.isLongPressed = !this.isLongPressed;
  }

  async getBookmarkInChannel(channelId: ChannelId) {
    const res = await this.repo.getBookmarkInChannel(channelId);
    return res;
  }

  async fetchPageInfoList(pageId: PageId, channelId: ChannelId): Promise<void> {
    const res = await this.repo.getPageInfoList(pageId, channelId);
    this.pageInfo = res;
  }

  async getRecentList(channelId: ChannelId, num?: number) {
    const res = await this.repo.getRecentList(channelId, num);
    return res;
  }

  async renamePage(
    channelId: ChannelId,
    chapterId: ChapterId,
    dto: PageModel,
  ): Promise<DTO.PageInfo> {
    const res = await this.repo.updatePage(channelId, chapterId, Action.RENAME, dto);
    return res;
  }

  async throwPage(channelId: ChannelId, dto: PageModel): Promise<DTO.PageInfo> {
    const res = await this.repo.updateRecyclePage(channelId, Action.THROW, dto);
    return res;
  }

  async restorePage(channelId: ChannelId, dto: PageModel): Promise<DTO.PageInfo> {
    const res = await this.repo.updateRecyclePage(channelId, Action.RESTORE, dto);
    return res;
  }

  async bookmarkPage(pageId: PageId) {
    const res = await this.repo.bookmarkPage(pageId);
    return res;
  }

  async unbookmarkPage(pageId: PageId) {
    const res = await this.repo.unbookmarkPage(pageId);
    return res;
  }

  async savePage(
    channelId: ChannelId,
    chapterId: ChapterId,
    dto: PageModel,
    isNewPage: boolean,
  ): Promise<DTO.PageInfo> {
    const res = await this.repo.updatePage(
      channelId,
      chapterId,
      Action.EDIT_DONE,
      dto,
      isNewPage,
    );
    return res;
  }
}
