import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import PrivatePage from '../components/private-page.component';
import { Card, BigCard, ClearCard } from '../styles/card.styled'

class Dashboard extends Component {
    render() {
        return (
            <PrivatePage>
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
                        <ClearCard>

                        </ClearCard>
                    </Col>
                    <Col sm={12} md={6}>
                        <ClearCard>

                        </ClearCard>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <ClearCard>

                        </ClearCard>
                    </Col>
                    <Col sm={12} md={6}>
                        <ClearCard>

                        </ClearCard>
                    </Col>
                </Row>
            </PrivatePage>
        )
    }
}

export default Dashboard