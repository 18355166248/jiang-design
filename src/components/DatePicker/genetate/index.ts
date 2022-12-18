export type GenerateConfig<DateType> = {
  // Get
  getWeekDay: (value: DateType) => number;
  getSecond: (value: DateType) => number;
  getMinute: (value: DateType) => number;
  getHour: (value: DateType) => number;
  getDate: (value: DateType) => number;
  getMonth: (value: DateType) => number;
  getYear: (value: DateType) => number;
  getNow: () => DateType;
  getFixedDate: (fixed: string) => DateType;
  getEndDate: (value: DateType) => DateType;

  // Set
  addYear: (value: DateType, diff: number) => DateType;
  addMonth: (value: DateType, diff: number) => DateType;
  addDate: (value: DateType, diff: number) => DateType;
  setYear: (value: DateType, year: number) => DateType;
  setMonth: (value: DateType, month: number) => DateType;
  setDate: (value: DateType, date: number) => DateType;
  setHour: (value: DateType, hour: number) => DateType;
  setMinute: (value: DateType, minute: number) => DateType;
  setSecond: (value: DateType, second: number) => DateType;

  // Compare
  isAfter: (date1: DateType, date2: DateType) => boolean;
  isValidate: (date: DateType) => boolean;
};
