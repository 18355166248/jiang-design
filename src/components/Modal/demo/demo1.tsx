/**
 * title: 基础用法
 * desc: 对话框
 * hideActions: ["CSB"]
 */
import React, { useState } from 'react';
import { Modal, Button } from 'jiang-design';
import '../style/index.less';

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="common-space">
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal open={isModalOpen}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
