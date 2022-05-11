import { PageId, TagId } from "../@types/common";
import type { TagDTO } from "./dto/TagDTO";
export declare class TagModel {
    response: TagDTO;
    constructor(tag: TagDTO);
    get id(): TagId;
    get name(): string;
    get pageId(): PageId;
    get tagCount(): number;
}
