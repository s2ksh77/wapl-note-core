import { makeAutoObservable } from 'mobx';
import { ChannelId, TagId, PageId } from '~/@types/common';
import { TagRepo, TagRepoImpl } from '~/repositories';
import { TagDTO, TagListObjDTO } from '~/models/dto/TagDTO';

export class TagStore {
  sortedTagList: TagListObjDTO = { KOR: null, ENG: null, NUM: null, ETC: null };
  pageTagList: TagDTO[];
  repo: TagRepo;

  constructor() {
    makeAutoObservable(this);
    this.repo = TagRepoImpl;
  }

  async fetchSortedTagList(channelId: ChannelId): Promise<void> {
    this.sortedTagList = await this.repo.getAllTagList(channelId);
  }

  async fetchPageTagList(pageId: PageId): Promise<void> {
    this.pageTagList = await this.repo.getTagList(pageId);
  }

  async createTag(pageId: PageId, tagName: string): Promise<TagDTO[]> {
    const dto = [{ pageId, name: tagName }];
    const res = await this.repo.createTag(pageId, dto);
    return res;
  }

  async deleteTag(pageId: PageId, tagId: TagId): Promise<void> {
    const dto = [{ id: tagId, pageId }];
    await this.repo.deleteTag(pageId, dto);
  }

  async updateTag(pageId: PageId, tagId: TagId, newTagName: string): Promise<void> {
    const dto = [{ id: tagId, name: newTagName, pageId }];
    await this.repo.updateTag(pageId, dto);
  }
}
