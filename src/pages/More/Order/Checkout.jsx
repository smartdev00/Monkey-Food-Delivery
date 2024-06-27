import Navbar from "../../../components/Navbar/Navbar";
import visa from "../../../../public/assets/img/visa-payment.png";
import emailPayment from "../../../../public/assets/img/payment-email.png";
import FilledButton from "../../../components/Buttons/FilledButton";
import Footer from "../../../components/Footer";
import { useState } from "react";
import AddCardModal from "../PaymentDetails/AddCardModal";
import CompletePay from "../PaymentDetails/CompletePay";

const Checkout = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [isPayShow, setIsPayShow] = useState(false);
  return (
    <div className="h-[802px] relative bg-[#f6f6f6]">
      <div className="bg-white px-[21px] pb-[35px]">
        <Navbar text="Checkout" back="true" />
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex justify-between px-[21px] bg-white pb-[17px]">
          <div>
            <p className="text-[13px] text-secondary">Delivery Address</p>
            <p className="text-[15px] text-primary font-bold">
              653 Nostrand Ave.,
            </p>
            <p className="text-[15px] text-primary font-bold">
              Briijkyn, NY 11216
            </p>
          </div>
          <p className="text-[13px] text-main font-bold mt-[30px]">Change</p>
        </div>
        <div className="flex flex-col gap-[13px] pt-[16px] pb-[24px]  px-[21px] bg-white">
          <div className="flex justify-between items-center">
            <p className="text-[13px] text-secondary">Payment method</p>
            <p className="text-[13px] text-main font-bold cursor-pointer"onClick={() => setIsModalShow(true)}>
              <span className="text-xl font-extrabold">+</span> Add Card
            </p>
          </div>
          <div className="flex justify-between items-center pl-[21px] pr-[12px] py-[14px] bg-[#f6f6f6]">
            <p className="text-xs text-[#2d2d2d]">Cash on delivery</p>
            <div className="border-1px w-[14px] h-[14px] border-main rounded-[50%]" />
          </div>
          <div className="flex justify-between items-center pl-[21px] pr-[12px] py-[14px] bg-[#f6f6f6]">
            <p className="flex items-center gap-[5px] text-xs text-[#2d2d2d]">
              <img src={visa} />
              **** **** **** 2187
            </p>
            <div className="border-1px w-[14px] h-[14px] border-main rounded-[50%]" />
          </div>
          <div className="flex justify-between items-center pl-[21px] pr-[12px] py-[14px] bg-[#f6f6f6]">
            <p className="flex items-center gap-[5px] text-xs text-[#2d2d2d]">
              <img src={emailPayment} />
              johndoe@email.com
            </p>
            <div className="border-1px w-[14px] h-[14px] border-main rounded-[50%]" />
          </div>
        </div>

        <div className="bg-white px-[21px] py-[14px]">
          <div className="flex justify-between items-center">
            <p className="text-[13px] text-primary">Sub Total</p>
            <p className="text-[13px] text-primary font-bold">$68</p>
          </div>
          <div className="flex flex-col h-[80px] justify-evenly border-b-1px border-opacity-10 border-[#707070]">
            <div className="flex justify-between items-center">
              <p className="text-[13px] text-primary">Delivery Cost</p>
              <p className="text-[13px] text-primary font-bold">$2</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[13px] text-primary">Discount</p>
              <p className="text-[13px] text-primary font-bold">-$4</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-[12px]">
            <p className="text-[13px] text-primary">Total</p>
            <p className="text-[13px] text-primary font-bold">$66</p>
          </div>
        </div>
        <div className="bg-white p-[21px] h-[200px]">
          <FilledButton onClick={()=>setIsPayShow(true)}>Send Order</FilledButton>
        </div>
      </div>
      <Footer />
      <AddCardModal isShow={isModalShow} setIsShow={setIsModalShow}/>
      <CompletePay isShow={isPayShow} setIsShow={setIsPayShow}/>

    </div>
  );
};

export default Checkout;
