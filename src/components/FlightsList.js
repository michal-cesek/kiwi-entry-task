import React, { Component } from 'react'
import client from '../client'
import FlightsListItem from './FlightsListItem'

class FlightList extends Component {

    constructor(props) {
        super(props)
        this.state = { flights: [], page: 0 }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            client.doFlightsGetApiRequest(this.props.filter)
                .then(res => this.setState({ flights: res.data }))
        }

    }

    render() {
        return (
            <div>
                {this.state.flights.map((r, i) => <FlightsListItem key={i} data={r} />)}
            </div>
        )
    }
}


export default FlightList
