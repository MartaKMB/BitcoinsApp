import React, { Component } from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
        console.log('didmount');
    }

    render() {
        console.log('render');
        return (
            <div className="clock">{this.state.date.toTimeString()}</div>
        )
    }
}

export default Timer;