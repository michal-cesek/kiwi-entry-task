import React from 'react'

const PaginatedListNav = ({ nPages, currentPage, onClick }) =>
    <div className={'paginated-list-nav'}>
        {[...Array(nPages)].map((v, i) =>
            <span key={i} 
            className={currentPage === i + 1 ? 'selected' : ''}
                onClick={() => onClick(i + 1)}>{i + 1}</span>
        )}
    </div>

export default PaginatedListNav