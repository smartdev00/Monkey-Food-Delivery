import { useEffect, useState } from "react";
import antena from "../../../public/assets/img/status-navbar/antena.png";
import baterry from "../../../public/assets/img/status-navbar/battery.png";
import wifi from "../../../public/assets/img/status-navbar/wifi.png";
import antenaWhite from "../../../public/assets/img/status-navbar/antena-white.svg";
import baterryWhite from "../../../public/assets/img/status-navbar/battery-white.svg";
import wifiWhite from "../../../public/assets/img/status-navbar/wifi-white.svg";

const StatusBar = () => {
  const [isWhite, setIsWhite] = useState(false);
  useEffect(() => {
    window.location.pathname === "/profile"
      ? setIsWhite(true)
      : setIsWhite(false);
  }, []);

  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    let date = new Date();
    let d = date.getHours() > 12 ? "PM" : "AM";
    setCurrentTime((date.getHours() % 12) + ":" + date.getMinutes() + " " + d);
    console.log("sdfsfssfs");
    setTimeout(() => {
      setCurrentTime(
        (date.getHours() % 12) + ":" + date.getMinutes() + " " + d
      );
    }, 1000);
  }, [currentTime]);

  return (
    <div className="flex justify-between px-[21px] pt-[6px]">
      <span className="font-bold text-primary text-xs">{currentTime}</span>
      <div className="flex items-center gap-[5px]">
        <img className="" src={isWhite ? antenaWhite : antena} />
        <img src={isWhite ? wifiWhite : wifi} />
        <img src={isWhite ? baterryWhite : baterry} />
      </div>
    </div>
  );
};

export default StatusBar;
