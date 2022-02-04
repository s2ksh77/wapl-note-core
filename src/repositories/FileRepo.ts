import { API } from 'teespace-core';
import type { IFileRepo } from '~/repositories/FileRepoType';

export class FileRepo implements IFileRepo {
  prefix = 'note-api';
  storagePrefix = 'Storage';
  gatewayPrefix = 'gateway-api';
  drivePrefix = 'drive-api';

  async createFileMeta(targetList) {
    return API.post(`${this.prefix}/noteFileMeta`, {
      dto: {
        fileList: targetList,
      },
    });
  }

  async storageFileDeepCopy(fileId, workspaceId, channelId, userId) {
    const targetSRC = `${this.storagePrefix}/StorageFile?action=Copy&Type=Deep`;
    try {
      return API.put(targetSRC, {
        dto: {
          workspace_id: workspaceId,
          channel_id: channelId,
          storageFileInfo: {
            user_id: userId,
            file_id: fileId,
          },
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createUploadMeta(dto) {
    try {
      return API.post(`${this.prefix}/noteFile`, dto);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createUploadStorage(
    fileId,
    file,
    onUploadProgress,
    workspaceId,
    channelId,
    userId,
  ) {
    try {
      return API.post(
        `${this.storagePrefix}/StorageFile?action=Create&fileID=${fileId}&workspaceID=${workspaceId}&channelID=${channelId}&userID=${userId}`,
        file,
        {
          headers: {
            'content-type': 'multipart/form-data',
          },
          xhrFields: {
            withCredentials: true,
          },
          onUploadProgress,
        },
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async uploadFileGW(
    file,
    fileName,
    fileExtension,
    location,
    onUploadProgress,
    cancelSource,
    channelId,
    pageId,
  ) {
    const uploadFile = new File([file], `${fileName}.${fileExtension}`);

    return API.post(
      `/${this.gatewayPrefix}/upload?channel=${channelId}&name=${fileName}&ext=${fileExtension}&location=${location}&dir=` +
        `${pageId}`,
      uploadFile,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
        xhrFields: {
          withCredentials: true,
        },
        onUploadProgress,
        cancelToken: cancelSource.token,
      },
    );
  }

  async deleteFile(deleteFileId, channelId) {
    try {
      return await API.post(`${this.prefix}/noteFile?action=Delete`, {
        dto: {
          type: 'hard',
          file: [
            {
              channel: channelId,
              file_parent_id: channelId,
              file_id: deleteFileId,
              is_folder: 'N',
            },
          ],
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  deleteAllFile(fileList, channelId) {
    const deleteFileList = [];
    if (fileList) {
      fileList.forEach(file => {
        deleteFileList.push({
          channel: channelId,
          file_parent_id: channelId,
          file_id: file.file_id,
          is_folder: 'N',
        });
      });
      return API.post(`${this.drivePrefix}/files?action=Delete`, {
        dto: {
          type: 'hard',
          file: deleteFileList,
        },
      });
    }
    return Promise.resolve();
  }

  async getStorageVolume() {
    try {
      return API.get(`/${this.storagePrefix}/StorageVolumeDomain`);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getDuplicateFile(fileName, fileExt, pageId) {
    let query = `/${this.drivePrefix}/files/${pageId}?`;
    query += `type=0`;
    query += `&name=${fileName}`;
    if (fileExt) query += `&ext=${fileExt}`;
    try {
      return API.get(query);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getRecycleBinAllFile(channelId) {
    try {
      return await API.get(
        `${this.prefix}/noteRecycleBinFile?action=List&note_channel_id=${channelId}`,
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const FileRepoImpl = new FileRepo();
