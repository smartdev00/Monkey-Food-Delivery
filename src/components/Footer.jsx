import { Link } from "react-router-dom";
import Icon from './Icon'
import Home from '../../public/assets/img/Home.svg'

import menuImage from '../../public/assets/img/menu.svg'
import offersImage from '../../public/assets/img/offers.svg'
import profileImage from '../../public/assets/img/profile.svg'
import moreImage from '../../public/assets/img/more.svg'

import footerBottom from '../../public/assets/img/footerBottom.png'

const Footer = () => {

    return (
        <>
            <footer className="fixed  bottom-0 w-[33rem]  pt-4   bg-bottom  bg-cover  bg-no-repeat  downSvg  ">
                <div className="  w-[33rem]    bg-bottom  bg-cover  bg-no-repeat  downImg   " >

                    <div className="flex items-center px-10  gap-10 ">
                        <Link to='/Menu'><Icon className='self-center ' label="Menu" image={menuImage} /> </Link>
                        <Link to='/Offers'><Icon label="Offers" image={offersImage} /> </Link>
                        <div className="flex justify-center " style={{ position: 'relative', bottom: '60px' }}>
                            <Link to='/Home'><img className="w-48 " src={Home} alt=' to Home' /></Link>
                        </div>

                        <Link to='/Profile'><Icon label="Profile" image={profileImage} /> </Link>
                        <Link to='/More'><Icon label="More" image={moreImage} /> </Link>
                    </div>

                    <div className="flex  justify-center ">
                        <img className="w-[12rem] " src={footerBottom} />
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;
