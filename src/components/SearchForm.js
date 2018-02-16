import React, { Component } from 'react'
import moment from 'moment';
import client from '../client'
import SearchFormInputAuto from '../components/SearchFormInputAuto'
import SearchFormInputDate from '../components/SearchFormInputDate'

const autocompleteTimeout = 250

class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityFrom: 'PRG',
            cityFromLocations: [],
            cityTo: 'NAP',
            cityToLocations: [],
            date: moment()
        }
    }

    handleOnInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAutocompleteOnChange = e => {
        clearTimeout(this.timeoutHandler)
        this.handleOnInputChange(e)

        const getAndSetLocations = () => client
            .doLocationsGetApiRequest({ term: e.target.value })
            .then(res => this.setState({ [`${e.target.name}Locations`]: res.locations }))

        this.timeoutHandler = setTimeout(getAndSetLocations, autocompleteTimeout)
    }

    render() {
        const { date, cityTo, cityFrom, cityFromLocations, cityToLocations } = this.state

        return (
            <div>
                <SearchFormInputAuto
                    name='cityFrom'
                    label='From'
                    value={cityFrom}
                    items={cityFromLocations}
                    onChange={this.handleAutocompleteOnChange} />

                <SearchFormInputAuto
                    name='cityTo'
                    label='To'
                    value={cityTo}
                    items={cityToLocations}
                    onChange={this.handleAutocompleteOnChange} />

                <SearchFormInputDate
                    name='date'
                    label='Date'
                    value={date}
                    onChange={this.handleOnInputChange} />


                <button onClick={() => this.props.onSubmit({ cityTo, cityFrom, date })}>
                    Search
              </button>
            </div>
        )
    }
}

export default SearchForm
