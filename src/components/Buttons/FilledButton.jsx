import React from "react";
import PropTypes from 'prop-types'

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <div>
      <button className="bg-main text-white text-base h-14 font-semibold py-[16px] rounded-[999px] w-[100%]" onClick={() => onClick()}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button;
