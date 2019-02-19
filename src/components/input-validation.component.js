import React from 'react'
import { Label } from 'semantic-ui-react'
import styled from 'styled-components'

const InputValidation = (props) => {
    return (
        <div>
            {!!(props.value === '' && props.validated) && <Label pointing='below' className={'animated pulse'} color={'red'} >Este campo é de preenchimento obrigatório.</Label>}
            <InputStyled {...props} />
        </div>
    )
}

export default InputValidation


const InputStyled = styled.input`
    background-color: rgba(0,0,0,.1) !important;
    border-color: rgba(0,0,0,.3) !important;
    color: #f6f6f7 !important;
    border-radius: 3px !important;
    border-style: solid !important;
    border-width: 1px !important;
    box-sizing: border-box !important;
    transition: background-color .15s ease,border .15s ease !important;
    width: 100% !important;
    padding: 8px !important;
`