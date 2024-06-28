import React, { useState } from 'react'
import FilledButton from  '../../components/Buttons/FilledButton';
import BorderButton from '../../components/Buttons/BorderButton'
import { useNavigate } from 'react-router-dom';
import StarRating from '../../components/StarRating';
import Icons from '../../components/Icons/Icons';
import pizzaImg from '../../../public/assets/img/menu/pizza.png'
import StatusBar from '../../components/Navbar/StatusBar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';

export default function FoodDetail({isShow, setIsShow}) {
  const navigate = useNavigate()
  const [rate, setRate] = useState(0)
  const [portionNum, setPortionNum] = useState(0)
  const handleToggleBtn = () => {
    
  }
  const handleAddCard = () => {

  }

  return (
    <div className={`w-[100%] relative pt-[308px]`}>
      <div className={`bg-pizza-back bg-cover bg-center flex flex-col justify-start w-[100%] h-[365px] absolute top-0 -z-10`}>
        <StatusBar />
        <div className='px-[21px]'><Navbar back={true} shop={true} text=""/></div>        
      </div>
      <div className='bg-white flex flex-col items-stretch h-full rounded-tl-[18px] rounded-tr-[18px] pt-[29px] pb-[149px] px-[21px] justify-between z-10'>
        {/* title, price */}
        <div className='flex flex-col justify-between items-start gap-[6px] pb-[20px] w-[100%]'>
          <div className='text-icongray-50 text-[22px]/[30px] font-extrabold'>Tandoori Chicken Pizza</div>
          <div className='flex flex-col justify-between items-start gap-1'>
            <StarRating value={rate} setValue={setRate} />
            <div className='text-[#ee5a30] text-[11px]/[15px] font-medium'>{rate} Star Ratings</div>
          </div>
          <div className='flex flex-col justify-between items-end relative bottom-0 right-0'>
            <div className='text-icongray-50 text-[31px]/[41px] font-bold'>Rs. 750</div>
            <div className='text-icongray-50 text-[12px]/[13px]'>/ per Portion</div>
          </div>
        </div>
        {/* description */}
        <div className='flex flex-col justify-between items-start w-[100%] gap-[11px] pb-[17px] pt-[6px] border-b-[1px] border-[#8a8a8a] border-solid'>
          <div className='text-icongray-50 text-sm font-bold'>Description</div>
          <div className='text-[#7c7d7e] text-xs/5 h-[54px] w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuada</div>
        </div>
        {/* Customizing Order */}
        <div className='flex flex-col justify-between items-start w-[100%] pt-[14px] gap-5'>
          <div className='text-icongray-50 text-sm font-bold'>Customize your Order</div>
          <div className='flex flex-col justify-between items-stretch w-[100%] gap-[14px]'>
            {/* <Select></Select> */}
          </div>
        </div>
        {/* Number of portions */}
        <div className='flex justify-between items-center w-100% h-[30px] pt-6 pb-[27px]'>
          <div className='text-icongray-50 text-sm font-bold'>Number of Portions</div>
          <div className='flex justify-between items-center gap-[5px]'>
            <FilledButton onClick={() => setPortionNum(i => (i>1?i-1:0))}>-</FilledButton>
            <BorderButton>{portionNum}</BorderButton>
            <FilledButton onClick={() => setPortionNum(i => (i<10?i+1:10))}>+</FilledButton>
          </div>
        </div>
        {/* Total price */}
        <div className='w-[100%] h-171px pl-[54px] py-[24px] pr-[23px] flex justify-stretch items-stretch relative'>
          <div className='bg-iconorange-50 rounded-r-[38px] w-[97px] h-[100%] absolute left-0 top-0 z-0'></div>
          <div className='flex flex-col justify-between py-[19px] px-[60px] gap-8px items-stretch shadow-xl rounded-l-[40px] rounded-r-[10px] z-10'>
            <div className='flex flex-col justify-between items-center gap-[3px]'>
              <div className='text-icongray-50 text-xs font-medium'>Total Price</div>
              <div className='text-icongray-50 text-[21px]/[28px] font-bold'>LKR 1500</div>
            </div>
            <div>
              <FilledButton>
                <div className='text-[#fff] text-[11px]/[15px] font-semibold text-center relative py-[8px] w-[100%] h-[100%]'>
                  <span className='absolute left-[17px]'><Icons type='add-cart' color='gray' /></span>
                  Add to Cart
                </div>
              </FilledButton>
            </div>
          </div>
          <div className='w-[47px] h-[47px] flex justify-center items-center rounded-[50%] shadow-lg relative right-0 top-[62px] z-20'>
            <Icons type='shopping-cart' color='orange' />
          </div>
        </div>
        <Footer />
        <div className="absolute bottom-2 self-center w-[119px] border-[2.5px] rounded-[999px] border-primary" />
      </div>
    </div>
  );
}
