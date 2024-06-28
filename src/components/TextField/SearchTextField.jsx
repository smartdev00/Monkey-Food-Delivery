import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Icons from '../Icons/Icons';

const SearchTextField = (props) => {
    const { name, type, placeholder, value, onChange } = props;

    return (
        <div className='relative'>
            <input
                name = { name }
                type={ type }
                className='w-[100%] bg-[#f2f2f2] rounded-[99px] text-sm pl-[54px] py-[13px] h-[45px] text-primary focus:outline-none'
                placeholder={placeholder}
                value = { value }
                onChange={onChange}
            />
            <div className='absolute top-3 left-5 '>
                <Icons type="lens" color="gray"/>
            </div>
            {/* <label className='absolute left-[34px] text-[10px] top-5 text-secondary'>{ placeholder }</label> */}
        </div>
    );
}

SearchTextField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

SearchTextField.defaultProps = {
    type: "text",
    placeholder: "Text Field"
}

export default SearchTextField; 