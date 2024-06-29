import React from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
  const {
    name,
    type,
    placeholder,
    disable,
    autoFocus,
    error,
    value,
    onChange,
  } = props;

  let isValid = error === "" || error === undefined;

  const convertToPointString = (str) => {
    let returnString = "";
    for (let i = 0; i < str.length; i++) returnString += "*";
    return returnString;
  };

  return (
    <div className="relative">
      <div className="relative z-50">
        <input
          name={name}
          type={type}
          autoFocus={autoFocus}
          className={`peer w-[100%]  rounded-[999px] caret-[#000000] text-sm px-[34px] align-bottom pt-[12px] h-[56px] focus:outline-none disabled:bg-opacity-70 disabled:text-opacity-70 disabled:cursor-not-allowed ${
            type === "password"
              ? "bg-transparent text-transparent selection:text-transparent selection:bg-[#0000ff]/[0.3] tracking-[0.0112em]"
              : "bg-[#f2f2f2] text-primary"
          }`}
          style={{
            border: error === "" || error === undefined ? "" : "1px solid red",
          }}
          error={error}
          disabled={disable}
          value={value}
          onChange={onChange}
        />
        <label
          className={`peer-focus:-translate-y-[10px] transition-all absolute left-[34px] text-[10px] top-5 ${
            isValid ? "text-placeholder" : "text-[#ff0000]"
          }`}
          style={{
            transform:
              value !== undefined && value !== "" ? "translate(0, -10px)" : "",
          }}
        >
          {isValid ? placeholder : error}
        </label>
      </div>
      {type === "password" ? (
        <input
          type="text"
          value={convertToPointString(value)}
          disabled={disable}
          onChange={() => console.log("")}
          className="absolute left-0 top-0 w-[100%] bg-[#f2f2f2] text-primary disabled:bg-opacity-70 disabled:text-opacity-70 rounded-[999px] text-sm px-[34px] pt-[12px] h-[56px]"
        />
      ) : (
        ""
      )}
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  type: "text",
  placeholder: "Text Field",
};

export default TextField;
