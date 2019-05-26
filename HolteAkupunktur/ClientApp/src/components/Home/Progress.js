import React, { Component } from 'react';
import styles from './Progress.css';
import { Col, Card, Row } from 'react-bootstrap';

export class Progress extends Component {
    render() {
        return (
            <Row id="treatment" className={styles.section}>
                <Col xs={12} md={12}>
                    <h3 className="d-flex justify-content-center">Behandslingsforløb</h3>
                    <p>Første gang du kommer på besøg, starter vi med en samtale og undersøgelse. Hvis du tidligere har haft problemer skal jeg kende og forstå din sygdoms historie.
                       Efter konsultation laver vi en behandlings plan.</p>
                    <p>Behandlings varighed er ca. 30-40 minutter. Efter behandling kan der forekomme reaktioner i kroppen. Det kan være behagelighed, ømhed eller afslappethed.
                       Man kan også føle at man har mere energi.</p>
                    <p>Forsikringsselskaber yder tilskud til akupunktur behandlinger udført af behandlere der er medlemmer af R.A.B ordningen Hvis du har en sundhedsforsikring bør du kontakte dit forsikringsselskab for yderligere oplysninger.</p>
                </Col>
            </Row>
        );
    }
};
