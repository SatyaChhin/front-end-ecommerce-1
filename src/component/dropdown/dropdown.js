import React from 'react';
import {  UserOutlined } from '@ant-design/icons';
import {  Dropdown, message, Space } from 'antd';
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const dropdown = () => (
  <Space wrap>
    <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
        Chhin Satya
    </Dropdown.Button>
  </Space>
);
export default dropdown;