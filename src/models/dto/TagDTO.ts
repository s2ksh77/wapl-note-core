export interface TagDTO {
  id: string;
  name: string;
  pageId?: string;
  tagCount?: number;
}
export interface IndexedTagDTO {
  [key: string]: TagDTO[];
}
export interface TagListObjDTO {
  KOR: IndexedTagDTO | null;
  ENG: IndexedTagDTO | null;
  NUM: IndexedTagDTO | null;
  ETC: IndexedTagDTO | null;
}
