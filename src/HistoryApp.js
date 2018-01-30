import React, { Component } from 'react';
import {URL} from './config';

class HistoryApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loadinig: true,
            error: false
        }
    }

    componentWillMount() {
        this.historyFetch();
    }

    componentDidMount() {
        // setInterval(() => this.historyFetch(), 10000)
    }

    componentWillUpdate(nextProps, nextState) {
        //stan który będzie aktualizowany z obecnym
        if(!this.state.error && nextState.error) {
            alert('Error');
        }
    }
    
    historyFetch() {
        fetch(`${URL}/btcpln/trades.json?sort=desc`)
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
        <ul>
            {data.map((history, index) =>
                <li key='index'>data: {new Date(history.date*1000).toLocaleString()}, cena: {history.price}, ilość: {history.amount}</li>
            )}
        </ul>
        );
    }
}

export default HistoryApp;