import React, { Component } from 'react';
import { MainCarousel } from './MainCarousel';
import { OfficeCarousel } from './OfficeCarousel';
import { Welcome } from './Welcome';
import { Prices } from './Prices';
import { About } from './About';
import { Treatment } from './Treatment';
import { Progress } from './Progress';
import { Clinic } from './Clinic';
import { Subsidation } from './Subsidation';
import { Footer } from '../Shared/Footer';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div>
                <MainCarousel />
                <Welcome />
                <About />
                <Treatment/>
                <Progress />
                <Clinic />
                <OfficeCarousel />
                <Prices />
                <Subsidation />
                <Footer />
            </div>
        );
    }
}
