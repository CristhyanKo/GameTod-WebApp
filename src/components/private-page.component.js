import React, { Component } from 'react'
import auth from '../services/auth.service'
import api from '../services/api.service'
import localStorageVariables from '../localstorage-variables'
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const authentication = new auth()

class PrivatePage extends Component {
    componentDidMount() {
        this.validateToken(localStorage.getItem(localStorageVariables.token))
    }

    state = {
        authenticated: null
    }

    validateToken = async (token) => {
        await api.post('/user/validate-token', null, { headers: { "x-access-token": token } }).then(res => {
            this.setState({ authenticated: res.data.valid })
        }).catch(() => {
            this.setState({ authenticated: false })
        })
    }

    render() {
        switch (this.state.authenticated) {
            case false:
                authentication.clear().then(() => {
                    this.props.history.push('/')
                })
                return ''
            case true:
                return this.props.children
            default:
                return <Spin indicator={antIcon} />
        }
    }
}

export default PrivatePage