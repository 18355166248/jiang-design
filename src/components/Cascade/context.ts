import * as React from 'react';
import type { SingleValueType } from './Cascade';

export interface CascadeContextProps {
  values?: SingleValueType[];
}

const CascadeContext = React.createContext<CascadeContextProps>({});

export default CascadeContext;
