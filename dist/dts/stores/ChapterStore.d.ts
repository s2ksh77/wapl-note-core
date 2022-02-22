import { ChapterId } from "../@types/common";
import { ChapterRepo } from "../repositories/ChapterRepo";
export declare class ChapterStore {
    currentChapterId: ChapterId;
    repo: ChapterRepo;
    constructor();
}
