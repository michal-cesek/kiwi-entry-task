import React, { Component } from 'react'
import client from '../client'
import SearchFormInput from '../components/SearchFormInput'
import SearchFormInputAuto from '../components/SearchFormInputAuto'

const autocompleteTimeout = 250

class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityFrom: 'PRG',
            cityFromLocations: [],
            cityTo: 'NAP',
            cityToLocations: [],
            date: '20/03/2018'
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
                    type='text'
                    name='cityFrom'
                    label='From'
                    value={cityFrom}
                    items={cityFromLocations}
                    onChange={this.handleAutocompleteOnChange} />

                <SearchFormInputAuto
                    type='text'
                    name='cityTo'
                    label='To'
                    value={cityTo}
                    items={cityToLocations}
                    onChange={this.handleAutocompleteOnChange} />

                <SearchFormInput
                    type='date'
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
