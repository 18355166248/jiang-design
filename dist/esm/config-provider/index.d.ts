import React, { FC } from 'react';
import { SizeType } from './SizeContext';
interface ConfigProviderProps {
  prefixCls?: string;
  children?: React.ReactNode;
  componentSize?: SizeType;
}
declare const ConfigProvider: FC<ConfigProviderProps>;
export default ConfigProvider;
