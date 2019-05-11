import React, { Component } from 'react';
import styles from './Subsidation.css';
import { Col, Row } from 'react-bootstrap';

export class Subsidation extends Component {
    render() {
        return (
            <Row id="treatment" className={styles.section}>
                <Col xs={12} md={12}>
                    <h3 className="d-flex justify-content-center">Tilskud til alternativ behandling</h3>
                </Col>
                <Col md={12}>
                    <p>Forsikringsselskaber yder tilskud til akupunktur behandlinger udført af behandlere der er medlemmer af R.A.B ordningen:</p> 
                    <ul>
                        <li>”Danmark”</li>
                        <li>PFA</li>
                        <li>Danica.</li>
                        <li>Skandia</li>
                        <li>Topdanmark  mf.</li>
                    </ul>
                    <p>Hvis du har en sundhedsforsikring bør du kontakte dit forsikringsselskab for yderligere Oplysninger.</p> 
                </Col>
            </Row>
        );
    }
};
