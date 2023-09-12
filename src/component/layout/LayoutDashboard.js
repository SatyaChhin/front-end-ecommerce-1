import React , { useState } from 'react';
import { Outlet , useNavigate } from "react-router-dom"
import {
  LaptopOutlined,
  PieChartOutlined,
  UngroupOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  TrademarkOutlined,
  DingdingOutlined,
  DeliveredProcedureOutlined,
  TabletOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme , Tag } from 'antd';
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
  getItem('Employee', '/dashboard/employee', <DeliveredProcedureOutlined />),
  getItem('Customer', '/dashboard/customer', <DingdingOutlined />),
  getItem('Order', '/dashboard/order', <ShoppingCartOutlined />),
  getItem('Banner', '/dashboard/banner', <TabletOutlined />),
  getItem('Product', '/dashboard/product', <UngroupOutlined />, [
    getItem('Category', '/dashboard/category'),
    getItem('Product', '/dashboard/product'),
  ]),
  getItem('User', '', <UserOutlined />, [
    getItem('Role', '/dashboard/user/role'),
    getItem('User role', '/dashboard/user/userrole'),
  ]),
  getItem('Report', '/dashboard/report', <TrademarkOutlined />, [
    getItem('Top sale', '/dashboard/report/topsale'),
    getItem('Sale summary', '/dashboard/report/salesummary'),
    getItem('Sold by category', '/dashboard/report/soldbycategory'),
    getItem('Sold by product', '/dashboard/report/soldbyproduct'),
  ]),
  getItem('System', '/dashboard/system', <LaptopOutlined />, [
    getItem('Order Status', '/dashboard/system/orderstatus'),
    getItem('Order Payment', '/dashboard/system/orderpayment'),
    getItem('Province', '/dashboard/system/province'),
  ]),
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
            <div style={{fontSize : 15 , marginLeft : 5 }}>
              <Tag style={{padding:5,fontSize:13}} ><ShoppingCartOutlined /> Pov Saran Shopping Depot</Tag>
            </div>
            <div style={{marginRight : 10}}>
                <Dropdown />
            </div>
        </Header>
        <Content style={{ margin: '0 16px',}}>
          <Breadcrumb style={{ margin: '5px 0',}}>
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
