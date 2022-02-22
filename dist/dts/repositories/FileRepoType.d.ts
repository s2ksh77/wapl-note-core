export interface IFileRepo {
    createFileMeta(targetList: any): any;
    storageFileDeepCopy(fileId: any, workspaceId: any, channelId: any, userId: any): any;
    createUploadMeta(dto: any): any;
    createUploadStorage(fileId: any, file: any, onUploadProgress: any, workspaceId: any, channelId: any, userId: any): any;
    uploadFileGW(file: any, fileName: any, fileExtension: any, location: any, onUploadProgress: any, cancelSource: any, channelId: any, pageId: any): any;
    deleteFile(deleteFileId: any, channelId: any): any;
    deleteAllFile(fileList: any, channelId: any): any;
    getStorageVolume(): any;
    getDuplicateFile(fileName: any, fileExt: any, pageId: any): any;
    getRecycleBinAllFile(channelId: any): any;
}
