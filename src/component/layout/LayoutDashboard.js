/* eslint-disable jsx-a11y/anchor-is-valid */
import React , { useState } from 'react';
import { Outlet , useNavigate } from "react-router-dom"
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Dropdown from '../dropdown/dropdown';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '/dashboard', <PieChartOutlined />),
  getItem('Category', '/dashboard/category', <ShopOutlined />),
  getItem('Product', '/dashboard/product', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const LayoutDashboard = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChangeMenu = (item) => {
        navigate(item.key)
  }
  return (
    <Layout style={{ minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu onSelect={onChangeMenu} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header 
            style={{ 
                padding: 0 , 
                background: colorBgContainer, 
                display : 'flex', 
                justifyContent : 'space-between',
            }}
        >
            <div style={{fontSize : 15 , marginLeft : 5 }}> ដេប៉ូលលក់ទំនិញពៅសារ៉ាន</div>
            <div style={{marginRight : 10}}>
                <Dropdown />
            </div>
        </Header>
        <Content style={{ margin: '0 16px',}}>
          <Breadcrumb style={{ margin: '16px 0',}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360,background: colorBgContainer,}}>
            <Outlet /> 
          </div>
        </Content>
        <Footer style={{ textAlign: 'center',}}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutDashboard;
