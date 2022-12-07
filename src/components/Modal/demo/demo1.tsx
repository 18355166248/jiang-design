/**
 * title: 基础用法
 * desc: 对话框
 * hideActions: ["CSB"]
 */
import React, { useState } from 'react';
import { Modal, Button } from 'jiang-design';
import '../style/index.less';
import '../../Button/style/index.less';

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="common-space">
      <div id="container"></div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
      </div>
      <div>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal 2
        </Button>
      </div>

      <Modal
        open={isModalOpen}
        title="弹窗标题"
        footer={<div>弹窗底部</div>}
        onClose={() => setIsModalOpen(false)}
        getContainer="#container"
        destroyOnClose
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Modal
        open={open}
        title="弹窗标题222"
        footer={<div>弹窗底部22</div>}
        onClose={() => setOpen(false)}
      >
        <p>2222 Some contents...</p>
        <p>2222 Some contents...</p>
        <p>2222 Some contents...</p>
      </Modal>
    </div>
  );
};
