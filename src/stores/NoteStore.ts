import React from 'react';
import { makeAutoObservable } from 'mobx';
import type { ChannelId } from '~/@types/common';
import { ISearchRepo } from '~/repositories/SearchRepoType';
import { SearchRepoImpl } from '~/repositories';
import Mark from 'mark.js';

export class NoteStore {
  rootStore;
  searchRepo: ISearchRepo;
  headerTitle = '';
  marker;
  searchKeyword = '';

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

  setMarker(el: HTMLElement): void {
    this.marker = new Mark(el);
  }

  mark(): void {
    this.marker.mark(this.searchKeyword, {
      accuracy: {
        value: 'partially',
        limiters: [],
      },
    });
  }

  unmark(option): void {
    this.marker.unmark(option);
  }

  setSearchKeyword(keyword: string): void {
    this.searchKeyword = keyword;
  }

  endSearching(): void {
    this.searchKeyword = '';
  }
}
