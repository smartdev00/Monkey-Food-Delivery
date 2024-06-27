const Icon = ({ label, image }) => {
  return (
    <div className="flex flex-col    ">
      <div className=" flex justify-center  ">
        <img className="   " src={image} />
      </div>
      <div className="flex text-center text-xs text-secondary">{label}</div>
    </div>
  );
};

export default Icon;
