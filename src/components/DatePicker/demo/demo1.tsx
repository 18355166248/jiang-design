/**
 * title: 基础用法
 * desc: 点击弹出面板, 选择日期
 * hideActions: ["CSB"]
 */
import React from 'react';
import { DatePicker } from 'jiang-design';
import '../style/index.less';

export default () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="common-space">
      <DatePicker onChange={onChange} />
    </div>
  );
};
