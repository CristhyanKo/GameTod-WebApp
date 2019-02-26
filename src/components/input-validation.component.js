import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'
import styled from 'styled-components'

class InputValidation extends Component {
    state = {
        emailValidated: false
    }

    validateEmail = (email) => {
        if (this.props.isEmail) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (re.test(String(email).toLowerCase())) {
                this.setState({ emailValidated: false })
            } else {
                this.setState({ emailValidated: true })
            }
        }
    }

    render() {
        return (
            <div>
                {!!(this.props.value === '' && this.props.validated) && <Label pointing='below' className={'animated pulse'} color={'red'} >Este campo é de preenchimento obrigatório.</Label>}
                {!!(this.state.emailValidated && this.props.isEmail) && <Label pointing='below' className={'animated pulse'} color={'red'} >O e-mail informado é inválido.</Label>}
                <InputStyled style={{color: (!!this.props.textColor) ? this.props.textColor : '#f6f6f7' }} onBlur={(env) => this.validateEmail(env.target.value)} {...this.props} />
            </div>
        )
    }
}

export default InputValidation

const InputStyled = styled.input`
    width: 100% !important;
    background-color: rgba(0,0,0,.1) !important;
    border-color: rgba(0,0,0,.3) !important;
    border-radius: 3px !important;
    border-style: solid !important;
    border-width: 1px !important;
    box-sizing: border-box !important;
    transition: background-color .15s ease,border .15s ease !important;
    padding: 8px !important;
`