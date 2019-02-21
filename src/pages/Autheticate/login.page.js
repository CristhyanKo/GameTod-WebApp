import React, { Component } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { Modal } from 'antd'
import styled from 'styled-components'
import image from '../../assets/image/bg.png'
import imageLogo from '../../assets/image/lg.png'
import { Link } from 'react-router-dom'
import InputValidation from '../../components/input-validation.component';
import { Icon } from 'semantic-ui-react'
import localStorageVariables from '../../localstorage-variables'
import auth from '../../services/auth.service'
import { Redirect } from 'react-router-dom'

const authenticate = new auth()

class Login extends Component {
    state = {
        email: (!!localStorage.getItem(localStorageVariables.email)) ? localStorage.getItem(localStorageVariables.email) : '',
        password: '',
        validateInput: false,
        loading: false
    }

    componentDidMount() {
        document.body.style.background = `url(${image}) no-repeat center center fixed`
        document.body.style.backgroundSize = "cover"
    }

    componentWillUnmount() {
        document.body.style.background = ``
    }

    logar = () => {
        this.setState({
            validateInput: true,
            loading: (!!this.state.email && !!this.state.password)
        })

        authenticate.autheticate(this.state.email, this.state.password).then(() => {
            this.props.history.push('/')
        }).catch(err => {
            if (err.response.status === 401) {
                Modal.error({
                    title: 'Atencao',
                    content: 'E-mail ou senha incorretos',
                })

                this.setState({ loading: false })
            }
        })
    }

    logarKeyUp = (env) => {
        if (env.keyCode === 13) { this.logar() }
    }

    otherAccount = () => {
        authenticate.clearAll()
        this.props.history.push('/')
    }

    render() {
        if (authenticate.isAuthenticated()) {
            return (<Redirect to='/'/>)
        } else {
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
                                    <Avatar style={{ display: (!!localStorage.getItem(localStorageVariables.avatar)) ? '' : 'none' }}>
                                        <img alt='Avatar' src={localStorage.getItem(localStorageVariables.avatar)} className="ui small circular image" height='20'></img>
                                    </Avatar>
                                    <CardContent>
                                        <InputTitle style={{ display: (!!localStorage.getItem(localStorageVariables.email)) ? 'none' : '' }}>E-mail</InputTitle>
                                        <InputValidation style={{ display: (!!localStorage.getItem(localStorageVariables.email)) ? 'none' : '' }} onKeyUp={this.logarKeyUp} validated={this.state.validateInput} value={this.state.email} onChange={(env) => this.setState({ email: env.target.value })} type='email' />
                                        <InputTitle>Senha</InputTitle>
                                        <InputValidation onKeyUp={this.logarKeyUp} validated={this.state.validateInput} value={this.state.password} onChange={(env) => this.setState({ password: env.target.value })} type='password' />
                                        <LinkNav onClick={() => authenticate.clearAll()} to='/'>Esqueceu sua senha?</LinkNav>
                                        <LinkNavUser onClick={this.otherAccount} style={{ float: "right", display: (!!localStorage.getItem(localStorageVariables.email)) ? '' : 'none' }} to=''>Entrar com outra conta</LinkNavUser>
                                        <Button onKeyUp={this.logarKeyUp} onClick={this.logar} color="primary" style={{ marginTop: '20px' }} block>{!!this.state.loading ? <Icon name='circle notched' loading /> : 'Entrar'}</Button>
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

const LinkNavUser = styled.a`
    color: #007bff !important;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 9pt;
    :hover {
        text-decoration: underline !important;
    }
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
