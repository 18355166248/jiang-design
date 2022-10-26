import React, { createRef, forwardRef } from 'react';
import { tuple } from '../../_utils/type';
import type { SizeType } from '../config-provider/SizeContext';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider/ConfigContext';

const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');

export type ButtonType = typeof ButtonTypes[number];
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  type?: ButtonType;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// 区分标签按钮和普通按钮
// a标签
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<never>, 'type' | 'onClick'>;

// 按钮
export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<never>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const BaseButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const { type = 'default', htmlType, disabled, className, ...otherProps } = props;

  const buttonRef = (ref as any) || createRef<HTMLElement>();

  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('btn');

  const formatClassName = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: type,
  });

  const buttonNode = (
    <button
      {...(otherProps as NativeButtonProps)}
      className={formatClassName}
      type={htmlType}
      disabled={disabled}
      ref={buttonRef}
    ></button>
  );

  return buttonNode;
};

const Button = forwardRef<unknown, ButtonProps>(BaseButton);

export default Button;
