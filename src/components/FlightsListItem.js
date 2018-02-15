import React from 'react'
import dateformat from 'dateformat'

const foo = ts => dateformat(new Date(parseInt(ts) * 1000), 'HH:MM dd/mm/yy')


const FlightsListItem = ({ data: { cityFrom, cityTo, price, dTime, aTime } }) =>
    <div className='result-item'>
        <div> <strong>{price}</strong> EUR</div>
        <div>
            <span>{foo(dTime)}</span>
            <strong>{cityFrom} -> {cityTo}</strong>
            <span>{foo(aTime)}</span>
        </div>
    </div>

export default FlightsListItem