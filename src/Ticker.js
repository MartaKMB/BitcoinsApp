import React, { Component } from 'react';
import {URL} from './config';

class Ticker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            loadinig: true, // przechowuje inf czy Ticker został załadowany - wykonał się
            error: false
        }
    }

    componentWillMount() {
        this.ticker();
    }

    componentDidMount() {
        // setInterval(() => this.ticker(), 10000)
    }

    componentWillUpdate(nextProps, nextState) {
        //stan który będzie aktualizowany z obecnym
        if(!this.state.error && nextState.error) {
            alert('Error');
        }
    }
    
    ticker() {
        fetch(`${URL}/btcpln/ticker.json`)
        .then(res => res.json())
        .catch(error => {
            this.setState({error: true, loadinig: false});
        })
        .then(res => {
            this.setState({
                loadinig: false,
                data: res
            })
        })
    }

    render() {

        const {data, loadinig, error} = this.state;

        if(loadinig || error) {
            return <div>Ładowanie...</div>
        }

        return (
        <div className="ticker_container">
            <ul>
                <li>Maksymalna cena: {data.max} PLN</li>
                <li>Minimalna cena: {data.min} PLN</li>
                <li>Ostatnia cena: {data.last} PLN</li>
                <li>Wolumen: {data.volume} BTC</li>
            </ul>
        </div>
        );
    }
}

export default Ticker;