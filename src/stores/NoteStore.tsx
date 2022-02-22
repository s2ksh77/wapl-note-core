import React, { createContext, useContext } from 'react';
import { action, decorate, observable, runInAction } from 'mobx';
import { RoomStore, UserStore } from 'teespace-core';
import type { ChannelId, RoomId } from '~/@types/common';

type Props = {
  roomId: RoomId;
  channelId: ChannelId;
};

export class NoteStore {
  constants;

  constructor({ roomId, channelId }: Props) {
    this.constants = Object.freeze({
      roomId,
      channelId,
    });
  }
}
