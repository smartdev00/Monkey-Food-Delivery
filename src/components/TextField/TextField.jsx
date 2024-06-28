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

  let isValid = error === "" || error === undefined

  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        autoFocus={autoFocus}
        className="peer w-[100%] bg-[#f2f2f2] rounded-[999px] text-sm px-[34px] align-bottom pt-[12px] h-[56px] text-primary focus:outline-none disabled:bg-opacity-70 disabled:text-opacity-70"
        style={{
          border: error === "" || error === undefined ? "" : "1px solid red",
        }}
        error={error}
        disabled={disable}
        value={value}
        onChange={onChange}
      />
      <label
        className={`peer-focus:-translate-y-[10px] transition-all absolute left-[34px] text-[12px] top-5 ${isValid ? "text-secondary" : "text-[#ff0000]"}`}
        style={{
          transform:
            value !== undefined && value !== "" ? "translate(0, -10px)" : "",
        }}
      >
        { isValid ? placeholder : error}
      </label>
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
