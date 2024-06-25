import React from "react";

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <div>
      <button className="bg-main text-white text-base h-14 font-semibold py-[16px] rounded-full w-[307px]" onClick={() => onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
