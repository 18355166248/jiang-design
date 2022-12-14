/**
 * title: 基础用法
 * desc: 按钮有2种类型：主按钮、次按钮. 主按钮在同一个操作区最多出现一次
 * hideActions: ["CSB"]
 */
import React, { useState } from 'react';
import { Cascade, ConfigProvider } from 'jiang-design';
import '../style/index.less';
import './index.less';

const addressOptions = [
  {
    label: '福建',
    value: 'fj',
    children: [
      {
        label: '福州',
        value: 'fuzhou',
        children: [
          {
            label: '马尾',
            value: 'mawei',
          },
        ],
      },
      {
        label: '泉州',
        value: 'quanzhou',
      },
    ],
  },
  {
    label: '浙江',
    value: 'zj',
    children: [
      {
        label: '杭州',
        value: 'hangzhou',
        children: [
          {
            label: '余杭',
            value: 'yuhang',
          },
        ],
      },
    ],
  },
  {
    label: '北京',
    value: 'bj',
    children: [
      {
        label: '朝阳区',
        value: 'chaoyang',
      },
      {
        label: '海淀区',
        value: 'haidian',
      },
    ],
  },
];

export default () => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (value: string, selectedOptions: any) => {
    console.log('demo1-onChange', value, selectedOptions);
    setInputValue(selectedOptions.map((o: any) => o.label).join(', '));
  };

  return (
    <Cascade options={addressOptions} onChange={onChange}>
      <div
        style={{
          width: 200,
          minHeight: 30,
          border: '1px solid #ccc',
          padding: '2px 6px',
        }}
        className="flex items-center cursor-pointer"
      >
        {inputValue}
      </div>
    </Cascade>
  );
};
