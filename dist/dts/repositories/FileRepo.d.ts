import type { IFileRepo } from "./FileRepoType";
export declare class FileRepo implements IFileRepo {
    prefix: string;
    storagePrefix: string;
    gatewayPrefix: string;
    drivePrefix: string;
    createFileMeta(targetList: any): Promise<any>;
    storageFileDeepCopy(fileId: any, workspaceId: any, channelId: any, userId: any): Promise<any>;
    createUploadMeta(dto: any): Promise<any>;
    createUploadStorage(fileId: any, file: any, onUploadProgress: any, workspaceId: any, channelId: any, userId: any): Promise<any>;
    uploadFileGW(file: any, fileName: any, fileExtension: any, location: any, onUploadProgress: any, cancelSource: any, channelId: any, pageId: any): Promise<any>;
    deleteFile(deleteFileId: any, channelId: any): Promise<any>;
    deleteAllFile(fileList: any, channelId: any): any;
    getStorageVolume(): Promise<any>;
    getDuplicateFile(fileName: any, fileExt: any, pageId: any): Promise<any>;
    getRecycleBinAllFile(channelId: any): Promise<any>;
}
export declare const FileRepoImpl: FileRepo;
