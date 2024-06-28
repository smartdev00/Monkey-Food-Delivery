import React from "react";
import Icons from '../Icons/Icons'

const OffersItem = (props) => {
    const { title, image, subtitle, rate, product } = props;
    return (
        <div className='relative '>

            <div className="flex flex-row " >
                <div className="flex col-span-4   pt-[7px] px-[21px]">
                    <img src={image} alt="Image" />
                </div>
                <div className="flex col-span-8 px-[21px] gap-2">
                    <div className="  flex-col py-[6px]">
                        <div>
                            <p className="text-dark-600 font-bold text-primary text-[18px] ">{title}</p>
                        </div>
                        <div>
                            <p className="text-white-600   text-primary text-[12px] "> {subtitle}  {product} </p>
                        </div>
                        <div className="flex flex-row">
                            <Icons type='star-filled' color='orange' />
                            <p className="text-[#FC6011] font-bold  text-[12px] gap-[8px]">{rate} </p>
                            <p className="text-slate-200 font-bold  text-[12px] ">  (124 Ratings)</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OffersItem;
