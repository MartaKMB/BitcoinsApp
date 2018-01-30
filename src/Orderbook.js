import React, { Component } from 'react';
import {URL} from './config';

class Orderbook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                asks: [],
                bids: [] // oferty kupna i sprzedaży
            },
            loadinig: true, 
            error: false
        }
    }

    componentWillMount() {
        this.orderbook();
    }

    componentDidMount() {
        setInterval(() => this.orderbook(), 10000)
    }

    componentWillUpdate(nextProps, nextState) {
        if(!this.state.error && nextState.error) {
            alert('Error');
        }
    }
    
    orderbook() {
        fetch(`${URL}/btcpln/orderbook.json`)
        .then(res => res.json())
        .catch(error => {
            this.setState({error: true, loadinig: false});
        })
        .then(res => {
            const {bids, asks} = res; // wyciągamy dwie tablice z jsona, który do nas przyszedł
            this.setState({
                loadinig: false,
                data: {
                    bids: bids,
                    asks: asks
                }
            })
        })
    }

    printTable(dataArray) {
        return dataArray.map((bid, index) => 
            <tr key={index}>
                <td className="row_data">{bid[0]}</td>
                <td className="row_data">{bid[1]}</td>
            </tr>
        )
    }

    render() {

        const {data, loadinig, error} = this.state;

        if(loadinig || error) {
            return <div>Ładowanie...</div>
        }

        return (
        <div className="tables_container">

            <table >     
                <thead>
                    <tr>
                        <th>cena sprzedaży</th>
                        <th>ilość</th>
                    </tr>
                </thead>
                <tbody>
                    {this.printTable(data.bids)}
                </tbody>
               
            </table>

            <table>
                <thead>
                    <tr>
                        <th>cena kupna</th>
                        <th>ilość</th>
                    </tr>
                </thead>
                <tbody>
                    {this.printTable(data.asks)}
                </tbody>
            </table>
            
        </div>
        );
    }
}

export default Orderbook;