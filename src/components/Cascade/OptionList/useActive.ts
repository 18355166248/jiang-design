import { useBaseProps } from 'rc-select';
import React, { useEffect, useState } from 'react';
import CascadeContext from '../context';

export default (): [React.Key[], (activeValueCells: React.Key[]) => void] => {
  const { open } = useBaseProps();
  const { values } = React.useContext(CascadeContext);
  const [activeValueCells, setActiveValueCells] = useState<React.Key[]>([]);

  useEffect(() => {
    if (open) {
      // 打开下拉框重置选项
      setActiveValueCells(values ? values[0] : []);
    }
  }, [open]);

  return [activeValueCells, setActiveValueCells];
};
