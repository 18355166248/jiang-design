import React, { FC } from 'react';
import { DefaultOptionType } from '../Cascade';
import CascadeContext from '../context';

export interface ColumnProps {
  options: DefaultOptionType[];
  activeValue?: React.Key;
  prevValuePath?: React.Key[];
}

const Column: FC<ColumnProps> = ({ options, activeValue, prevValuePath }) => {
  const { fieldNames } = React.useContext(CascadeContext);

  const optionInfoList = React.useMemo(
    () =>
      options.map((option) => {
        const label = option[fieldNames.label];
        const value = option[fieldNames.value];

        return {
          label,
          value,
          option,
        };
      }),
    [options, fieldNames],
  );

  return (
    <ul>
      {optionInfoList.map(({ label, value }, index) => {
        return <li key={index}>{label}</li>;
      })}
    </ul>
  );
};

export default Column;
