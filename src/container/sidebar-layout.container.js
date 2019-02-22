import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import menus from '../menu'
import { Label } from 'semantic-ui-react'
import styled from 'styled-components'
import '../assets/css/antd-sider.css'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SidebarLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    goRoute = (item, key, keyPath, url) => {
        this.props.history.push(url)
    }

    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}  style={{ background: '#2F3136' }} >
                <Menu style={{ background: '#42464D', maxHeight: '85vh', overflow: 'auto'}} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {
                        menus.items.map((item, index) => {
                            if (item.title) {
                                return (<MenuItemGroup key={index} title={item.name} style={{ color: 'white !important' }} />)
                            } else {
                                if (!!item.children) {
                                    return (
                                        <SubMenu key={index} title={
                                            <span>
                                                <Icon type={item.icon} theme={!!item.iconColor && 'twoTone'} twoToneColor={!!item.iconColor && item.iconColor} />
                                                <span style={{ top: '3px', position: 'relative' }}>
                                                    {item.name}
                                                </span>
                                            </span>}
                                        >
                                            {item.children.map((itemChildren, indexChildren) => {
                                                return (
                                                    <Menu.Item onClick={(item, key, keyPath) => this.goRoute(item, key, keyPath, itemChildren.url)} key={!!itemChildren.key ? itemChildren.key : index + indexChildren + 1 + itemChildren.url} >
                                                        <span style={{ top: '3px', position: 'relative' }}> {itemChildren.name} </span>
                                                        {(!!itemChildren.badge && !this.state.collapsed) && <Badged className='animated bounceIn' size={'mini'} color={itemChildren.badge.color}>
                                                            {itemChildren.badge.text}
                                                        </Badged>}
                                                    </Menu.Item>
                                                )
                                            })}

                                        </SubMenu>
                                    )
                                } else {
                                    return (
                                        <Menu.Item onClick={(itemProp, key, keyPath) => this.goRoute(itemProp, key, keyPath, item.url)} key={!!item.key ? item.key : index + 11} title={item.title}>
                                            <Icon type={item.icon} />
                                            <span style={{ top: '3px', position: 'relative' }}>
                                                {item.name}
                                            </span>
                                            {(!!item.badge && !this.state.collapsed) && <Badged className='animated bounceIn' size={'mini'} color={item.badge.color}>
                                                {item.badge.text}
                                            </Badged>}
                                        </Menu.Item>
                                    )
                                }
                            }
                        })
                    }
                </Menu>
            </Sider>
        )
    }
}

export default SidebarLayout

const Badged = styled(Label)`
    float: right;
    top: 13px;
    position: relative;
`