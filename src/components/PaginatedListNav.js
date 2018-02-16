import React from 'react'

const PaginatedListNav = ({ nPages, currentPage, onClick }) => {
    if (nPages === 1)
        return null

    return <div className='paginated-list-nav'>
        {[...Array(nPages)].map((v, i) =>
            <div key={i}
                className={currentPage === (i + 1) ? 'selected' : ''}
                onClick={() => onClick(i + 1)}>{i + 1}</div>
        )}
    </div>
}

export default PaginatedListNav