import React, { useState } from 'react';
import PropTypes from 'prop-types'
import StarFill from '../../public/assets/img/star-fill.svg'
import StarOutline from '../../public/assets/img/star-outline.svg'

const StarRating = (props) => {
    const { value, setValue } = props;

    const handleChange = (paramValue) => {
        if( paramValue === value )
            setValue(0);
        else
            setValue(paramValue)
    }
    return (
        <div className='flex w-[108px] justify-between'>
            <img src={ value >= 1 ? StarFill : StarOutline } className='h-[15px]' onClick={() => handleChange(1)}/>
            <img src={ value >= 2 ? StarFill : StarOutline } className='h-[15px]' onClick={() => handleChange(2)}/>
            <img src={ value >= 3 ? StarFill : StarOutline } className='h-[15px]' onClick={() => handleChange(3)}/>
            <img src={ value >= 4 ? StarFill : StarOutline } className='h-[15px]' onClick={() => handleChange(4)}/>
            <img src={ value === 5 ? StarFill : StarOutline } className='h-[15px]' onClick={() => handleChange(5)}/>
        </div>
    );
}

StarRating.proTypes = {
    value: PropTypes.number,
    setValue: PropTypes.func
}

export default StarRating;