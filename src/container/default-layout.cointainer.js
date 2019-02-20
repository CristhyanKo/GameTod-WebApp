import React, { Component } from 'react'
import HeaderLayout from './header-layout.container';
import SidebarLayout from './sidebar-layout.container';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
                <HeaderLayout {...this.props} />
                <Layout style={{ minHeight: '100vh' }}>
                    <SidebarLayout {...this.props} />
                    <Layout style={{background: '#36393f'}}>
                        <h4>asdas</h4>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default DefaultLayout
