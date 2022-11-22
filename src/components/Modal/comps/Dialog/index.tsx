import React, { FC, useRef } from 'react';
import { ModalPropsTypes } from '../../ModalPropTypes';
import classnames from 'classnames';
import Mask from './Mask';
import Content from './Content';

const Dialog: FC<ModalPropsTypes> = (props) => {
  const { prefixCls = 'j-modal', open, mask = true, onClose } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);

  function onWrapClick(e: any) {
    if (e.target === wrapperRef.current) {
      onClose?.(e);
    }
  }

  return (
    <div className={classnames(`${prefixCls}-root`)}>
      <Mask prefixCls={prefixCls} visible={open} mask={mask} />
      <div
        className={classnames(`${prefixCls}-wrap`)}
        onClick={onWrapClick}
        ref={wrapperRef}
        style={{ display: open ? null : 'none' }}
      >
        {/* 因为 prefixCls 有默认值 所以需要单独传递 */}
        <Content {...props} prefixCls={prefixCls} />
      </div>
    </div>
  );
};

export default Dialog;
