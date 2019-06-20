import React, { Component } from 'react';
import picOffice from '../../img/Office1.jpg'
import styles from './Clinic.css';
import { Col, Image, Row } from 'react-bootstrap';

export class Clinic extends Component {
    render() {
        return (
            <Row id="treatment" className={styles.section}>
                <Col xs={12} md={12}>
                    <h3 className="d-flex justify-content-center">Om Klinikken</h3>
                </Col>
                <Col md={6}>
                    <p>Bing er uddannet på Institution of Acupuncture and Moxibustion China Academy of Chinese medical
Sciences i Beijing.</p>
                    <p>I år 2000 blev jeg uddannet på University of traditionel Chinese medicin i LiaoNing </p>
                    <p>Denne skole er verdens mest anerkendte akupunktur skole og folk fra hele verden kommer hertil for at lære akupunkturens kunst.
                        Bing har også uddannet sig i Danmark og er godkendt af RAB akupunktur union. Du kan få en professionel kinesisk akupunktur behandling.</p>
<p>Jeg har arbejdet hos forskellige Københavnske klinikker igennem nogle år og har således opnået stor erfaring og ekspertise.
Jeg lægger vægt på, at behandlingerne sker i en atmosfære præget af stor tryghed.</p>
                </Col>
                <Col md={6}>
                    <Image className={styles.image} fluid src={picOffice} />
                </Col>

            </Row>
        );
    }
};
