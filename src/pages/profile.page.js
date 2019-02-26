import React, { Component } from 'react'
import { Col, Row, Button } from 'reactstrap'
import styled from 'styled-components'
import PrivatePage from '../components/private-page.component'
import { ClearCard } from '../styles/card.styled'
import AvatarUser from '../components/avatar.component';
import localStorageVariables from '../localstorage-variables'
import InputValidation from '../components/input-validation.component';

class Profile extends Component {
    state = {
        email: localStorage.getItem(localStorageVariables.email),
        nick: localStorage.getItem(localStorageVariables.nick)
    }
    render() {
        return (
            <PrivatePage className="animated fadeIn">
                <ClearCard>
                    <Row>
                        <Col md={{ size: 2, offset: 1 }}>
                            <center>
                                <AvatarImage style={{ display: (!!localStorage.getItem(localStorageVariables.email)) ? '' : 'none' }}>
                                    <AvatarUser size={150} fontSize={'32pt'} />
                                </AvatarImage>
                            </center>

                            <Button style={{margin: '20px 0px'}} color="secondary" block>Alterar avatar</Button>
                        </Col>
                        <Col md={{ size: 8, offset: 1 }}>
                            <Row>
                                <Col md={6}>
                                    <InputTitle>Nick</InputTitle>
                                    <InputValidation validated={false} value={this.state.nick} type='email' />
                                </Col>
                            </Row>

                            <Row style={{ marginTop: 10 }}>
                                <Col md={6}>
                                    <InputTitle>E-mail</InputTitle>
                                    <InputValidation disabled validated={false} value={this.state.email} type='email' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ClearCard>
            </PrivatePage>
        )
    }
}

export default Profile

const AvatarImage = styled.div`
    justify-content: center;
    align-items: center;
`

const InputTitle = styled.p`
    color: #b9bbbe;
    margin: 10px 0px 5px 0px;
    font-family: 'Montserrat', sans-serif;
    font-size: 9pt;
    font-weight: bold;
`