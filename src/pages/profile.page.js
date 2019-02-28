import React, { Component } from 'react'
import { Col, Row, Button } from 'reactstrap'
import { notification } from 'antd'
import styled from 'styled-components'
import PrivatePage from '../components/private-page.component'
import { ClearCard, Card } from '../styles/card.styled'
import AvatarUser from '../components/avatar.component';
import localStorageVariables from '../localstorage-variables'
import InputValidation from '../components/input-validation.component';
import api from '../services/api.service';
import config from '../config';
import { Icon } from 'semantic-ui-react'

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class Profile extends Component {
    state = {
        loading: false,
        loadingImage: false,
        avatar: localStorage.getItem(localStorageVariables.avatar),
        email: localStorage.getItem(localStorageVariables.email),
        nick: localStorage.getItem(localStorageVariables.nick),
        firstName: localStorage.getItem(localStorageVariables.firstName),
        secondName: localStorage.getItem(localStorageVariables.secondName)
    }

    updateImage = () => {
        this.refs.fileUploader.click();
    }

    onChangeImage = (env) => {
        this.setState({ loadingImage: true })
        env.stopPropagation()
        env.preventDefault()
        var file = env.target.files[0]
        getBase64(file).then(res => {
            this.setState({ avatar: res, loadingImage: false })
        }).catch(() => {
            this.setState({ loadingImage: false })
        })
    }

    updateProfile = () => {
        this.setState({ loading: (!!this.state.email && !!this.state.firstName && !!this.state.secondName && !!this.state.nick) })
        api.put(`/user/${localStorage.getItem(localStorageVariables.id)}`, this.state, config.apiHeaderUserToken).then(() => {
            this.setState({ loading: false })

            notification['success']({
                message: 'Atencao',
                description: 'Perfil alterado com sucesso.'
            })

            localStorage.setItem(localStorageVariables.avatar, this.state.avatar)
            localStorage.setItem(localStorageVariables.nick, this.state.nick)
            localStorage.setItem(localStorageVariables.email, this.state.email)
            localStorage.setItem(localStorageVariables.firstName, this.state.firstName)
            localStorage.setItem(localStorageVariables.secondName, this.state.secondName)

        }).catch(err => {
            this.setState({ loading: false })
        })
    }

    render() {
        return (
            <PrivatePage {...this.props}>
                <Card padding={'10px'}>
                    <Row>
                        <Col>
                            <h3 style={{ color: '#fff' }}>
                                Perfil
                            </h3>
                        </Col>
                    </Row>
                </Card>


                <ClearCard>
                    <Row>
                        <Col md={{ size: 2, offset: 1 }}>
                            <center>
                                <AvatarImage style={{ display: (!!localStorage.getItem(localStorageVariables.email)) ? '' : 'none' }}>
                                    <AvatarUser imageSrc={this.state.avatar} size={150} fontSize={'32pt'} />
                                </AvatarImage>
                            </center>
                            <input accept=".jpg, .png, .jpeg, .gif, .bmp" type="file" id="file" ref="fileUploader" onChange={this.onChangeImage} style={{ display: "none" }} />
                            <Button style={{ margin: '20px 0px' }} onClick={this.updateImage} color="warning" block>{!!this.state.loadingImage ? <Icon name='circle notched' loading /> : 'Alterar avatar'}</Button>

                        </Col>
                        <Col md={{ size: 8, offset: 1 }}>
                            <Row >
                                <Col md={4}>
                                    <InputTitle>Code</InputTitle>
                                    <InputValidation textColor={'#E0A800'} disabled value={'#00001'} type='text' />
                                </Col>
                                <Col md={4}>
                                    <InputTitle>Nick</InputTitle>
                                    <InputValidation validated={false} onChange={env => this.setState({ nick: env.target.value })} value={this.state.nick} type='text' />
                                </Col>
                            </Row>

                            <Row style={{ marginTop: 10 }}>
                                <Col md={4}>
                                    <InputTitle>Nome</InputTitle>
                                    <InputValidation value={this.state.firstName} onChange={env => this.setState({ firstName: env.target.value })} validated={false} type='text' />
                                </Col>

                                <Col md={4}>
                                    <InputTitle>Sobrenome</InputTitle>
                                    <InputValidation value={this.state.secondName} onChange={env => this.setState({ secondName: env.target.value })} validated={false} type='text' />
                                </Col>
                            </Row>

                            <Row style={{ marginTop: 10 }}>
                                <Col md={8}>
                                    <InputTitle>E-mail</InputTitle>
                                    <InputValidation textColor={'#5A6268'} disabled validated={false} value={this.state.email} type='email' />
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col md={3}>
                                    <Button style={{ marginBottom: '20px' }} color="secondary" block>Alterar e-mail</Button>
                                </Col>
                                <Col md={3}>
                                    <Button style={{ marginBottom: '20px' }} color="secondary" block>Alterar senha</Button>
                                </Col>
                                <Col md={2}>
                                    <Button onClick={this.updateProfile} color="success" block>{!!this.state.loading ? <Icon name='circle notched' loading /> : 'Salvar'}</Button>
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