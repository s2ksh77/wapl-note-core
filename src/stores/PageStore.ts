import { makeAutoObservable } from 'mobx';
import { ChannelId } from '~/@types/common';
import { PageRepoImpl } from '~/repositories';
import { IPageRepo } from '~/repositories/PageRepoType';

export class PageStore {
  rootStore;
  repo: IPageRepo;
  isLongPressed: boolean;

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
}
