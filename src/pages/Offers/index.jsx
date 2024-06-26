import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
import Icons from '../../components/Icons/Icons'
import Check from '../../components/Buttons/FilledButton'

import OfferItem from '../../components/Offers/offersItem'


import CafeImage from '../../../public/assets/img/offers/cafe.png'
import IssoImage from '../../../public/assets/img/offers/isso.png'
import BeanImage from '../../../public/assets/img/offers/bean.png'

const Offer = () => {

  return (
    <>
      <div className="flex justify-between pt-[53px] px-[21px]">
        <div className="flex items-start gap-[5px]">
          <span className="font-bold text-Metropolis">Latest Offers</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <Icons type='shopping-cart' color='gray' />
        </div>
      </div>
      <div className="flex justify-between pt-[16px] px-[21px]">
        <div className="flex items-start gap-[5px]">
          <span className=" text-[14px]">Find discounts, Offers special
            meals and more!</span>
        </div>

      </div>
      <div className=" w-[187px] pt-[24px] px-[21px]">
        <Check >Check Offers</Check>

      </div>
      <OfferItem image = {CafeImage} title={'Café de Noires'} rate={4.9} subtitle ={'(124 ratings) Café'}/>
      <OfferItem image = {IssoImage} title={'Isso'} rate={4.9} subtitle ={'(124 ratings) Café'}/>
      <OfferItem image = {BeanImage} title={'Cafe Beans'} rate={4.9} subtitle ={'(124 ratings) Café'}/>

      <Footer />
    </>
  );
};

export default Offer;
