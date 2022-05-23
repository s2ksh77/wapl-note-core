import { RootStore } from './RootStore';
export interface IHeaderButton {
    action: string;
    onClick?: () => void;
}
export interface IHeaderInfo {
    title?: string;
    leftSide?: IHeaderButton[];
    rightSide?: IHeaderButton[];
}
export declare class UiStore {
    rootStore: RootStore;
    headerInfo: IHeaderInfo;
    isSearching: boolean;
    constructor(rootStore: RootStore);
    setHeaderInfo(headerInfo: IHeaderInfo): void;
    setHeaderTitle(title: string): void;
    setIsSearching(isSearching: boolean): void;
}
