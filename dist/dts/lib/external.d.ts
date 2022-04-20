import type { i18n } from 'i18next';
/**
 * verdaccio 서버에 패키지가 올라가있는 관계로 ( 깃 주소가 다름 )
 * teespace-core 및 teespace-drive-app 에 있는 함수는 임시 dummy로 활용하여 사용해야 함
 * 필요한 함수 복사해올 예정
 * @author soohyun
 */
export declare const EventBus: {
    on: (eventName: string | string[], handler: (param?: any) => void) => number;
    off: (eventName: string, handlerId: number) => void;
    once: (eventName: string, handler: (param?: any) => void) => void;
    dispatch: (eventName: any, params: any) => any;
};
export declare const WWMS: {
    addHandler: (appKey: string, handlerName: string, handler: (mqtt: any) => void) => void;
};
export declare const useI18nInit: (i18n: i18n) => void;
