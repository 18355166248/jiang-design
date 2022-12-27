import React, { FC } from 'react';
import classnames from 'classnames';
import DatePanel from './panels/DatePanel';
import { GenerateConfig } from './genetate';

export interface PickerPanelSharedProps<DateType> {
  generateConfig: GenerateConfig<DateType>;
  prefixCls: string;
}

function PickerPanel<DateType>(props: PickerPanelSharedProps<DateType>) {
  const { prefixCls, generateConfig } = props;

  let panelNode: React.ReactNode;

  panelNode = <DatePanel<DateType> prefixCls={prefixCls} generateConfig={generateConfig} />;

  return <div className={classnames(`${prefixCls}-panel`)}>{panelNode}</div>;
}

export default PickerPanel;
