import { makeAutoObservable } from 'mobx';
import type { TagListObjDTO } from '~/models/dto/TagDTO';

export class TagModel {
  response: TagListObjDTO;

  constructor(sortedTagList: TagListObjDTO) {
    this.response = sortedTagList;
    makeAutoObservable(this);
  }
}
