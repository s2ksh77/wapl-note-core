import { makeAutoObservable } from 'mobx';

export class TagStore {
  constructor() {
    makeAutoObservable(this);
  }
}
