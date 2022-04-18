import React, { createContext, useContext } from 'react';
import { action, observable, runInAction } from 'mobx';
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
