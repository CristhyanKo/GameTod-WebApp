import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import styled from 'styled-components'

class Login extends Component {
    render() {
        return (
            <div>
                <Logo>
                    Game Tod
                </Logo>
                <Container>
                    <Row>
                        <ColCenter>
                            <LoginCard>
                                <CardTitle>Seja bem vindo(a)</CardTitle>
                                <CardSubtitle>Estamos muito animados em te ver por aqui!</CardSubtitle>
                                <CardContent>
                                    <InputTitle>E-mail</InputTitle>
                                    <InputCard type='email'></InputCard>
                                    <InputTitle>Senha</InputTitle>
                                    <InputCard type='password'></InputCard>
                                    <Link>Esqueceu sua senha?</Link>
                                    <Button color="primary" style={{ marginTop: '20px' }} block>Entrar</Button>
                                    <InputTitle>Precisa de uma conta? <Link>Registre-se</Link></InputTitle>

                                </CardContent>
                            </LoginCard>
                        </ColCenter>
                    </Row>
                </Container>
            </div>

        )
    }
}

const Logo = styled.div`
    padding: 70px;
`

const CardContent = styled.div`
    margin-top: 20px;
`

const InputCard = styled.input`
    background-color: rgba(0,0,0,.1);
    border-color: rgba(0,0,0,.3);
    color: #f6f6f7;
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    transition: background-color .15s ease,border .15s ease;
    width: 100%;
    padding: 8px;
`

const InputTitle = styled.p`
    color: #b9bbbe;
    margin: 10px 0px 5px 0px;
    font-family: 'Montserrat', sans-serif;
    font-size: 9pt;
    font-weight: bold;
`

const Link = styled.a`
    color: #7289da !important;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 9pt;
    :hover {
        text-decoration: underline !important;
    }
`

const LoginCard = styled.div`
    height: 50%;
    padding:40px;
    background-color: #36393f !important;
    border-color: #333 !important;
    box-shadow: 0px 0px 19px 3px rgba(0,0,0,0.11);
    border-radius: 5px;
`

const CardTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 21pt;
    font-family: 'Montserrat', sans-serif;
`

const CardSubtitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #72767d;
    font-size: 12pt;
    font-family: 'Montserrat', sans-serif;
`

const ColCenter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default Login
