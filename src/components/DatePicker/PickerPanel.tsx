import React, { FC } from 'react';
import classnames from 'classnames';
import DatePanel from './panels/DatePanel';

export interface PickerPanelSharedProps<DateType> {
  prefixCls?: string;
}

function PickerPanel<DateType>(props: PickerPanelSharedProps<DateType>) {
  const { prefixCls } = props;

  let panelNode: React.ReactNode;

  panelNode = <DatePanel<DateType> />;

  return <div className={classnames(`${prefixCls}-panel`)}>{panelNode}</div>;
}

export default PickerPanel;
