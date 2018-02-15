import React from 'react'

const SearchFormInput = ({ label, name, type, value, onChange }) =>
    <div>
        <div>{label}</div>
        <div>
            <input type={'text'}
                name={name}
                value={value}
                onChange={onChange} />
        </div>
    </div>

export default SearchFormInput



