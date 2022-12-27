import React, { FC } from 'react';
import classNames from 'classnames';

interface PanelBodyProps<DateType> {
  rowNum: number;
  colNum: number;
  getCellText: (date: DateType) => React.ReactNode;
  getCellDate: (date: DateType, offset: number) => DateType;
  prefixCls: string;
  baseDate: DateType;
  getCellClassName: (date: DateType) => Record<string, boolean | undefined>;
  headerCells?: React.ReactNode;
}

function PanelBody<DateType>(props: PanelBodyProps<DateType>) {
  const {
    prefixCls,
    colNum,
    rowNum,
    getCellText,
    getCellDate,
    baseDate,
    headerCells,
    getCellClassName,
  } = props;

  const rows: React.ReactNode[] = [];

  for (let i = 0; i < rowNum; i++) {
    const row: React.ReactNode[] = [];
    for (let j = 0; j < colNum; j++) {
      const offset = i * rowNum + j;

      const currentDate = getCellDate(baseDate, offset);
      row.push(
        <td key={offset} className={classNames(prefixCls, { ...getCellClassName(currentDate) })}>
          {getCellText(currentDate)}
        </td>,
      );
    }

    rows.push(<tr key={i}>{row}</tr>);
  }

  return (
    <div className={`${prefixCls}-body`}>
      <table className={`${prefixCls}-content`}>
        {headerCells && (
          <thead>
            <tr>{headerCells}</tr>
          </thead>
        )}

        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default PanelBody;
