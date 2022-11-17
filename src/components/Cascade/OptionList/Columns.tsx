import React, { FC } from 'react';
import { DefaultOptionType, SingleValueType } from '../Cascade';
import CascadeContext from '../context';
import { isLeaf } from '../utils/commonUtils';

export interface ColumnProps {
  prefixCls: string;
  options: DefaultOptionType[];
  onActive: (valuePath: SingleValueType) => void;
  onSelect: (valuePath: SingleValueType, isLeaf: boolean) => void;
  activeValue?: React.Key;
  prevValuePath?: React.Key[];
}

const Column: FC<ColumnProps> = ({
  prefixCls,
  options,
  activeValue,
  prevValuePath,
  onActive,
  onSelect,
}) => {
  const menuPrefixCls = `${prefixCls}-menu`;
  const menuItemPrefixCls = `${prefixCls}-menu-item`;
  const { fieldNames } = React.useContext(CascadeContext);

  const optionInfoList = React.useMemo(
    () =>
      options.map((option) => {
        const label = option[fieldNames.label];
        const value = option[fieldNames.value];
        const fullPath = [...prevValuePath, value];
        const isMergedLead = isLeaf(option, fieldNames);

        return {
          label,
          value,
          option,
          fullPath,
          isLeaf: isMergedLead,
        };
      }),
    [options, fieldNames],
  );

  return (
    <ul className={menuPrefixCls}>
      {optionInfoList.map(({ label, value, fullPath, isLeaf }, index) => {
        function triggerOpenPath() {
          onActive(fullPath);
        }

        function triggerSelect() {
          if (isLeaf) onSelect(fullPath, isLeaf);
        }

        return (
          <li
            className={menuItemPrefixCls}
            key={index}
            onClick={() => {
              triggerOpenPath();

              if (isLeaf) {
                triggerSelect();
              }
            }}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};

export default Column;
