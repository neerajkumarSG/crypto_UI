import React from 'react';
import ReactDOM from 'react-dom';

import CryptoCcyList from './components/CryptoCcyList';

function initialise() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<CryptoCcyList/>, app);
}

initialise();