import React, { FC } from 'react';
import { PickerPanelSharedProps } from '../../PickerPanel';
import DateBody from './DateBody';
import DateHeader from './DateHeader';

type DateTypeProps<DateType> = { panelName?: string } & PickerPanelSharedProps<DateType>;

function DatePanel<DateType>(props: DateTypeProps<DateType>) {
  const { prefixCls, panelName = 'date' } = props;

  const panelPrefixCls = `${prefixCls}-${panelName}-panel`;

  return (
    <div className={panelPrefixCls}>
      <DateHeader />
      <DateBody />
    </div>
  );
}

export default DatePanel;
