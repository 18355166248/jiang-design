/**
 * title: 基础用法
 * desc: 按钮有2种类型：主按钮、次按钮. 主按钮在同一个操作区最多出现一次
 * hideActions: ["CSB"]
 */
import React from 'react';
import { Button } from 'jiang-design';
import '../style/index.less';

export default () => {
  return (
    <div className="common-space">
      <Button>Default Button</Button>
      <Button type="primary">Primary Button</Button>
    </div>
  );
};
