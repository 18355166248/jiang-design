import React, { FC } from 'react';
import { ConfigContext, ConfigConsumer, ConfigContextProps } from './ConfigContext';

import SizeContext, { SizeContextProvider, SizeType } from './SizeContext';

interface ConfigProviderProps {
  prefixCls?: string;
  children?: React.ReactNode;
  componentSize?: SizeType;
}

interface ProviderChildrenProps extends ConfigProviderProps {
  parentContext: ConfigContextProps;
}

const ProviderChildren: FC<ProviderChildrenProps> = (props) => {
  const { children, prefixCls, parentContext, componentSize } = props;

  const getPrefixCls = React.useCallback((suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');

    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, []);

  let childNode = children;

  if (componentSize) {
    childNode = <SizeContextProvider size={componentSize}>{childNode}</SizeContextProvider>;
  }

  return (
    <ConfigContext.Provider
      value={{
        getPrefixCls,
      }}
    >
      {childNode}
    </ConfigContext.Provider>
  );
};

const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  return (
    <ConfigConsumer>
      {(context) => <ProviderChildren parentContext={context} {...props} />}
    </ConfigConsumer>
  );
};

export default ConfigProvider;
