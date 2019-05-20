import React, { Component } from 'react';
import pic1 from '../../img/DSC_1874.JPG';
import pic2 from '../../img/DSC_1875.JPG';
import pic3 from '../../img/DSC_1876.JPG';
import pic4 from '../../img/DSC_1880.JPG';
import pic5 from '../../img/DSC_1881.JPG';
import pic6 from '../../img/DSC_1882.JPG';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Image, Row } from 'react-bootstrap';

export class OfficeCarousel extends Component {
    render() {
        return (
            <Row>
                <Carousel className="d-block w-100" fade={true} indicators={false}>
                        <Carousel.Item>
                            <img className="d-block w-100" src={pic1} alt="Klassisk Kinesisk Akupunktur" />
                        </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pic2} alt="Klassisk Kinesisk Akupunktur" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pic3} alt="Klassisk Kinesisk Akupunktur" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pic4} alt="Klassisk Kinesisk Akupunktur" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pic5} alt="Klassisk Kinesisk Akupunktur" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={pic6} alt="Klassisk Kinesisk Akupunktur" />
                    </Carousel.Item>
                    </Carousel>
            </Row>
        );
    }
};
