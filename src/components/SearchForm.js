import React, { Component } from 'react'
import SearchFormInput from '../components/SearchFormInput'

class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = { cityFrom: 'PRG', cityTo: 'NAP', date: '20/03/2018' }
    }

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {

        const { date, cityTo, cityFrom } = this.state
        const { onSubmit } = this.props

        return (
            <div>
                <SearchFormInput
                    type='text'
                    name='cityFrom'
                    label='From'
                    value={cityFrom}
                    onChange={this.handleOnChange} />

                <SearchFormInput
                    type='text'
                    name='cityTo'
                    label='To'
                    value={cityTo}
                    onChange={this.handleOnChange} />

                <SearchFormInput
                    type='date'
                    name='date'
                    label='Date'
                    value={date}
                    onChange={this.handleOnChange} />

                <button onClick={() => onSubmit(this.state)}>
                    Search
              </button>
            </div>
        )
    }
}

export default SearchForm
