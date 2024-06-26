import { Link } from "react-router-dom";
import Icon from './Icon'
import Line from './../components/Line'
import Home from '../../public/assets/img/Home.svg'
import BackImg from '../../public/assets/img/back.svg'

import menuImage from '../../public/assets/img/menu.svg'
import offersImage from '../../public/assets/img/offers.svg'
import profileImage from '../../public/assets/img/profile.svg'
import moreImage from '../../public/assets/img/more.svg'


const Footer = ({ }) => {

    return (
        <>
            <footer className="fixed  bottom-0    ">

                <div className="pt-[10px]  bg-contain bg-no-repeat  downImg1 " >
                
                    <div className=" w-[375px] h-[92px] pt-[22px] bg-bottom  bg-cover  bg-no-repeat downImg      " >

                        <div className="flex items-end px-[2px] gap-10 ">
                            <Link to='/Menu'><Icon className='  self-center' label="Menu" image={menuImage} /> </Link>
                            <Link to='/Offers'><Icon label="Offers" image={offersImage} /> </Link>
                            <div className="flex justify-center" style={{ position: 'relative', bottom: '30px' }}>
                                <Link to='/Home'><img className="  " src={Home} alt=' to Home' /></Link>
                            </div>
                            <Link to='/Profile'><Icon label="Profile" image={profileImage} /> </Link>
                            <Link to='/More'><Icon label="More" image={moreImage} /> </Link>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;
