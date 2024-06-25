import React from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <div>
      <button className="bg-transparent text-main border-main h-14 font-semibold border-[1px] py-[16px] rounded-full w-[307px]">
        {children}
      </button>
    </div>
  );
};

export default Button;
