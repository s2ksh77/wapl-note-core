import type { IFileRepo } from "./FileRepoType";
export declare class FileRepo implements IFileRepo {
    prefix: string;
    storagePrefix: string;
    gatewayPrefix: string;
    drivePrefix: string;
}
export declare const FileRepoImpl: FileRepo;
