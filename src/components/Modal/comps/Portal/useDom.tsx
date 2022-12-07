import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { canUseDom } from '../../../utils/base';
import OrderContext, { QueueCreate } from './Context';

interface Props {}

const EmptyList = [];

export default function useDom(render: boolean): [HTMLDivElement, QueueCreate] {
  const [ele] = useState(() => {
    if (!canUseDom()) return null;

    const defaultElement = document.createElement('div');

    return defaultElement;
  });

  const queueCreate = React.useContext(OrderContext);
  const [queue, setQueue] = useState<VoidFunction[]>(EmptyList);

  const mergedQueueCreate =
    queueCreate ||
    ((appendFn: VoidFunction) => {
      setQueue((origin) => {
        const newQueue = [appendFn, ...origin];
        return newQueue;
      });
    });

  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
  }

  function cleanUp() {
    ele.parentElement?.removeChild(ele);
  }

  useLayoutEffect(() => {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanUp();
    }
    return cleanUp;
  }, [render]);

  useLayoutEffect(() => {
    if (queue.length) {
      queue.forEach((appendFn) => appendFn());
      setQueue(EmptyList);
    }
  }, [queue]);

  return [ele, mergedQueueCreate];
}
