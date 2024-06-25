import React from 'react';
import PropTypes from 'prop-types'

const TextField = (props) => {
    const { name, type, placeholder, value, onChange } = props;
    return (
        <div className=''>
            <input
                name = { name }
                type={ type }
                className='w-[315px] bg-[#f2f2f2] rounded-full text-[14px] pl-[34px] py-[18px] h-[56px] text-[#b7b6b6]'
                placeholder={ placeholder }
                value = { value }
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

TextField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

TextField.defaultProps = {
    type: "text",
    placeholder: "Text Field"
}

export default TextField;