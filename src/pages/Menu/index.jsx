import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import SearchBar from "../../components/Search/SearchBar";
import Icons from '../../components/Icons/Icons'
import MenuItem from '../../components/Menu/menuItem'

import FoodImage from '../../../public/assets/img/menu/food.svg'
import BeverageImage from '../../../public/assets/img/menu/beverage.svg'
import DessertImage from '../../../public/assets/img/menu/dessert.png'
import PromotionImage from '../../../public/assets/img/menu/promotion.png'

const Menu = () => {

  return (
    <div>
      <div className="flex justify-between pt-[40px] px-[21px]">
      <span className="font-bold text-Metropolis">Menu</span>
        <div className="flex items-center gap-[5px]">
          <Icons type='shopping-cart' color='gray' />
        </div>

      </div>
      <div className="flex  py-[32px] px-[21px]">

        <SearchBar placeholder=" Search Food" />

      </div>

      <div className="flex flex-col h-[600px]   bg-no-repeat bg-contain " style={{ backgroundImage: "url(../../../public/assets/img/side.svg)" }}>

      <Link to='/Food'><MenuItem menuImage = {FoodImage}  Name={'Food'} counts={120}/>  </Link>
      <Link to='/Beverage'>  <MenuItem menuImage = {BeverageImage}  Name={'Beverage'} counts={220}/>   </Link>
      <Link to='/Menu/Desserts'> <MenuItem menuImage = {DessertImage}  Name={'Desserts'} counts={150}/>  </Link>
      <Link to='/Promotions'> <MenuItem menuImage = {PromotionImage}  Name={'Promotions'} counts={25}/> </Link>
        
      </div>
 

      <Footer />
    </div>
  );
};

export default Menu;
