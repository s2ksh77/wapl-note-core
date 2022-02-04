export interface ITagRepo {
  createTag(tagList);
  deleteTag(tagList);
  updateTag(tagList);
  getNoteTagList(pageId);
  getAllSortedTagList(ChannelId);
  getTagNoteList(tagId, userId, ChannelId);
}
