import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import SearchBar from "../components/Search/SearchBar";
import Navbar from '../components/Navbar/Navbar';
import TitleBar from '../components/Home/Title'

import PopularList from '../components/Home/PopularList'
import HomeSlideList from '../components/Home/HomeSlideList'
import RecentList from '../components/Home/RecentList'

import OfferList from '../components/Offers/OfferList'

const Menu = () => {
    return (
        <div className="relative ">
            <div className="pr-[21px]">
                <Navbar text="Good morning Akila!" shop="true" />
            </div>
            <div className="flex flex-col pt-[32px] px-[21px]">
                <SearchBar placeholder="Search Food" />
            </div>
            <div className="flex overflow-scroll justify-start pt-[30px] gap-[8px] px-[21px]">
                <HomeSlideList />
            </div>

            <div className="flex justify-between pt-[55px] px-[21px]">
                <TitleBar titileName="Popular Restaurents" vAll='View All' />
            </div>

            <OfferList />

            <div className="flex justify-between pt-[42px] px-[21px]">
                <TitleBar titileName='Most Popular' vAll='View All' />
            </div>

            <div className="flex overflow-scroll pt-[30px]  gap-[8px] px-[21px]">
                <PopularList />
            </div>

            <div className="flex justify-between pt-[37px] px-[21px]">
                <TitleBar titileName='Recent Items' vAll='View All' />
            </div>

            <div className='flex justify-between flex-col gap-4'>
                <RecentList />
            </div>

            <div className="flex pb-[138px] px-[21px]" />
            <Footer />
        </div>
    );
};

export default Menu;
