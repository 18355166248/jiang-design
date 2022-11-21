import React, { FC } from 'react';
import { ModalPropsTypes } from '../../ModalPropTypes';
import classnames from 'classnames';
import Mask from './Mask';

const Dialog: FC<ModalPropsTypes> = (props) => {
  const { prefixCls = 'j-modal', open, mask = true, children } = props;
  return (
    <div className={classnames(`${prefixCls}-root`)}>
      <Mask prefixCls={prefixCls} visible={mask || open} />
      <div>{children}</div>
    </div>
  );
};

export default Dialog;
