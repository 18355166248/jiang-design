import type { Moment } from 'moment';
import moment from 'moment';
import { GenerateConfig } from '.';

const generateConfig: GenerateConfig<Moment> = {
  // get
  getNow: () => moment(),
  getFixedDate: (string) => moment(string, 'YYYY-MM-DD'),
  getEndDate: (date) => {
    const clone = date.clone();
    return clone.endOf('month');
  },
  getWeekDay: (date) => {
    const clone = date.clone().locale('en_US');
    return clone.weekday() + clone.localeData().firstDayOfWeek();
  },
  getYear: (date) => date.year(),
  getMonth: (date) => date.month(),
  getDate: (date) => date.date(),
  getHour: (date) => date.hour(),
  getMinute: (date) => date.minute(),
  getSecond: (date) => date.second(),

  // set
  addYear: (date, diff) => {
    const clone = date.clone();
    return clone.add(diff, 'year');
  },
  addMonth: (date, diff) => {
    const clone = date.clone();
    return clone.add(diff, 'month');
  },
  addDate: (date, diff) => {
    const clone = date.clone();
    return clone.add(diff, 'day');
  },
  setYear: (date, year) => {
    const clone = date.clone();
    return clone.year(year);
  },
  setMonth: (date, month) => {
    const clone = date.clone();
    return clone.month(month);
  },
  setDate: (date, num) => {
    const clone = date.clone();
    return clone.date(num);
  },
  setHour: (date, hour) => {
    const clone = date.clone();
    return clone.hour(hour);
  },
  setMinute: (date, minute) => {
    const clone = date.clone();
    return clone.minute(minute);
  },
  setSecond: (date, second) => {
    const clone = date.clone();
    return clone.second(second);
  },

  // Compare
  isAfter: (date1, date2) => date1.isAfter(date2),
  isValidate: (date) => date.isValid(),
};

export default generateConfig;
