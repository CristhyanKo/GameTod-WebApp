import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import HeaderLayout from './header-layout.container';
import SidebarLayout from './sidebar-layout.container';
import { Layout } from 'antd';
import routes from '../routes'

class DefaultLayout extends Component {
    render() {
        return (
            <Layout>
                <HeaderLayout {...this.props} />
                <Layout style={{ minHeight: '91vh' }}>
                    <SidebarLayout {...this.props} />
                    <Layout style={{ background: '#36393f', padding: '20px', color: '#fff' }}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (<route.component {...props} />)} />) : (null);
                            })}
                            <Redirect from="/" to="/dashboard" />
                        </Switch>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default DefaultLayout
