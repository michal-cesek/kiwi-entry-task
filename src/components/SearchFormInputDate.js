/* eslint-disable no-unused-vars */
import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const SearchFormInputDate = ({ label, name, value, onChange }) =>
    <div>
        <label>{label}</label>
        <div>
            <DatePicker
                selected={value}
                onChange={value => onChange({ target: { value, name } })} />
        </div>
    </div>

export default SearchFormInputDate



