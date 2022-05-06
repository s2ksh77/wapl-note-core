import { makeAutoObservable } from 'mobx';
import {} from '~/@types/common';
import type { TagListDTO } from '~/models/dto/TagDTO';

export class TagViewModel {
  response: TagListDTO;

  constructor(tagList: TagListDTO) {
    this.response = tagList;
    makeAutoObservable(this);
  }
}
