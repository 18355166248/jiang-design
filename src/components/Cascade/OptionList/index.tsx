import React, { useState } from 'react';
import type { RefOptionListProps } from 'rc-select/lib/OptionList';
import classNames from 'classNames';
import { ConfigContext } from '../../config-provider/ConfigContext';
import CascadeContext from '../context';
import Column from './Columns';

const OptionList = React.forwardRef<RefOptionListProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const { options, fieldNames } = React.useContext(CascadeContext);

  const prefixCls = getPrefixCls('cascade-option');

  const formatClassName = classNames(prefixCls);

  const mergeOptions = React.useMemo(() => {
    return options;
  }, [options]);

  const [activeValueCells] = useState([]);

  const optionColumns = React.useMemo(() => {
    const optionList = [{ options: mergeOptions }];
    const currentList = mergeOptions;

    return optionList;
  }, [mergeOptions, fieldNames, activeValueCells]);

  const columnNodes: React.ReactElement[] = optionColumns.map((col, index) => {
    const prevValuePath = activeValueCells.slice(0, index);
    const activeValue = activeValueCells[index];

    return (
      <Column
        key={index}
        options={col.options}
        prevValuePath={prevValuePath}
        activeValue={activeValue}
      />
    );
  });

  return <div className={formatClassName}>{columnNodes}</div>;
});

export default OptionList;
