import React, { useState } from 'react';
import type { RefOptionListProps } from 'rc-select/lib/OptionList';
import classNames from 'classNames';
import { ConfigContext } from '../../config-provider/ConfigContext';
import CascadeContext from '../context';
import Column from './Columns';
import useActive from './useActive';
import { SingleValueType } from '../Cascade';
import { useBaseProps } from 'rc-select';

const OptionList = React.forwardRef<RefOptionListProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const { options, fieldNames, onSelect } = React.useContext(CascadeContext);
  const { toggleOpen } = useBaseProps();

  const prefixCls = getPrefixCls('cascade-menus');

  const formatClassName = classNames(prefixCls);

  const mergeOptions = React.useMemo(() => {
    return options;
  }, [options]);

  const [activeValueCells, setActiveValueCells] = useActive();

  const optionColumns = React.useMemo(() => {
    const optionList = [{ options: mergeOptions }];
    let currentList = mergeOptions;

    for (let i = 0; i < activeValueCells.length; i++) {
      const activeValueCell = activeValueCells[i];
      const currentOption = currentList.find(
        (current) => current[fieldNames.value] === activeValueCell,
      );
      const subOptions = currentOption?.[fieldNames.children];
      if (!subOptions?.length) {
        break;
      }

      currentList = subOptions;
      optionList.push({ options: subOptions });
    }

    return optionList;
  }, [mergeOptions, fieldNames, activeValueCells]);

  const columnNodes: React.ReactElement[] = optionColumns.map((col, index) => {
    const prevValuePath = activeValueCells.slice(0, index);
    const activeValue = activeValueCells[index];

    function onPathOpen(newValueCells: React.Key[]) {
      setActiveValueCells(newValueCells);
    }

    function onPathSelect(valuePath: SingleValueType, isLeaf: boolean) {
      onSelect(valuePath);

      if (isLeaf) {
        toggleOpen(false);
      }
    }

    return (
      <Column
        key={index}
        options={col.options}
        prevValuePath={prevValuePath}
        activeValue={activeValue}
        onActive={onPathOpen}
        onSelect={onPathSelect}
        prefixCls={prefixCls}
      />
    );
  });

  return <div className={formatClassName}>{columnNodes}</div>;
});

export default OptionList;
