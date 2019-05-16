import React, { Component } from 'react';
import styles from './Prices.css';
import { Col, Row, Card, Table } from 'react-bootstrap';

export class Prices extends Component {
    render() {
        return (
            <Row id="prices" className={styles.pricesection}>
                <Col md={6}>
                    <Card className={styles.card}>
                        <Card.Body>
                            <Card.Title>Akupunktur behandling</Card.Title>
                                <Table className={styles.table} size="sm">
                                    <tbody>
                                        <tr>
                                            <td>Første gang behandling</td>
                                            <td align="right">550 kr.</td>
                                        </tr>
                                        <tr>
                                            <td>Efterfølgende behandling</td>
                                            <td align="right">480 kr.</td>
                                        </tr>
                                        <tr>
                                            <td>Rabat kort 6 gange</td>
                                            <td align="right">2600 kr.</td>
                                        </tr>
                                        <tr>
                                            <td>Rabat kort 10 gange</td>
                                            <td align="right">4200 kr.</td>
                                        </tr>
                                        <tr>
                                            <td>Rabat kort til pensionister og børn 10 gange</td>
                                            <td align="right">3800 kr.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className={styles.card}>
                        <Card.Body>
                            <Card.Title>Massage behandling</Card.Title>
                                <Table className={styles.table} size="sm">
                                    <tbody>
                                        <tr>
                                            <td>30 minutter</td>
                                            <td align="right">300 kr.</td>
                                        </tr>
                                        <tr>
                                            <td>45 minutter</td>
                                            <td align="right">380 kr.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <h5>NB: Tager kun imod kontant og Mobilepay</h5>
                </Col>
            </Row>
        );
    }
};
