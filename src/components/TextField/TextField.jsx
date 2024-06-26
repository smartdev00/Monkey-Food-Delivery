import React, { useState } from 'react';
import PropTypes from 'prop-types'

const TextField = (props) => {
    const { name, type, placeholder, value, onChange } = props;
    const [ focus, setFoucs] = useState(false)

    let classContent = "absolute left-[34px] text-[10px] top-5 "  + focus ? "text-main" : "text-secondary"

    return (
        <div className='relative'>
            <input
                name = { name }
                type={ type }
                className='w-[100%] bg-[#f2f2f2] rounded-full text-sm pl-[34px] py-[18px] h-[56px] text-primary'
                onFocus={() => setFoucs(false)}
                value = { value }
                onChange={(e) => onChange(e.target.value)}
            />
            <label className={classContent}>{ placeholder }</label>
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