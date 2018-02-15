import React, { Component } from 'react'
import MyErrorBoundary from '../components/MyErrorBoundary'
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my entry task solution</h1>
        </header>
        <div className="App-main">

          <SearchForm
            onSubmit={this.handleOnSubmit} />

          <MyErrorBoundary>
            <FlightsList
              filter={this.state.filter} />
          </MyErrorBoundary>

        </div>
      </div>
    )
  }
}

export default App
