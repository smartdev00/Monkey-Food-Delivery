import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/Search/SearchBar";
import Navbar from '../components/Navbar/Navbar';

import Icons from '../components/Icons/Icons'
import OfferList from './Offers/OfferList'
import PopularList from '../components/PopularList'

import OfferItem from '../components/Offers/offersItem'

import HomeSlide from '../components/HomeSlide'
import RecentList from '../components/RecentList'

import MenuItem from '../components/Menu/menuItem'



import ham from '../../public/assets/img/slide/ham.png'
import sri from '../../public/assets/img/slide/sri.png'
import indian from '../../public/assets/img/slide/indian.png'
import italian from '../../public/assets/img/slide/italian.png'



const Menu = () => {

    return (
        <div className="relative ">
            <div className="px-[22px] ">
                <Navbar text="Good morning Akila!" shop="true" />
            </div>
            <div className="flex   flex-col pt-[32px] px-[21px]">

                <SearchBar placeholder=" Search Food" />

            </div>
            <div className="flex justify-start pt-[30px]  gap-[8px] px-[21px] overflow-scroll ">
                <HomeSlide label="Offers" image={ham} />
                <HomeSlide label="Sri Lankan" image={sri} />
                <HomeSlide label="italian" image={italian} />
                <HomeSlide label="indian" image={indian} />
                <HomeSlide label="indian" image={indian} />
                <HomeSlide label="indian" image={indian} />
                <HomeSlide label="indian" image={indian} />
                <HomeSlide label="indian" image={indian} />
                <HomeSlide label="indian" image={indian} />
                <HomeSlide label="indian" image={indian} />
                <HomeSlide label="indian" image={indian} />
            </div>
            <div className="flex justify-between pt-[55px] px-[21px]">
                <span className="font-bold text-[20px] text-Metropolis">Popular Restaurents</span>
                <div className="flex items-center gap-[5px]">
                    <span className="font-bold text-[#FC6011] text-[13px] text-Metropolis">View All</span>
                </div>
            </div>
            <OfferList />


            <div className="flex justify-between pt-[42px] px-[21px]">
                <span className="font-bold text-[20px] text-Metropolis">Most Popular</span>
                <div className="flex items-center gap-[5px]">
                    <span className="font-bold text-[#FC6011] text-[13px] text-Metropolis">View All</span>
                </div>
            </div>
            <div className="flex justify-start pt-[30px]  gap-[8px] px-[21px]">
                <PopularList />
            </div>

            <div className="flex justify-between pt-[37px] px-[21px]">
                <span className="font-bold text-[20px] text-Metropolis">Recent Items</span>
                <div className="flex items-center gap-[5px]">
                    <span className="font-bold text-[#FC6011] text-[13px] text-Metropolis">View All</span>
                </div>
            </div>
            <div className='flex flex-col gap-4'>

                <RecentList />
            </div>
            <div className="flex   pb-[138px] px-[21px]"></div>
            <Footer />
        </div>
    );
};

export default Menu;
