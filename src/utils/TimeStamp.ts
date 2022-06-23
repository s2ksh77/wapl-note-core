import moment from 'moment-timezone';

/**
 * 날짜를 같은 연월일을 생략한 12시간 형식으로 변환한다.
 * @param {string} time 2022-06-21T16:53:11 (java string date format)
 * @param {string} zone timezone
 * @returns 12시간 형식의 날짜
 */
export const get12HourFormat = (time: string, zone = 'Asia/Seoul'): string => {
  // zone은 서버에서 걍 localDateTime이어서 그 지역으로 시간을 주는 듯
  const timeToMoment = moment.tz(time, zone).format();
  const date = new Date(timeToMoment);
  const year = date.getFullYear();
  const mmdd = `${`0${date.getMonth() + 1}`.slice(-2)}.${`0${date.getDate()}`.slice(-2)}`;
  let hh = date.getHours();
  if (hh === 0) hh = 24; // 24시간 포멧으로 만들고 12시간 뺴기
  if (hh > 12) hh -= 12;

  let tsp;

  tsp = `${`0${hh}`.slice(-2)}:${`0${date.getMinutes()}`.slice(-2)}`;
  tsp = date.getHours() >= 12 ? `${mmdd} 오후 ${tsp}` : `${mmdd} 오전 ${tsp}`; // TODO: i18n
  if (year !== new Date().getFullYear()) tsp = `${year}.${tsp}`;

  return tsp;
};
