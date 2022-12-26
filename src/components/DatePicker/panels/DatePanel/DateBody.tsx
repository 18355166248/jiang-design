import React, { FC } from 'react';

export type DateBodyProps<DateType> = {
  prefixCls?: string;
};

function DateBody<DateType>(props: DateBodyProps<DateType>) {
  const { prefixCls } = props;

  return <div>DateBody</div>;
}

export default DateBody;
