import { Link } from "react-router-dom";
import Icon from "./Icon";
import Line from "./../components/Line";
import Home from "../../public/assets/img/Home.svg";
import Down from "../../public/assets/img/down.png";

import menuImage from "../../public/assets/img/menu.svg";
import offersImage from "../../public/assets/img/offers.svg";
import profileImage from "../../public/assets/img/profile.svg";
import moreImage from "../../public/assets/img/more.svg";
import { useEffect, useState } from "react";
//bg-[url('../../public/assets/img/down.png')]
const Footer = ({}) => {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname.slice(1, window.location.pathname.length))
  }, []);
  return (
    <>
      <footer className="fixed bottom-0 w-[100%] left-0">
        <div>
          <div className="relative flex items-center px-18">
            <img className="bottom-0" src={Down} />
            <div className="flex items-center absolute w-[100%] justify-around top-10">
              <Link to="/menu">
                <Icon label="Menu" image={menuImage} />
              </Link>
              <Link to="/offers">
                <Icon label="Offers" image={offersImage} />
              </Link>
              <div
                className="flex justify-center"
                style={{ position: "relative", top: "-35px" }}
              >
                <Link to="/dashboard">
                  <img className="  " src={Home} alt=" to Home" />
                </Link>
              </div>
              <Link to="/profile">
                <Icon
                  label="Profile"
                  image={profileImage}
                  color={
                    path === "profile"
                      ? "orange"
                      : "gray"
                  }
                />
              </Link>
              <Link to="/more">
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
