import type { ChannelId, RoomId } from "../@types/common";
declare type Props = {
    roomId: RoomId;
    channelId: ChannelId;
};
export declare class NoteStore {
    constants: any;
    constructor({ roomId, channelId }: Props);
}
export {};
