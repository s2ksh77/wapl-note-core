import { Color, PageId, WorkspaceId } from '~/@types/common';
import type { PageDTO } from '~/models/dto/PageDTO';

export class PageModel {
  dto: PageDTO;

  constructor(pageInfo: PageDTO) {
    this.dto = pageInfo;
  }

  get id(): PageId {
    return this.dto.id;
  }

  get color(): Color {
    return this.dto.color;
  }

  get workspaceId(): WorkspaceId {
    return this.dto.WS_ID;
  }
}
