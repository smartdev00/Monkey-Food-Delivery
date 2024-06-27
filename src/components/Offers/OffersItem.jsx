import React from "react";
import Icons from '../../components/Icons/Icons'
 
const OffersItem = (props) => {
  const { title, image, subtitle, rate } = props;
  return (
    <div className="pt-[22px]">
      <div className="flex flex-col h-[auto] bg-no-repeat bg-contain " >
          <img src={image} alt="Food Image" />
          <div className="flex  pt-[7px] px-[21px]">
              <p className="text-dark-600 font-bold text-primary text-[18px] ">{title}</p>
          </div>
          <div className="flex px-[21px] gap-2">
              <Icons type='star-filled' color='orange' />
              <p className="text-[#FC6011] font-bold  text-[12px] ">{rate}</p>
              <p className="text-white-600   text-primary text-[12px] "> {subtitle}   </p>
              <p className="text-white-600 font-bold  text-primary text-[14px] "> Western Food  </p>
          </div>
      </div>
    </div>
  );
};

export default OffersItem;
