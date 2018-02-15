import React, { Component } from 'react'
import client from '../client'
import FlightsListItem from './FlightsListItem'


class FlightsList extends Component {

    constructor(props) {
        super(props)
        this.state = { flights: [], page: 0 }
    }

    componentDidUpdate() {
        client.doFlightsGetApiRequest(this.props.filter)
            .then(res => this.setState({ flights: res.data }))
    }

    render() {
        const { flights } = this.state

        return (
            <div>
                {flights.map((r, i) => <FlightsListItem key={i} data={r} />)}
            </div>
        )
    }
}


export default FlightsList
