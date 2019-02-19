import React, { Component } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image from '../../assets/image/bg.png'
import InputValidation from '../../components/input-validation.component';

class Register extends Component {
    state = {
        email: '',
        nick: '',
        password: '',
        repassword: '',
        validationInputs: false
    }

    componentDidMount() {
        document.body.style.background = `url(${image}) no-repeat center center fixed`
        document.body.style.backgroundSize = "cover"
    }

    registerKeyUp = (env) => {
        if (env.keyCode === 13) { this.register() }
    }

    register = () => {
        this.setState({validationInputs: true})
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <ColCenter>
                            <RegisterCard className='animated swing'>
                                <CardTitle>
                                    Criar uma conta
                                </CardTitle>
                                <hr />
                                <CardContent>
                                    <InputTitle>E-mail</InputTitle>
                                    <InputValidation validated={this.state.validationInputs} value={this.state.email} onChange={(env) => this.setState({ email: env.target.value })} type='email' />
                                    <InputTitle>Nickname</InputTitle>
                                    <InputValidation validated={this.state.validationInputs} value={this.state.nick} onChange={(env) => this.setState({ nick: env.target.value })} type='text' />
                                    <InputTitle>Senha</InputTitle>
                                    <InputValidation validated={this.state.validationInputs} value={this.state.password} onChange={(env) => this.setState({ password: env.target.value })} type='password' />
                                    <InputTitle>Repita a senha</InputTitle>
                                    <InputValidation validated={this.state.validationInputs} onKeyUp={this.registerKeyUp} value={this.state.repassword} onChange={(env) => this.setState({ repassword: env.target.value })} type='password' />
                                    <LinkNav to='/login'>Já tem uma conta?</LinkNav>
                                    <Button onKeyUp={this.registerKeyUp} color="primary" style={{ marginTop: '20px' }} onClick={this.register} block>Cadastrar-se</Button>
                                </CardContent>
                            </RegisterCard>
                        </ColCenter>
                    </Row>
                </Container>
            </div>
        )
    }
}

const CardContent = styled.div`
    margin-top: 20px;
`

const InputTitle = styled.p`
    color: #b9bbbe;
    margin: 10px 0px 5px 0px;
    font-family: 'Montserrat', sans-serif;
    font-size: 9pt;
    font-weight: bold;
`

const LinkNav = styled(Link)`
    color: #007bff !important;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 9pt;
    :hover {
        text-decoration: underline !important;
    }
`

const RegisterCard = styled.div`
    width:420px;
    padding:40px;
    background-color: #2f3136 !important;
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

const ColCenter = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default Register