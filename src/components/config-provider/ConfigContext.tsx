import { createContext } from 'react';
import { basePrefixCls } from './config';

export interface getPrefixClsInterface {
  suffixCls: string;
  customizePrefixCls?: string;
}

export interface ConfigContextProps {
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
}

const defaultGetPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${basePrefixCls}-${suffixCls}` : basePrefixCls;
};

export const ConfigContext = createContext<ConfigContextProps>({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigConsumer = ConfigContext.Consumer;
