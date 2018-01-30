import React, { Component } from 'react';
import BitBay from './BitBay-RGB.svg';
import {URL} from './config';

class Header extends Component {

    render() {

        return (
            <header>
                <img src={BitBay} />
                <div className="title_container">
                    <h1>informacje giełdowe BTC/PLN</h1>
                    <h2>aktualizowane co sekundę</h2>
                </div>
            </header>
        );
    }
}

export default Header;