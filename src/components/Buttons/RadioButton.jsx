const RadioButton = (props) => {
    const {name} = props
  return (
    <div className="relative flex justify-center w-[14px] h-[14px] items-center">
      <input
        type="radio"
        className="absolute top-0 w-[14px] h-[14px] peer opacity-0"
        name={name}
      />
      <div className="outline outline-offset-2 outline-1 outline-main peer-checked:bg-main w-[8px] h-[8px] rounded-[50%]" />
    </div>
  );
};

export default RadioButton;
