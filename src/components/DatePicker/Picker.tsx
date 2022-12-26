import React, { FC, forwardRef, useImperativeHandle, useRef } from 'react';
import PickerTrigger from './PickerTrigger';
import classnames from 'classnames';
import PickerPanel from './PickerPanel';
import useMergedState from '../../hooks/useMergedState';

interface PickerSharedProps<DateType> {
  prefixCls?: string;
  disabled?: boolean;
  open?: boolean;

  // Events
  onChange?: (value: DateType | null, dateString: string) => void;

  readonly pickerRef?: React.MutableRefObject<PickerRefConfig>;
}

export type PickerBaseProps<DateType> = {} & PickerSharedProps<DateType>;

export type PickerDateProps<DateType> = {} & PickerSharedProps<DateType>;

export type PickerProps<DateType> = PickerBaseProps<DateType> | PickerDateProps<DateType>;

interface PickerRefConfig {}

function InnerPicker<DateType>(props: PickerProps<DateType>) {
  const { open, onChange, pickerRef, prefixCls = 'j-picker', disabled } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [mergedOpen, triggerInnerOpen] = useMergedState(false, {
    value: open,
    postState: (postOpen) => (disabled ? false : postOpen),
  });

  const panelProps = {
    ...props,
    onChange: null,
  };

  const panelNode: React.ReactNode = (
    <div className={`${prefixCls}-panel-layout`}>
      <PickerPanel {...panelProps} />
    </div>
  );

  const panel = <div className={`${prefixCls}-panel-container`}>{panelNode}</div>;

  // input 的props
  const mergedInputProps = {
    disabled,
    ref: inputRef,
    onBlur: () => {
      console.log('blur');
      triggerOpen(false);
    },
  };

  const inputNode: React.ReactNode = <input {...mergedInputProps} />;

  const triggerOpen = (newOpen: boolean) => {
    if (disabled) {
      return;
    }

    triggerInnerOpen(newOpen);
  };

  const onInternalClick: React.MouseEventHandler<HTMLDivElement> = (...args) => {
    if (inputRef.current) {
      inputRef.current.focus();
      triggerOpen(true);
    }
  };

  console.log('mergedOpen', mergedOpen);

  return (
    <PickerTrigger
      visible={mergedOpen}
      prefixCls={prefixCls}
      popupElement={panel}
      popupPlacement="bottomLeft"
    >
      <div
        className={classnames(prefixCls, {
          [`${prefixCls}-disabled`]: disabled,
        })}
        onClick={onInternalClick}
      >
        <div className={classnames(`${prefixCls}-input`)}>{inputNode}</div>
      </div>
    </PickerTrigger>
  );
}

class Picker<DateType> extends React.Component<PickerProps<DateType>> {
  pickerRef = React.createRef<PickerRefConfig>();

  focus = () => {};
  blur = () => {};

  render() {
    return (
      <InnerPicker<DateType>
        {...this.props}
        pickerRef={this.pickerRef as React.MutableRefObject<PickerRefConfig>}
      />
    );
  }
}
export default Picker;
