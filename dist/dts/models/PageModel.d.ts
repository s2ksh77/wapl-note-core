import { Color, PageId, WorkspaceId } from "../@types/common";
import type { PageDTO } from "./dto/PageDTO";
export declare class PageModel {
    dto: PageDTO;
    constructor(pageInfo: PageDTO);
    get id(): PageId;
    get color(): Color;
    get workspaceId(): WorkspaceId;
}
