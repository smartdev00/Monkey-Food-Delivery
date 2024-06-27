import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Home from "../../../public/assets/img/footer/Home.svg";
import HomeSelected from "../../../public/assets/img/footer/home-selected.svg"
import Down from "../../../public/assets/img/footer/down.png";
import FooterItem from "./FooterItem";

const Footer = ({}) => {
  const [path, setPath] = useState("")

  useEffect(() => {
    setPath(window.location.pathname)
  })
  return (
    <>
      <footer className="fixed bottom-0 w-[100%] left-0">
          <div className="relative flex items-center px-18">
            <div className="w-[100%] flex justify-center">
              <div className="shadow-[0_0_100px_15px_rgba(0,0,0,0.4)] w-[100%] mt-[42px] bg-white"/>
              <img className="h-[120px] z-10" src={Down} />
              <div className="shadow-[0_0_100px_15px_rgba(0,0,0,0.4)] mt-[42px] w-[100%] bg-white"/>
            </div>
            <div className="flex items-center justify-between absolute w-[100%] px-[22px] top-10 z-20">
              <FooterItem type="menu" name="Menu" toGo="/menu"/>
              <FooterItem type="offer" name="Offers" toGo="/offers"/>
              <div
                className="flex justify-center"
                style={{ position: "relative", top: "-35px" }}
              >
                <Link to="/dashboard">
                  <img className="  " src={path === "/dashboard" ? HomeSelected :Home} alt=" to Home" />
                </Link>
              </div>
              <FooterItem type="profile" name="Profile" toGo="/profile"/>
              <FooterItem type="more" name="More" toGo="/more"/>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
