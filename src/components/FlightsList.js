import React, { Component } from 'react'
import client from '../client'
import FlightsListItem from './FlightsListItem'
import PaginatedList from './PaginatedList'

const itemsPerPage = 5

class FlightList extends Component {

    constructor(props) {
        super(props)
        this.state = { flights: null }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            client.doFlightsGetApiRequest(this.props.filter)
                .then(res => this.setState({ flights: res.data }))
        }
    }

    render() {
        return (
            <PaginatedList
                itemsPerPage={itemsPerPage}
                items={this.state.flights}
                ItemComponent={FlightsListItem} />
        )
    }
}


export default FlightList
