import React from 'react';
import type { BaseSelectRef, BaseSelectPropsWithoutPrivate } from 'rc-select';
import { BaseSelect } from 'rc-select';
import { ConfigContext } from '../config-provider/ConfigContext';
import CascadeContext from './context';
import OptionList from './OptionList';
import { filterFieldNames } from './utils/commonUtils';

export interface FieldNames {
  label?: string;
  value?: string;
  children?: string;
}
export interface InternalFieldNames extends Required<FieldNames> {
  key: string;
}

export interface BaseOptionType {
  disabled?: boolean;
  [key: string]: any;
}

export interface DefaultOptionType extends BaseOptionType {
  label: React.ReactNode;
  value?: string | number | null;
  children?: DefaultOptionType[];
}

export type SingleValueType = (string | number)[];
export type ValueType = SingleValueType | SingleValueType[];

export type CascadeRef = Omit<BaseSelectRef, 'scrollTo'>;

type OnSingleChange<OptionType> = (value: SingleValueType, selectOptions: OptionType[]) => void;

interface BaseCascadeProps<OptionType extends BaseOptionType = DefaultOptionType>
  extends Omit<
    BaseSelectPropsWithoutPrivate,
    'tokenSeparators' | 'labelInValue' | 'mode' | 'showSearch'
  > {
  prefixCls?: string;
  children: React.ReactElement;
  value?: ValueType;
  options?: OptionType[];
  fieldNames?: FieldNames;
}

export interface SingleCascaderProps<OptionType extends BaseOptionType = DefaultOptionType>
  extends BaseCascadeProps<OptionType> {
  checkable?: false;

  onChange?: OnSingleChange<OptionType>;
}

export type CascadeProps<OptionType extends BaseOptionType = DefaultOptionType> = Omit<
  SingleCascaderProps<OptionType>,
  'onChange'
> & {
  onChange?: (
    value: SingleValueType | SingleValueType[],
    selectOptions: OptionType[] | OptionType[][],
  ) => void;
};

const Cascade = React.forwardRef<CascadeRef, CascadeProps>((props, ref) => {
  const { value, onChange, children, options, fieldNames } = props;

  console.log(value, onChange, children);

  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('cascade');

  const mergeOptions = React.useMemo(() => options || [], [options]);

  const mergeFieldNames = React.useMemo(
    () => filterFieldNames(fieldNames),
    [JSON.stringify(fieldNames)],
  );

  const cascadeContext = React.useMemo(
    () => ({
      options: mergeOptions,
      fieldNames: mergeFieldNames,
    }),
    [mergeOptions],
  );

  function onDisplayValuesChange() {}

  function onSearch() {}

  return (
    <CascadeContext.Provider value={cascadeContext}>
      <BaseSelect
        ref={ref as any}
        prefixCls={prefixCls}
        displayValues={[]}
        searchValue=""
        OptionList={OptionList}
        emptyOptions={false}
        id=""
        onDisplayValuesChange={onDisplayValuesChange}
        onSearch={onSearch}
        getRawInputElement={() => children}
      />
    </CascadeContext.Provider>
  );
});

export default Cascade;
