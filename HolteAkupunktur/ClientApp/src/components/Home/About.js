import React, { Component } from 'react';
import styles from './About.css';
import { Col, Row } from 'react-bootstrap';

export class About extends Component {
    render() {
        return (
            <Row className={styles.section}>
                <Col xs={12} md={12}>
                    <h3 className="d-flex justify-content-center">Om akupunkturen</h3>
                    <p className="d-flex justify-content-center">Akupunktur er blevet mere kendt og anerkendt i vesten. Der er flere vidensbaserede undersøgelser, som bekræfter akupunkturs virkning.<br />
Akupunktur har eksisteret ca. 5000 år i Kina. Akupunktur er bare en af behandlingsmetoderne i kinesisk medicin. Akupunkturen er også grundfæstet den kinesiske kultur. 
Kinesisk akupunktur behandling, betragter kroppen og psyken som en del af samme helhed.
Et andet centralt begreb er Qi. Qien cirkulerer konstant i kroppen og er mest koncentreret i meridianerne. 
På kroppen er der 14 energibaner, der er 365 bestemte akupunkturpunkter.
Akupunkturen afbalancerer kroppen og organerne, og forebygger således sygdom.
Akupunkturen stimulerer kroppen til at helbrede sig selv, der er ingen medicinske bivirkninger. 
Akupunkturen kan forstærke immunsystemet og tilføre mere energi til kroppen.</p>
                </Col>
            </Row>
        );
    }
};
