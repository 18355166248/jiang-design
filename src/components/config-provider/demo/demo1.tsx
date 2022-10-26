/**
 * title: 基础用法
 * desc: 按钮有2种类型：主按钮、次按钮. 主按钮在同一个操作区最多出现一次
 * hideActions: ["CSB"]
 */
import React from 'react';
import { Button, ConfigProvider } from 'jiang-design';
import '../../Button/style/index.less';

export default () => {
  return (
    <ConfigProvider>
      <Button>222</Button>
      <span className="mr-2"></span>
      <Button type="primary">222</Button>
    </ConfigProvider>
  );
};
