import { API } from 'teespace-core';
import type { ChannelId, PageId } from '~/@types/common';
import { PageDTO } from '~/models/dto/PageDTO';
import type { IPageRepo } from '~/repositories/PageRepoType';

export class PageRepo implements IPageRepo {
  prefix = 'note-api';

  async getNoteInfoList(pageId: PageId, channelId: ChannelId) {
    try {
      return await API.Get(
        `${this.prefix}/noteinfo?action=List&note_id=${pageId}&note_channel_id=${channelId}`,
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createPage(dto: PageDTO) {
    try {
      return API.Post(`${this.prefix}/note`, {
        dto,
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async deletePage(pageList) {
    try {
      return await API.Post(`${this.prefix}/note?action=Delete`, {
        dto: {
          noteList: pageList,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async updatePage(dto: PageDTO) {
    try {
      return await API.Put(`${this.prefix}/note?action=Update`, {
        dto,
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async createSharePage(pageList) {
    return API.post(`${this.prefix}/noteshare`, {
      dto: {
        noteList: pageList,
      },
    });
  }

  async throwPage(pageList) {
    // pageList -> pageId 리스트
    // pageList.forEach(page => {
    //   page.USER_ID = this.USER_ID;
    //   page.WS_ID = this.WS_ID;
    //   page.note_channel_id = this.chId;
    //   page.parent_notebook = null;
    // });
    try {
      return await API.post(`${this.prefix}/noteRecycleBin?action=Update`, {
        dto: {
          noteList: pageList,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async restorePage(pageList) {
    // pageList -> pageId 리스트, chapterId 리스트
    // [{note_id: asdf, parent_notebook : asdf} ... ]
    // pageList.forEach(page => {
    //   page.note_channel_id = this.chId;
    //   page.USER_ID = this.USER_ID;
    //   page.WS_ID = this.WS_ID;
    // });
    try {
      return await API.post(`${this.prefix}/noteRecycleBin?action=Update`, {
        dto: {
          noteList: pageList,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async bookmarkPage(pageId) {
    try {
      return await API.post(`${this.prefix}/bookmark`, {
        dto: {
          note_id: pageId,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async unbookmarkPage(pageId) {
    try {
      return await API.post(`${this.prefix}/bookmark?action=Delete`, {
        dto: {
          note_id: pageId,
        },
      });
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getbookmarkList(channelId: ChannelId) {
    const query = channelId ? `&note_channel_id=${channelId}` : '';
    try {
      return await API.get(`${this.prefix}/bookmark?action=List${query}`);
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }

  async getRecentList(channelId: ChannelId, num) {
    const query = num ? `&rownum=${num}` : '';
    try {
      return await API.get(
        `${this.prefix}/noteRecent?action=List&note_channel_id=${channelId}${query}`,
      );
    } catch (e) {
      throw Error(JSON.stringify(e));
    }
  }
}

export const PageRepoImpl = new PageRepo();
