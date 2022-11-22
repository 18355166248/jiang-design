import React, { SyntheticEvent } from 'react';

export type GetContainer = string | HTMLElement | (() => HTMLElement) | false;

export interface ModalPropsTypes {
  className?: string;
  open?: boolean;
  getContainer?: GetContainer;
  prefixCls?: string;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;

  onClose?: (e: SyntheticEvent) => any;

  mask?: boolean;
}
