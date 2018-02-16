import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import FlightsList from '../components/FlightsList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { filter: {} }
  }

  handleOnSubmit = filter => {
    this.setState({ filter })
  }

  render() {

    return (
      <div className='app'>
        <SearchForm
          onSubmit={this.handleOnSubmit} />
        <FlightsList
          filter={this.state.filter} />
      </div>
    )
  }
}

export default App
