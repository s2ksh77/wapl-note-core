import { makeAutoObservable } from 'mobx';
import { PageId, TagId } from '~/@types/common';
import type { TagDTO } from '~/models/dto/TagDTO';

export class TagModel {
  response: TagDTO;

  constructor(tag: TagDTO) {
    this.response = tag;
    makeAutoObservable(this);
  }

  get id(): TagId {
    return this.response.id;
  }

  get name(): string {
    return this.response.name;
  }

  get pageId(): PageId {
    return this.response.name;
  }

  get tagCount(): number {
    return this.response.tagCount;
  }
}
