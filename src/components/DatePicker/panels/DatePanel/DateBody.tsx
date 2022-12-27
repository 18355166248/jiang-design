import React, { FC } from 'react';
import { WEEK_DAY_COUNT, DATE_ROW_COUNT } from '../../config';
import { GenerateConfig } from '../../genetate';
import { getWeekStartDate, isSameDate, isSameMonth } from '../../utils/dateUtil';
import PanelBody from '../PanelBody';

export type DateBodyProps<DateType> = {
  generateConfig: GenerateConfig<DateType>;
  prefixCls: string;
};

function DateBody<DateType>(props: DateBodyProps<DateType>) {
  const { prefixCls, generateConfig } = props;

  const cellPrefixCls = `${prefixCls}-cell`;

  const locale = 'zh_CN';

  const now = generateConfig.getNow();

  const baseDate = getWeekStartDate(locale, generateConfig, now);

  const headerCells: React.ReactNode[] = [];

  const weekFirstDay = generateConfig.locale.getWeekFirstDay(locale);
  const weekDaysLocale: string[] = generateConfig.locale.getShortWeekDays(locale);

  for (let i = 0; i < WEEK_DAY_COUNT; i++) {
    console.log('weekDaysLocale', weekDaysLocale);
    headerCells.push(<th key={i}>{weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]}</th>);
  }

  const getCellClassName = (currentDate: DateType) => {
    return {
      [`${cellPrefixCls}-in-view`]: isSameMonth(generateConfig, currentDate, now),
      [`${cellPrefixCls}-today`]: isSameDate(generateConfig, currentDate, now),
    };
  };

  return (
    <PanelBody
      {...props}
      baseDate={baseDate}
      prefixCls={prefixCls}
      rowNum={DATE_ROW_COUNT}
      colNum={WEEK_DAY_COUNT}
      getCellText={generateConfig.getDate}
      getCellDate={generateConfig.addDate}
      headerCells={headerCells}
      getCellClassName={getCellClassName}
    />
  );
}

export default DateBody;
