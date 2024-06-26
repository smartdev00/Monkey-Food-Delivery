import React from "react";
import Icons from '../../components/Icons/Icons'

const DessertItem = (props) => {
    const { title, image, subtitle, rate } = props;

    return (
        <div className="pt-[2px]">
            <div className="flex flex-col h-[193px] bg-no-repeat bg-contain "
                style={{ backgroundImage: `url(${image})`  }}
            >
                {/* <img src={image} alt="ddd" /> */}
                <div className="flex   pt-[126px] px-[21px]">
                    <p className="text-white font-bold text-primary text-[18px] ">{title}</p>
                </div>
                <div className="flex pt-[6px] px-[21px] gap-2">
                    <Icons type='star-filled' color='orange' />
                    <p className="text-[#FC6011] font-bold  text-[12px] ">{rate}</p>
                    <p className="text-white   text-primary text-[12px] "> {subtitle}   </p>
                    <p className="text-white font-bold  text-primary text-[14px] "> Desserts  </p>

                </div>
            </div>
        </div>
    );
};

export default DessertItem;
