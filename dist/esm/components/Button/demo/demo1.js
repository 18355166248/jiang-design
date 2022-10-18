/**
 * title: 基础用法
 * desc: 按钮有2种类型：主按钮、次按钮. 主按钮在同一个操作区最多出现一次
 * hideActions: ["CSB"]
 */
import React from 'react';
import { Button } from 'jiang-design';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function () {
  return /*#__PURE__*/ _jsxs('div', {
    className: 'common-space',
    children: [
      /*#__PURE__*/ _jsx(Button, {
        children: 'Default Button',
      }),
      /*#__PURE__*/ _jsx(Button, {
        type: 'primary',
        children: 'Primary Button',
      }),
    ],
  });
});
