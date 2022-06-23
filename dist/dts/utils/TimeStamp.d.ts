/**
 * 날짜를 같은 연월일을 생략한 12시간 형식으로 변환한다.
 * @param {string} time 2022-06-21T16:53:11 (java string date format)
 * @param {string} zone timezone
 * @returns 12시간 형식의 날짜
 */
export declare const get12HourFormat: (time: string, zone?: string) => string;
