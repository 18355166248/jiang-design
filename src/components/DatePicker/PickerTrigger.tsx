import React from 'react';
import Trigger from 'rc-trigger';

export interface PickerTriggerProps {
  prefixCls: string;
  visible: boolean;
  children: React.ReactElement;
  popupElement: React.ReactElement;
}

function PickerTrigger({ prefixCls, visible, children, popupElement }: PickerTriggerProps) {
  const dropDownPrrfixCls = `${prefixCls}-dropdown`;
  return (
    <Trigger
      showAction={[]}
      hideAction={[]}
      popupVisible={visible}
      prefixCls={dropDownPrrfixCls}
      popup={popupElement}
    >
      {children}
    </Trigger>
  );
}

export default PickerTrigger;
