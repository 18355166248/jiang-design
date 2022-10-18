import { createContext } from 'react';
import { basePrefixCls } from './config';

var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? ''.concat(basePrefixCls, '-').concat(suffixCls) : basePrefixCls;
};

export var ConfigContext = /*#__PURE__*/ createContext({
  getPrefixCls: defaultGetPrefixCls,
});
export var ConfigConsumer = ConfigContext.Consumer;
