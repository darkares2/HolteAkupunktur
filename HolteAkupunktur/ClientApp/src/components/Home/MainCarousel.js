import React, { Component } from 'react';
import pic1 from '../../img/Test1.jpg';
import pic2 from '../../img/Test2.jpg';
import pic3 from '../../img/Test3.jpg';
import picOwner from '../../img/bingya.jpg'
import styles from './MainCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Image, Row } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

export class MainCarousel extends Component {
    render() {
        return (
            <Row>
                <Carousel className="d-block w-100">
                        <Carousel.Item>
                            <img className="d-block w-100" src={pic1} alt="Klassisk Kinesisk Akupunktur" />
                            <Carousel.Caption>
                                <h3 className={styles.brighttext}>Klassisk Kinesisk Akupunktur</h3>
                                <Col xs={12} md={12}>
                                    <Image className={styles.ownerimage} alt="Klassisk Kinesisk Akupunktur" src={picOwner} roundedCircle />
                                    <span className={styles.info}>v/Bingya Nielsen</span>
                                </Col>
                                <Col xs={12} md={12}><span className={styles.info}>Mangeårig erfaring og ekspertise</span></Col>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={pic2} alt="Effektiv Behandling" />
                            <Carousel.Caption>
                                <h3>Effektiv mod</h3>
                                <ul>
                                    <li>smerter</li>
                                    <li>allergi</li>
                                    <li>astma</li>
                                    <li>sportsskader</li>
                                    <li>søvnløshed</li>
                                    <li>træthed</li>
                                    <li>m.m.</li>
                                </ul>
                            <Link
                                className="btn btn-success"
                                role="button"
                                to={'#treatment'}>Behandlinger</Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={pic3} alt="Tilskudsberettiget" />
                            <Carousel.Caption>
                                <h3 className={styles.whitetext}>Tilskud til alternativ behandling</h3>
                            <p className={styles.whitetext}>Forsikringsselskaber yder tilskud til akupunktur behandlinger udført af behandlere der er medlemmer af R.A.B ordningen. </p>
                            <Link
                                className="btn btn-danger"
                                role="button"
                                to={'#prices'}>Priser</Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            </Row>
        );
    }
};
