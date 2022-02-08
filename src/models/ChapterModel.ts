import { ChapterType } from '~/@types/chapter';
import { ChapterId, Color } from '~/@types/common';
import { ChapterDTO } from '~/models/dto/ChapterDTO';

export class ChapterModel {
  type: ChapterType;
  dto: ChapterDTO;

  constructor(chapterInfo: ChapterDTO) {
    this.type = chapterInfo.type;

    // Origin
    this.dto = chapterInfo;
  }

  get id(): ChapterId {
    return this.dto.id;
  }

  get color(): Color {
    return this.dto.color;
  }
}
