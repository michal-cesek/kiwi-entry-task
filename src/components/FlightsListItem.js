import React from 'react'
import dateformat from 'dateformat'

const formatDateTime = ts =>
    dateformat(new Date(parseInt(ts, 10) * 1000), 'HH:MM dd/mm/yy')

const FlightsListItem = ({ data: { cityFrom, cityTo, price, dTime, aTime } }) =>
    <div className='flight-list-item'>
        <div><strong>{price}</strong>EUR</div>
        <div>
            <span>{formatDateTime(dTime)}</span>
            <strong>{cityFrom} -> {cityTo}</strong>
            <span>{formatDateTime(aTime)}</span>
        </div>
    </div>

export default FlightsListItem