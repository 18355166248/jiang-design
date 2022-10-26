import React from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

const SizeContext = React.createContext<SizeType>(undefined);

export interface SizeContextProps {
  size?: SizeType;
  children?: React.ReactNode;
}

// 底层的 Context 高于外层
export const SizeContextProvider: React.FC<SizeContextProps> = ({ size, children }) => (
  <SizeContext.Consumer>
    {(originSize) => (
      <SizeContext.Provider value={size || originSize}>{children}</SizeContext.Provider>
    )}
  </SizeContext.Consumer>
);

export default SizeContext;
