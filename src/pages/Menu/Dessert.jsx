import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/Search/SearchBar";

import Navbar from "../../components/Navbar/Navbar";

import DessertItem from '../../components/Menu/dessertItem'

import ApplePie from '../../../public/assets/img/desserts/applePie.png'
import Chocolate from '../../../public/assets/img/desserts/chocolate.png'
import Shake from '../../../public/assets/img/desserts/shake.png'
import Chewy from '../../../public/assets/img/desserts/chewy.png'

const Desserts = () => {

  return (
    <div className="relative">
      <div className="px-[21px]">
        <Navbar text="Desserts" shop="true" back="true"/>
      </div>
      <div className="flex flex-col pt-[24px] px-[21px]">
        <SearchBar placeholder=" Search Food" />
      </div>
      <div className="flex flex-col pt-[19px] ">
        <DessertItem image={ApplePie} title={'French Apple Pie'} rate={4.9} subtitle={'Minute by tuk tuk'} />
        <DessertItem image={Chocolate} title={'Dark Chocolate Cake'} rate={4.7} subtitle={'Cakes by Tella'} />
        <DessertItem image={Shake} title={'Street Shake'} rate={4.9} subtitle={'Café Race'} />
        <DessertItem image={Chewy} title={'Fudgy Chewy Brownies'} rate={4.9} subtitle={'Minute by tuk tuk'} />
      </div>

      <div className="flex pb-[138px]">  </div>
      <Footer />
    </div>
  );
};

export default Desserts;
