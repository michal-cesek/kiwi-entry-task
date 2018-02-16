import React from 'react'
import Autocomplete from 'react-autocomplete'

const SearchFormInputAuto = ({ label, name, value, items, onChange }) =>
    <div>
        <label>{label}</label>
        <div>
            <Autocomplete
                getItemValue={item => item.code}
                items={items}
                renderItem={(item, isHighlighted) =>
                    <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.code} - {item.name}
                    </div>
                }
                value={value}
                onChange={e => onChange({ target: { value: e.target.value, name } })}
                onSelect={value => onChange({ target: { value, name } })}
            />
        </div>
    </div>

export default SearchFormInputAuto