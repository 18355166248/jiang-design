import React from 'react';
import type { RefOptionListProps } from 'rc-select/lib/OptionList';

const OptionList = React.forwardRef<RefOptionListProps>((props, ref) => {
  console.log(props, ref);

  return <div>1222</div>;
});

export default OptionList;
