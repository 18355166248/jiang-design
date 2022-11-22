import React, { FC } from 'react';
import Dialog from './comps/Dialog';
import Portal from './comps/Portal';
import { ModalPropsTypes } from './ModalPropTypes';

const Modal: FC<ModalPropsTypes> = (props) => {
  const { open, getContainer, destroyOnClose = false } = props;

  // 关闭是否销毁子元素
  if (destroyOnClose && !open) {
    return null;
  }

  return (
    <Portal open={open} getContainer={getContainer} autoDestroy={false}>
      <Dialog {...props} />
    </Portal>
  );
};

export default Modal;
