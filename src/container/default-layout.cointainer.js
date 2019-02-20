import React, { Component } from 'react'
import HeaderLayout from './header-layout.container';
import SidebarLayout from './sidebar-layout.container';
import { Layout  } from 'antd';

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
                <HeaderLayout {...this.props} />
                <Layout style={{ minHeight: '100vh' }}>
                    <SidebarLayout {...this.props} />
                    <Layout style={{background: '#36393f', padding: '20px', color: '#fff'}}>
                        Hello Word
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default DefaultLayout
