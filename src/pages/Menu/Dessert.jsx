import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import SearchBar from "../../components/Search/SearchBar";
import Icons from '../../components/Icons/Icons'
 
import DessertItem from '../../components/Menu/dessertItem'

import ApplePie from '../../../public/assets/img/desserts/applePie.png'
import Chocolate from '../../../public/assets/img/desserts/chocolate.png'
import Shake from '../../../public/assets/img/desserts/shake.png'
import Chewy from '../../../public/assets/img/desserts/chewy.png'

const Desserts = () => {

  return (
    <div>
      <div className="flex justify-between pt-[53px] px-[21px]">
        <div className="flex items-start gap-[5px]">
          <Icons type='arrow-right' color='gray' />
          <span className="font-bold text-Metropolis">Desserts</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <Icons type='shopping-cart' color='gray' />
        </div>
      </div>
      <div className="flex  pt-[24px] pb-[19px] px-[21px]">
        <SearchBar placeholder=" Search Food" />
      </div>
      <DessertItem image = {ApplePie} title={'French Apple Pie'} rate={4.9} subtitle ={'Minute by tuk tuk'}/>
      <DessertItem image = {Chocolate} title={'Dark Chocolate Cake'} rate={4.7} subtitle ={'Cakes by Tella'}/>
      <DessertItem image = {Shake} title={'Street Shake'} rate={4.9} subtitle ={'Café Race'}/>
      <DessertItem image = {Chewy} title={'Fudgy Chewy Brownies'} rate={4.9} subtitle ={'Minute by tuk tuk'}/>



      <Footer />
    </div>
  );
};

export default Desserts;
