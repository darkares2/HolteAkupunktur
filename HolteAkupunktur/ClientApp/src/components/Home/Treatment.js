import React, { Component } from 'react';
import styles from './Treatment.css';
import { Col, Card, Row } from 'react-bootstrap';

export class Treatment extends Component {
    render() {
        return (
            <Row id="treatment" className={styles.section}>
                <Col xs={12} md={12}>
                    <h3 className="d-flex justify-content-center">Jeg behandler</h3>
                </Col>
                <Col md={4}>
                    <Card className={styles.card}>
                        <Card.Body>
                            Smerter, migræne, hovedpine, tandpine, iskis, Leddegigt, frossen skulder, allergi, astma, hoste, sports skader, tennisalbue.
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className={styles.card}>
                        <Card.Body>
                            Depression, stress, angst, søvnløshed, træthed, svimmelhed, kvalme, højt blodtryk.                             
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className={styles.card}>
                        <Card.Body>
                            Problemer ifm. overgangsalder, fordøjelses problemer, forstoppelse, tinnitus, mavesår, appetitløshed, diarre, ufrivillig vandladning, problemer ifm. overvægt.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
};
