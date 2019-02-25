import React, { Component } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h3 style={{ color: '#fff' }}>
                            Novidades
                        </h3>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={8}>
                        <BigCard>

                        </BigCard>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Col>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h3 style={{ color: '#fff' }}>
                            Atividade
                        </h3>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <GameCard>

                        </GameCard>
                    </Col>
                    <Col sm={12} md={6}>
                        <GameCard>

                        </GameCard>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <GameCard>

                        </GameCard>
                    </Col>
                    <Col sm={12} md={6}>
                        <GameCard>

                        </GameCard>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard

const Card = styled.div`
    width:100%;
    padding:40px;
    background-color: #202225 !important;
    border-color: #333 !important;
    border-radius: 5px;
    margin-bottom: 10px;
`

const GameCard = styled.div`
    width:100%;
    padding:40px;
    background-color: #2f3136 !important;
    border-color: #333 !important;
    border-radius: 5px;
    margin-bottom: 10px;
`

const BigCard = styled.div`
    width:100%;
    height: 350px;
    padding:40px;
    background-color: #202225 !important;
    border-color: #333 !important;
    border-radius: 5px;
    margin-bottom: 10px;
`