import React from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';
var SizeContext = /*#__PURE__*/ React.createContext(undefined);
// 底层的 Context 高于外层
export var SizeContextProvider = function SizeContextProvider(_ref) {
  var size = _ref.size,
    _children = _ref.children;
  return /*#__PURE__*/ _jsx(SizeContext.Consumer, {
    children: function children(originSize) {
      return /*#__PURE__*/ _jsx(SizeContext.Provider, {
        value: size || originSize,
        children: _children,
      });
    },
  });
};
export default SizeContext;
