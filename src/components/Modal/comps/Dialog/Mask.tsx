import React, { FC } from 'react';

interface MaskPropsTypes {
  prefixCls?: string;
  mask?: boolean;
  visible?: boolean;
}

const Mask: FC<MaskPropsTypes> = ({ prefixCls, visible, mask }) => {
  if (!visible || !mask) return null;

  return <div className={`${prefixCls}-mask`}></div>;
};

export default Mask;
