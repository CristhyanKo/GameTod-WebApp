import React, { Component } from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import imageLogo from '../assets/image/lg.png'
import localStorageVariables from '../localstorage-variables'
import { Popover } from 'antd';
import auth from '../services/auth.service'
import '../assets/css/antd-popover.css'

const authenticate = new auth()

class HeaderLayout extends Component {
    signout = () => {
        authenticate.clear().then(() => {
            this.props.history.push('/login')
        })
    }

    render() {
        const MenuUserTop = (
            <div>
                <Button color="secondary" block>Perfil</Button>
                <Button color="danger" onClick={this.signout} block>Sair</Button>
            </div>
        )

        return (
            <div>
                <Container>
                    <LeftContainer>
                        <img alt='GameTod' src={imageLogo} height='50' />
                    </LeftContainer>

                    <RightContainer>
                        <Popover placement="bottomRight" title={<b>{localStorage.getItem(localStorageVariables.nick)}</b>} content={MenuUserTop} trigger="click">
                            <Avatar id="MenuUser">
                                <img alt='Avatar' src={localStorage.getItem(localStorageVariables.avatar)} className="ui mini circular image"></img>
                            </Avatar>
                        </Popover>
                    </RightContainer>
                </Container>
            </div >
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

const Avatar = styled.a`
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        border: 3px #00c674 solid !important;
    }
`