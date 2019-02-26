import styled from 'styled-components'

export const Card = styled.div`
    width:100%;
    padding:${props => props.padding ? props.padding :  '40px'};
    background-color: #202225 !important;
    border-color: #333 !important;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const ClearCard = styled.div`
    width:100%;
    padding:40px;
    background-color: #2f3136 !important;
    border-color: #333 !important;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const BigCard = styled.div`
    width:100%;
    height: 350px;
    padding:40px;
    background-color: #202225 !important;
    border-color: #333 !important;
    border-radius: 5px;
    margin-bottom: 10px;
`