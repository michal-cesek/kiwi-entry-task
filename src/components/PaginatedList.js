import React, { Component } from 'react'
import PaginatedListNav from './PaginatedListNav'

const getPagesCount = (nItems, itemsPerPage) => Math.ceil(nItems / itemsPerPage)

const getPageItems = (itemsPerPage, page, items) => 
    (items.length < itemsPerPage * page)
        ? items.slice(itemsPerPage * (page - 1), items.length)
        : items.slice(itemsPerPage * (page - 1), itemsPerPage * page)

// page - starting from 1 not 0
const initialState = { page: 1 }

class PaginatedList extends Component {

    constructor(props) {
        super(props)
        this.state = initialState
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState(initialState)
        }
    }

    handleOnPageChange = page => {
        this.setState({ page })
    }

    render() {
        const { items, itemsPerPage, ItemComponent } = this.props

        if (!items)
            return null

        if (!items.length)
            return <div>No results</div>

        const nPages = getPagesCount(items.length, itemsPerPage)
        const pageItems = getPageItems(itemsPerPage, this.state.page, items)

        return (
            <div>
                <div>
                    {pageItems.map((p, i) => <ItemComponent key={i} data={p} />)}
                </div>

                <PaginatedListNav
                    nPages={nPages}
                    currentPage={this.state.page}
                    onClick={this.handleOnPageChange} />
            </div>
        )
    }
}


export default PaginatedList
