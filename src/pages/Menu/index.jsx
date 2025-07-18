import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/TextField/SearchTextField";

import MenuItem from '../../components/Menu/menuItem'
import Navbar from '../../components/Navbar/Navbar';

import FoodImage from '../../../public/assets/img/menu/food.svg'
import BeverageImage from '../../../public/assets/img/menu/beverage.svg'
import DessertImage from '../../../public/assets/img/menu/dessert.png'
import PromotionImage from '../../../public/assets/img/menu/promotion.png'

const Menu = () => {

  return (
    <div className="relative ">
      <div className='px-[21px]'>
        <Navbar text="Menu" shop="true" />
      </div>
      <div className="flex flex-col py-[32px] px-[21px]">
        <SearchBar placeholder=" Search Food" />
      </div>

      <div className="flex flex-col h-[485px] bg-no-repeat bg-contain bg-[url('../../../public/assets/img/side.svg')] " >
        <Link to='/Menu/Food'>
          <MenuItem menuImage={FoodImage} Name={'Food'} counts={120} />
        </Link>
        <Link to='/Menu/Beverage'>
          <MenuItem menuImage={BeverageImage} Name={'Beverage'} counts={220} />
        </Link>
        <Link to='/Menu/Desserts'>
          <MenuItem menuImage={DessertImage} Name={'Desserts'} counts={150} />
        </Link>
        <Link to='/Menu/Promotions'>
          <MenuItem menuImage={PromotionImage} Name={'Promotions'} counts={25} />
        </Link>
      </div>

      <div className="flex pb-[138px]  px-[21px]" />
      <Footer />
    </div>
  );
};

export default Menu;
