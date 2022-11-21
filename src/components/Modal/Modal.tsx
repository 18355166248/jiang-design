import React, { FC } from 'react';
import Dialog from './comps/Dialog';
import Portal from './comps/Portal';
import { ModalPropsTypes } from './ModalPropTypes';

const Modal: FC<ModalPropsTypes> = (props) => {
  const { open, getContainer } = props;

  return (
    <Portal open={open} getContainer={getContainer}>
      <Dialog {...props} />
    </Portal>
  );
};

export default Modal;
