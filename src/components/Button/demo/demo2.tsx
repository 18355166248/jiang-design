/**
 * title: 不可用状态
 * desc: 添加 disabled 属性可让按钮处于不可用状态, 同时按钮样式也会改变
 * hideActions: ["CSB"]
 */
import React from 'react';
import { Button } from 'jiang-design';
import '../style/index.less';

export default () => {
  return (
    <div>
      <div className="mb-3 common-space">
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
      </div>
      <div className="common-space">
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
      </div>
    </div>
  );
};
