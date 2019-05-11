import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkedAlt, faPhoneSquare, faBuilding } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkedAlt)
library.add(faPhoneSquare)
library.add(faBuilding)

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
