import { makeAutoObservable } from 'mobx';
import { ChannelId, PageId } from '~/@types/common';
import { PageModel } from '~/models';
import { PageRepoImpl } from '~/repositories';
import { IPageRepo } from '~/repositories/PageRepoType';

export class PageStore {
  rootStore;
  repo: IPageRepo;
  isLongPressed: boolean;
  pageInfo: PageModel;

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

  async getPageInfoList(pageId: PageId, channelId: ChannelId) {
    const res = await this.repo.getPageInfoList(pageId, channelId);
    this.pageInfo = res;
    return res;
  }

  async throwPage(channelId: ChannelId, dto: PageModel): Promise<DTO.PageInfo> {
    const res = await this.repo.updateRecyclePage(channelId, 'THROW', dto);
    return res;
  }

  async restorePage(channelId: ChannelId, dto: PageModel): Promise<DTO.PageInfo> {
    const res = await this.repo.updateRecyclePage(channelId, 'RESTORE', dto);
    return res;
  }
}
