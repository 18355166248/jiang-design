import React from 'react';
import Trigger from 'rc-trigger';

const BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1,
    },
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1,
    },
  },
};

type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';

export interface PickerTriggerProps {
  prefixCls: string;
  visible: boolean;
  children: React.ReactElement;
  popupElement: React.ReactElement;
  popupPlacement?: Placement;
}

function PickerTrigger({
  prefixCls,
  visible,
  children,
  popupElement,
  popupPlacement,
}: PickerTriggerProps) {
  const dropDownPrrfixCls = `${prefixCls}-dropdown`;
  return (
    <Trigger
      showAction={[]}
      hideAction={[]}
      popupVisible={visible}
      prefixCls={dropDownPrrfixCls}
      popup={popupElement}
      builtinPlacements={BUILT_IN_PLACEMENTS}
      popupPlacement={popupPlacement}
    >
      {children}
    </Trigger>
  );
}

export default PickerTrigger;
