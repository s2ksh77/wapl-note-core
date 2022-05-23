import React from 'react';
import { makeAutoObservable } from 'mobx';
import type { ChannelId } from '~/@types/common';
import { ISearchRepo } from '~/repositories/SearchRepoType';
import { SearchRepoImpl } from '~/repositories';

export class NoteStore {
  rootStore;
  searchRepo: ISearchRepo;
  headerTitle = '';

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.searchRepo = SearchRepoImpl;
  }

  async getSearchList(
    searchKey: string,
    channelId: ChannelId,
  ): Promise<DTO.SearchResponse> {
    const res = await this.searchRepo.getSearchList(searchKey, channelId); // no model
    return res;
  }
}
