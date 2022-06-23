import moment from 'moment-timezone';

/**
 * 날짜를 같은 연월일을 생략한 12시간 형식으로 변환한다.
 * @param {string} time 2022-06-21T16:53:11 (java string date format)
 * @param {string} zone timezone
 * @returns 12시간 형식의 날짜
 */
export const get12HourFormat = (time: string, zone = 'Asia/Seoul'): string => {
  // zone은 서버에서 걍 localDateTime이어서 그 지역으로 시간을 주는 듯
  const timeToMoment = moment.tz(time, zone);
  const today = new Date();

  let tsp = timeToMoment.format(`${timeToMoment.hour() < 12 ? '오전' : '오후'} h:mm`);
  if (timeToMoment.year() !== today.getFullYear())
    tsp = `${timeToMoment.format('YYYY.MM.DD')} ${tsp}`;
  else if (
    timeToMoment.month() !== today.getMonth() ||
    timeToMoment.date() !== today.getDate()
  )
    tsp = `${timeToMoment.format('MM.DD')} ${tsp}`;

  return tsp;
};
