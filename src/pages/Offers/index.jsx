import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

import Footer from '../../components/Footer'
import Icons from '../../components/Icons/Icons'
import Check from '../../components/Buttons/FilledButton'

import OfferList from './OfferList'
 

const Offer = () => {

  return (
    <>
    <div className='p-[30px]'>
     <Navbar text="Latest Offers"/>

    </div>
      <div className="flex justify-between  px-[21px]">
        <div className="flex items-start gap-[5px]">
          <span className=" text-[14px]">Find discounts, Offers special
            meals and more!</span>
        </div>

      </div>
      <div className=" w-[187px] pt-[24px] px-[21px]">
        <Check >Check Offers</Check>

      </div>
      <OfferList /> 

      <div className="flex   pb-[138px] px-[21px]">
    
      </div>

      <Footer />
    </>
  );
};

export default Offer;
