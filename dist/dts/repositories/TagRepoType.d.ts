export interface ITagRepo {
    createTag(tagList: any): any;
    deleteTag(tagList: any): any;
    updateTag(tagList: any): any;
    getNoteTagList(pageId: any): any;
    getAllSortedTagList(ChannelId: any): any;
    getTagNoteList(tagId: any, userId: any, ChannelId: any): any;
}
