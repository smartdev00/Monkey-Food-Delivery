import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import KingBurgers from '../../../../public/assets/img/king-burgers.png'
import Icons from "../../../components/Icons/Icons";
import FilledButton from "../../../components/Buttons/FilledButton";
import { useNavigate } from "react-router";
import OrderItem from "./OrderItem";
const MyOrder = () => {
    const navigate = useNavigate()
    return (
        <div className="relative h-[802px]">
            <div className="px-[21px]">
                <Navbar text="My Order" back="true"/>
            </div>
            <div className="flex gap-[17px] px-[21px] py-[27px]">
                <img src={KingBurgers}/>
                <div className="flex flex-col justify-between">
                    <p className="text-base text-primary font-bold">King Burgers</p>
                    <div className="flex gap-[5px]">
                        <Icons type="star-filled"/>
                        <p className="text-[11px] text-main">4.9</p>
                        <p className="text-xs text-placeholder">(124 ratings)</p>
                    </div>
                    <p className="text-xs text-placeholder">Burger &nbsp;&nbsp;&nbsp;<span className="text-main text-base">.&nbsp;</span>Western Food</p>
                    <div>
                        <p className="text-xs text-placeholder">No 03, 4th Lane, Newyork</p>
                    </div>
                </div>
            </div>
            <div className="px-[21px] mt-[10px] bg-[#f6f6f6]">
                <OrderItem goodName="Beef Burger x 1" goodPrice="$16"/>
                <OrderItem goodName="Classic Burger x 1" goodPrice="$14"/>
                <OrderItem goodName="Cheese Chicken Burger x 1" goodPrice="$17"/>
                <OrderItem goodName="Chicken Legs Basket x 1" goodPrice="$15"/>
                <OrderItem goodName="French Fries Large x 1" goodPrice="$6"/>
            </div>
            <div className="px-[21px]">
                <div className="flex justify-between items-center h-[50px] border-b-1px border-opacity-10 border-[#707070]">
                    <p className="text-[13px] text-primary font-bold">Delivery Instructions</p>
                    <p className="text-[13px] text-main"><span className="text-xl font-extrabold">+</span> Add Notes</p>
                </div>
                <div className="flex flex-col h-[80px] justify-evenly border-b-1px border-opacity-10 border-[#707070]">
                    <div className="flex justify-between items-center">
                        <p className="text-[13px] text-primary font-bold">Sub Total</p>
                        <p className="text-[13px] text-main font-bold">$68</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[13px] text-primary font-bold">Delivery Cost</p>
                        <p className="text-[13px] text-main font-bold">$2</p>
                    </div>
                </div>
                <div className="flex mb-[15px] justify-between items-center h-[50px]">
                    <p className="text-[13px] text-primary font-bold">Total</p>
                    <p className="text-[22px] text-main font-bold">$70</p>
                </div>
                <FilledButton onClick={() => navigate("/checkout")}>Checkout</FilledButton>
            </div>
            <Footer/>
        </div>
    );
}

export default MyOrder;