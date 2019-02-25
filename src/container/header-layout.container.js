import React, { Component } from 'react'
import { Affix } from 'antd'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import imageLogo from '../assets/image/lg.png'
import localStorageVariables from '../localstorage-variables'
import { Popover, Tooltip } from 'antd';
import auth from '../services/auth.service'
import '../assets/css/antd-popover.css'
import { Label } from 'semantic-ui-react'
import AvatarUser from '../components/avatar.component';

const authenticate = new auth()

class HeaderLayout extends Component {
    signout = () => {
        authenticate.clear().then(() => {
            this.props.history.push('/login')
        })
    }

    render() {
        const MenuUserTop = (
            <div style={{ color: 'white'}}>
                Status
                <StatusBar>
                    <Tooltip title="Online">
                        <a href='/#'><Label circular color='green' empty /></a>
                    </Tooltip>
                    <Tooltip title="Ocupado">
                        <a href='/#'><Label circular color='red' empty /></a>
                    </Tooltip>
                    <Tooltip title="Ausente">
                        <a href='/#'><Label circular color='orange' empty /></a>
                    </Tooltip>
                    <Tooltip title="Invisivel">
                        <a href='/#'><Label circular empty /></a>
                    </Tooltip>
                </StatusBar>
                <hr />
                <Button color="secondary" block>Perfil</Button>
                <Button color="danger" onClick={this.signout} block>Sair</Button>
            </div>
        )

        return (
            <Affix>
                <Container>
                    <LeftContainer>
                        <img alt='GameTod' src={imageLogo} height='50' />
                    </LeftContainer>

                    <RightContainer>
                        <Popover placement="bottomRight" title={<b>{localStorage.getItem(localStorageVariables.nick)}</b>} content={MenuUserTop} trigger="click">
                            <AvatarImage id="MenuUser">
                                <AvatarUser size={40} fontSize={''} />
                            </AvatarImage>
                            <Tooltip title="Online" style={{ position: 'absolute'}}>
                                <a style={{ position: 'absolute', top: 35, right: 22}} href='/#'><Label circular color='green' empty /></a>
                            </Tooltip>
                        </Popover>
                    </RightContainer>
                </Container>
            </Affix>
        )
    }
}

export default HeaderLayout

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #202225;
    height: 60px;
`

const LeftContainer = styled.div`
    flex:1;
    img {
        margin-left: 20px;
    }
`

const RightContainer = styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
`

const AvatarImage = styled.a`
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        /* border: 3px #00c674 solid !important; */
    }
`

const StatusBar = styled.div`
    display: flex;
    justify-content: space-between;
    background: #42464D;
    border-radius: 3px;
    width: 100%;
    padding: 10px;
    margin-bottom: 7px;
    a { display: flex }
`