import React from 'react';
import type { SizeType } from '../../config-provider/SizeContext';
import './style/index.less';
declare const ButtonTypes: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];
declare const ButtonHTMLTypes: ['submit', 'button', 'reset'];
export declare type ButtonType = typeof ButtonTypes[number];
export declare type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export interface BaseButtonProps {
  type?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export declare type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<never>, 'type' | 'onClick'>;
export declare type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<never>, 'type' | 'onClick'>;
export declare type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
declare const Button: any;
export default Button;
