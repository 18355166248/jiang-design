import React, { FC, forwardRef, useImperativeHandle, useRef } from 'react';

interface PickerSharedProps<DateType> {
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
  const { open, onChange, pickerRef } = props;

  return <div></div>;
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
