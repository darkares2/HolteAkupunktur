import React, { Component } from 'react';
//import Map from '../Shared/Map'
import styles from './Welcome.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Welcome extends Component {
    render() {
        return (
            <Row id="welcome" className={styles.welcomesection}>
                <Col xs={12} md={12}>
                    <h3 className="d-flex justify-content-center">Velkommen til klinikken</h3>
                    <p className="d-flex justify-content-center">Her kan du få professionel akupunktur behandling i Holte</p>
                    <p className="d-flex justify-content-center">Jeg tilbyder akupunktur og massage efter traditionelle kinesiske behandlingsmetoder</p>
                    <p className="d-flex justify-content-center">Klinikken ligger centralt i Holte. Her kan du få ægte kinesisk akupunktur.</p>
                    <p className="d-flex justify-content-center">Mandag til fredag fra kl. 9 til kl. 17:30</p>
                    <p className="d-flex justify-content-center">Efter aftale om søndagen.</p>
                    <Row className={styles.phonesection}>
                        <Col xs={12} md={8}>
                            <h1 className="d-flex justify-content-center">Bestil nu på telefon</h1>
                        </Col>
                        <Col xs={12} md={4}>
                            <h1>4080 8870</h1>
                        </Col>
                        <Col xs={12}>
                            <h3 className="d-flex justify-content-center"><a href="https://www.google.dk/maps/place/Holte+Midtpunkt+20,+2.+sal,+2840+Holte/@55.8119396,12.4695307,17z/data=!3m1!4b1!4m5!3m4!1s0x46524f196a2cac89:0xe41865b21454178b!8m2!3d55.8119366!4d12.4717194" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon='map-marked-alt' /></a>&nbsp;Holte Midtpunkt 20, 2. sal - (Elevator ved Apoteket)</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
};
