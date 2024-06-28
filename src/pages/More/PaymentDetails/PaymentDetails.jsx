import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import Icons from "../../../components/Icons/Icons";
import Navbar from "../../../components/Navbar/Navbar";
import BorderButton from "../../../components/Buttons/BorderButton";
import FilledButton from "../../../components/Buttons/FilledButton";
import visaImg from "../../../../public/assets/img/visa.png";
import AddCardModal from "./AddCardModal";

export default function PaymentDetails() {
  const [isModalShow, setIsModalShow] = useState(false);
  return (
    <div className="relative">
      <div className="pl-[23px] pr-[21px] pt-[31px] flex justify-start items-center gap-[20px]">
        <div className="grow">
          <Navbar text="Payment Details" back={true} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full mt-[28px] mb-[19px] pb-[16px] mx-[21px] border-b-[1px] border-solid border-b-[#707070]/[0.2] text-icongray-50 text-base font-bold">
          Customize your payment method
        </div>
        <div className="flex flex-col px-[45px] py-[25px] bg-[#f7f7f7] shadow-2xl">
          <div className="flex flex-row justify-between items-end pb-[15px] border-b-[1px] border-solid border-b-[#8a8a8a]/[0.14]">
            <p className="p-0 m-0 text-xs font-bold text-icongray-50">
              Cash/Card on delivery
            </p>
            <Icons type="tick" color="orange" />
          </div>
          <div className="flex flex-row py-[15px] px-0 justify-between border-b-[1px] border-solid border-[#8a8a8a]/[0.14]">
            <div className="flex justify-between gap-[19px]">
              <img src={visaImg} alt="visa" className="w-[53px] h-[31px]" />
              <div className="flex justify-between items-center">
                <p className="p-0 m-0 text-xs/[17px] font-semibold text-icongray-50 overflow-hidden w-[66px]">
                  **** ****
                </p>
                <p className="p-0 m-0 text-xs font-semibold text-icongray-50">
                  2187
                </p>
              </div>
            </div>
            <button className="bg-transparent text-[11px]/[15px] text-iconorange-50 font-bold border-main h-[31px] border-[1px] py-[16px] rounded-[999px] px-[14px] flex justify-center items-center">
              Delete Card
            </button>
          </div>
          <div className="pt-[12px] text-xs font-bold text-icongray-50">
            Other Methods
          </div>
        </div>
        <div className="pt-[61px] px-[21px] pb-[238px]">
          <FilledButton onClick={() => setIsModalShow(true)}>
            <div className="flex items-center justify-center relative">
              <div className="absolute left-[12px]">
                <Icons type="plus" color="gray" />
              </div>{" "}
              Add Another Credit/Debit Card
            </div>
          </FilledButton>
        </div>
      </div>
      <Footer />
      <AddCardModal isShow={isModalShow} setIsShow={setIsModalShow} />
    </div>
  );
}
