import React, { Component } from 'react'
import { Container, Row, Button } from 'reactstrap'
import styled from 'styled-components'
import image from '../../assets/image/bg.png'
import imageLogo from '../../assets/image/lg.png'
import { Link } from 'react-router-dom'
import InputValidation from '../../components/input-validation.component';

class Login extends Component {
    state = {
        email: '',
        password: '',
        validateInput: false,
        loading: false
    }

    componentDidMount() {
        console.log(image)
        document.body.style.background = `url(${image}) no-repeat center center fixed`
        document.body.style.backgroundSize = "cover"
    }

    logar = () => {
        this.setState({
            validateInput: true,
            loading: (!!this.state.email && !!this.state.password)
        })

        
    }

    logarKeyUp = (env) => {
        if (env.keyCode === 13) { this.logar() }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <ColCenter>
                            <LoginCard className='animated swing'>
                                <CardTitle>
                                    <img alt='GameTod' src={imageLogo} height='60' />
                                </CardTitle>
                                <hr />
                                <CardSubtitle>Estamos animados em te ver por aqui!</CardSubtitle>
                                <Avatar style={{display: (!!localStorage.getItem('@GameTod:avatar')) ? '' : 'none'}}>
                                    <img alt='Avatar' className="ui small circular image" height='20' src="https://lh3.googleusercontent.com/-HMYrQuX7MYg/WxbrdWr07HI/AAAAAAAAABk/y2_V7N5KDr0gqBr16ynUjV5vjHaxiGoKgCEwYBhgL/w140-h140-p/982e75f263e37de1051930bb2f055478--funny-pugs-cute-pugs.jpg"></img>
                                </Avatar>
                                <CardContent>
                                    <InputTitle>E-mail</InputTitle>
                                    <InputValidation onKeyUp={this.logarKeyUp} validated={this.state.validateInput} value={this.state.email} onChange={(env) => this.setState({email: env.target.value})} type='email' />
                                    <InputTitle>Senha</InputTitle>
                                    <InputValidation onKeyUp={this.logarKeyUp} validated={this.state.validateInput} value={this.state.password} onChange={(env) => this.setState({password: env.target.value})} type='password' />
                                    <LinkNav to=''>Esqueceu sua senha?</LinkNav>
                                    <Button onKeyUp={this.logarKeyUp} onClick={this.logar} color="primary" style={{ marginTop: '20px' }} block>{!!this.state.loading ? 'Aguarde...' : 'Entrar'}</Button>
                                    <InputTitle>Precisa de uma conta? <LinkNav to='/register'>Registre-se</LinkNav></InputTitle>
                                </CardContent>
                            </LoginCard>
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

const LoginCard = styled.div`
    width:420px;
    padding:40px;
    background-color: #2f3136 !important;
    border-color: #333 !important;
    box-shadow: 0px 0px 19px 3px rgba(0,0,0,0.11);
    border-radius: 5px;
`

const Avatar = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export default Login
