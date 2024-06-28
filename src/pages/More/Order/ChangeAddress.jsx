import Navbar from "../../../components/Navbar/Navbar";
import speech from "../../../../public/assets/img/map/speech.png";
import SearchTextField from "../../../components/TextField/SearchTextField";
import Icons from "../../../components/Icons/Icons";
import StarBack from "../../../../public/assets/img/star-back.png";
import MapCurrentPoint from "../../../components/map/MapCurrentPoint";
import MapCurrentTarget from "../../../components/map/MapCurrentTarget";

const ChangeAddress = () => {
  return (
    <div className="relative flex flex-col items-center h-[790px]">
      <div className="px-[21px] pb-[44px] w-[100%]">
        <Navbar back="true" text="Change Address" />
      </div>
      <div className="relative h-[525px] w-[100%] bg-[url('../../../../public/assets/img/map/map.png')]">
        <div className="absolute top-[186px] left-[29px]">
          <div className="relative">
            <img src={speech} />
            <div className="absolute top-0 flex flex-col pt-[27px] pl-[17px]">
              <p className="text-sm text-white">Your Current Location</p>
              <p className="text-xs text-white">653 Nostrand Ave,</p>
              <p className="text-xs text-white">Brooklyn,</p>
              <p className="text-xs text-white">NY 11216</p>
            </div>
          </div>
        </div>
        <MapCurrentPoint left="181px" top="116px" />
        <MapCurrentTarget left="296px" top="400px" />
      </div>
      <div className="flex flex-col gap-6 px-[21px] py-[19px] w-[100%] h-[158px]">
        <SearchTextField placeholder="Search Address" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[9px]">
            <img src={StarBack} />
            <p className="text-sm text-primary">Choose a saved place</p>
          </div>
          <Icons type="arrow-right" color="gray" />
        </div>
      </div>
      <div className="absolute bottom-3 w-[119px] border-[2.5px] rounded-[99px] border-primary" />
    </div>
  );
};

export default ChangeAddress;
