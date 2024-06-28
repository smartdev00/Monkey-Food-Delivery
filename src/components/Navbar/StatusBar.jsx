import { useEffect, useState } from "react";
import antena from "../../../public/assets/img/antena.png";
import baterry from "../../../public/assets/img/battery.png";
import wifi from "../../../public/assets/img/wifi.png";

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState();
  useEffect(() => {
    let date = new Date();
    let d = date.getHours() > 12 ? "PM" : "AM";
    setCurrentTime((date.getHours() % 12) + ":" + date.getMinutes() + " " + d);
  }, []);
  useEffect(() => {
    let date = new Date();
    let d = date.getHours() > 12 ? "PM" : "AM";
    setTimeout(() => {
      setCurrentTime(
        (date.getHours() % 12) + ":" + date.getMinutes() + " " + d
      );
    }, 1000 * 60);
  }, [currentTime]);
  return (
    <div className="flex justify-between px-[21px] pt-[6px]">
      <span className="font-bold text-primary text-xs">{currentTime}</span>
      <div className="flex items-center gap-[5px]">
        <img className="" src={antena} />
        <img src={wifi} />
        <img src={baterry} />
      </div>
    </div>
  );
};

export default StatusBar;
