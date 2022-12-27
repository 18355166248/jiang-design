import { GenerateConfig } from '../genetate';

export type NullableDateType<DateType> = DateType | null | undefined;

export function getWeekStartDate<DateType>(
  locale: string,
  generateConfig: GenerateConfig<DateType>,
  value: DateType,
) {
  const weekFirstDay = generateConfig.locale.getWeekFirstDay(locale);
  const monthStartDate = generateConfig.setDate(value, 1);
  const startDateWeekDay = generateConfig.getWeekDay(monthStartDate);

  let alignStartDate = generateConfig.addDate(monthStartDate, weekFirstDay - startDateWeekDay);

  if (
    generateConfig.getMonth(alignStartDate) === generateConfig.getMonth(value) &&
    generateConfig.getDate(alignStartDate) > 1
  ) {
    alignStartDate = generateConfig.addDate(alignStartDate, -7);
  }

  return alignStartDate;
}

export function isSameYear<DateType>(
  generateConfig: GenerateConfig<DateType>,
  year1: NullableDateType<DateType>,
  year2: NullableDateType<DateType>,
) {
  return generateConfig.getYear(year1) === generateConfig.getYear(year2);
}

export function isSameMonth<DateType>(
  generateConfig: GenerateConfig<DateType>,
  month1: NullableDateType<DateType>,
  month2: NullableDateType<DateType>,
) {
  return (
    isSameYear(generateConfig, month1, month2) &&
    generateConfig.getMonth(month1) === generateConfig.getMonth(month2)
  );
}

export function isSameDate<DateType>(
  generateConfig: GenerateConfig<DateType>,
  date1: NullableDateType<DateType>,
  date2: NullableDateType<DateType>,
) {
  return (
    generateConfig.getYear(date1!) === generateConfig.getYear(date2!) &&
    generateConfig.getMonth(date1!) === generateConfig.getMonth(date2!) &&
    generateConfig.getDate(date1!) === generateConfig.getDate(date2!)
  );
}
