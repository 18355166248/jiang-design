import React from 'react';

export type GetContainer = string | HTMLElement | (() => HTMLElement) | false;

export interface ModalPropsTypes {
  className?: string;
  open?: boolean;
  getContainer?: GetContainer;
  prefixCls?: string;
  title?: string;
  children?: React.ReactNode;

  mask?: boolean;
}
