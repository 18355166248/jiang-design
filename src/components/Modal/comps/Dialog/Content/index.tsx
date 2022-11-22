import classNames from 'classnames';
import React, { FC } from 'react';
import { ModalPropsTypes } from '../../../ModalPropTypes';
import MemoChildren from './MemoChildren';

const Content: FC<ModalPropsTypes> = (props) => {
  const { prefixCls, open, children, title, footer } = props;

  let headerNode;
  if (title) {
    headerNode = (
      <div className={classNames(`${prefixCls}-header`)}>
        <div className={`${prefixCls}-title`}>{title}</div>
      </div>
    );
  }

  let footerNode;
  if (footer) {
    footerNode = <div className={classNames(`${prefixCls}-footer`)}>{footer}</div>;
  }

  const content = (
    <div className={classNames(`${prefixCls}-content`)}>
      {headerNode}
      <div className={classNames(`${prefixCls}-body`)}>{children}</div>
      {footerNode}
    </div>
  );

  return (
    <div className={classNames(prefixCls)}>
      <MemoChildren shouldUpdate={open}>{content}</MemoChildren>
    </div>
  );
};

export default Content;
