import React, { FC, useState } from 'react';
import { canUseDom } from '../../../utils/base';
import { GetContainer } from '../../ModalPropTypes';
import OrderContext from './Context';
import useDom from './useDom';
import { createPortal } from 'react-dom';

export type ContainerType = Element | DocumentFragment;

interface PortalProps {
  open?: boolean;
  getContainer?: GetContainer | false;
  children?: React.ReactNode;
}
interface PortalRef {}

const getPortalContainer = (getContainer: GetContainer) => {
  if (getContainer === false) {
    return false;
  }

  if (!canUseDom() || !getContainer) {
    return null;
  }

  if (typeof getContainer === 'string') {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === 'function') {
    return getContainer();
  }
  return getContainer;
};

const Portal = React.forwardRef<PortalRef, PortalProps>((props, ref) => {
  const { open, getContainer, children } = props;

  const [shouldRender, setShouldRender] = useState(open);
  const mergedRender = shouldRender || open;

  const [innerContainer] = useState<ContainerType | false>(() => getPortalContainer(getContainer));

  const [defaultContainer, queueCreate] = useDom(mergedRender && !innerContainer);

  const mergedContainer = innerContainer ?? defaultContainer;

  const renderInline = mergedContainer === false;

  let reffedChildren = children;

  return (
    <OrderContext.Provider value={queueCreate}>
      {renderInline ? reffedChildren : createPortal(reffedChildren, mergedContainer)}
    </OrderContext.Provider>
  );
});

export default Portal;