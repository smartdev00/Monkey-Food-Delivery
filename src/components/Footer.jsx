import { Link } from "react-router-dom";
import Icon from "./Icon";
import Line from "./../components/Line";
import Home from "../../public/assets/img/Home.svg";
import Down from "../../public/assets/img/down.png";

import menuImage from "../../public/assets/img/menu.svg";
import offersImage from "../../public/assets/img/offers.svg";
import profileImage from "../../public/assets/img/profile.svg";
import moreImage from "../../public/assets/img/more.svg";
//bg-[url('../../public/assets/img/down.png')]
const Footer = ({}) => {
  return (
    <>
      <footer className="absolute bottom-3">
        <div>
          <div className="relative flex items-center px-18">
            <img className="bottom-0" src={Down} />
            <div className="flex items-center absolute w-[100%] justify-around top-10">
                <Link to="/Menu">
                    <Icon label="Menu" image={menuImage} />
                </Link>
                <Link to="/Offers">
                    <Icon label="Offers" image={offersImage} />
                </Link>
                <div
                    className="flex justify-center"
                    style={{ position: "relative", top : "-35px" }}
                >
                    <Link to="/Home">
                        <img className="  " src={Home} alt=" to Home" />
                    </Link>
                </div>
                <Link to="/Profile">
                    <Icon label="Profile" image={profileImage} />
                </Link>
                <Link to="/More">
                    <Icon label="More" image={moreImage} /> 
                </Link>
            </div>
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
