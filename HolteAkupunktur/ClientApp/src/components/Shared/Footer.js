import React, { Component } from 'react';
import styles from './Footer.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends Component {
    render() {
        return (
            <Row className={styles.footersection}>
                <Col md={3}><a href="https://www.google.dk/maps/place/Holte+Midtpunkt+20,+2.+sal,+2840+Holte/@55.8119396,12.4695307,17z/data=!3m1!4b1!4m5!3m4!1s0x46524f196a2cac89:0xe41865b21454178b!8m2!3d55.8119366!4d12.4717194" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon='map-marked-alt' /></a>&nbsp;Holte Midtpunkt 20, 2. sal</Col>
                <Col md={3}><a href="tel:40808870"><FontAwesomeIcon icon='phone-square' /></a>&nbsp;Telefon: 40808870</Col>
                    <Col md={6}>&nbsp;<FontAwesomeIcon icon='building' /> CVR: 40197559 - klassisk kinesisk akupunktur v/Bingya Nielsen</Col>
            </Row>
        );
    }
};
