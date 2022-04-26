import { ChannelId, ChapterId } from "../@types/common";
import { IChapterRepo } from "../repositories/ChapterRepoType";
export declare class ChapterStore {
    rootStore: any;
    repo: IChapterRepo;
    headerTitle: string;
    constructor(rootStore: any);
    setHeaderTitle(title: any): void;
    getChapterList(): Promise<[]>;
    getChapterInfoList(chapterId: ChapterId, channelId: ChannelId): Promise<any>;
}
