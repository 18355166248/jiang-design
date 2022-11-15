import * as React from 'react';
import type { CascadeProps, InternalFieldNames, SingleValueType } from './Cascade';

export interface CascadeContextProps {
  options: CascadeProps['options'];
  fieldNames: InternalFieldNames;
  values?: SingleValueType[];
}

const CascadeContext = React.createContext<CascadeContextProps>(null);

export default CascadeContext;
