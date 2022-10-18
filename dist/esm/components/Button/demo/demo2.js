/**
 * title: 不可用状态
 * desc: 添加 disabled 属性可让按钮处于不可用状态, 同时按钮样式也会改变
 * hideActions: ["CSB"]
 */
import React from 'react';
import { Button } from 'jiang-design';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function () {
  return /*#__PURE__*/ _jsxs('div', {
    children: [
      /*#__PURE__*/ _jsxs('div', {
        className: 'mb-3 common-space',
        children: [
          /*#__PURE__*/ _jsx(Button, {
            children: 'Default',
          }),
          /*#__PURE__*/ _jsx(Button, {
            disabled: true,
            children: 'Default(disabled)',
          }),
        ],
      }),
      /*#__PURE__*/ _jsxs('div', {
        className: 'common-space',
        children: [
          /*#__PURE__*/ _jsx(Button, {
            type: 'primary',
            children: 'Primary',
          }),
          /*#__PURE__*/ _jsx(Button, {
            type: 'primary',
            disabled: true,
            children: 'Primary(disabled)',
          }),
        ],
      }),
    ],
  });
});
