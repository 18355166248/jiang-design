import React from 'react';
import type { RefOptionListProps } from 'rc-select/lib/OptionList';
import classNames from 'classNames';
import { ConfigContext } from '../../config-provider/ConfigContext';

const OptionList = React.forwardRef<RefOptionListProps>((props, ref) => {
  console.log(props, ref);
  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('cascade-option');

  const formatClassName = classNames(prefixCls);

  return <div className={formatClassName}>1222</div>;
});

export default OptionList;
