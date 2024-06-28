import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

import Footer from '../../components/Footer'
import Check from '../../components/Buttons/FilledButton'

import OfferList from '../../components/Offers/OfferList'

const Offer = () => {

  return (
    <div className="relative ">
      <div className='pr-[21px]'>
        <Navbar text="Latest Offers" shop="true" />
      </div>
      <div className="flex justify-between  px-[21px] pt-[16px] ">
        <div className="flex items-start gap-[5px]">
          <span className="text-[14px]">
            Find discounts, Offers special meals and more!</span>
        </div>
      </div>
      <div className=" w-[240px]  pt-[22px] px-[21px]">
        <button className="bg-main text-white text-base h-[47px] font-semibold py-[8px] rounded-[999px] w-[157px] ">
          Check Offers
        </button>
      </div>

      <OfferList />

      <div className="flex pb-[138px] " />
      <Footer />
    </div>
  );
};

export default Offer;
