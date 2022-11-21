import React, { FC } from 'react';

interface MaskPropsTypes {
  prefixCls?: string;
  mask?: boolean;
  visible?: boolean;
}

const Mask: FC<MaskPropsTypes> = ({ prefixCls }) => {
  return <div className={`${prefixCls}-mask`}></div>;
};

export default Mask;
