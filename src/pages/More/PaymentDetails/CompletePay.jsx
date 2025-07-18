import React, { useState } from 'react'
import FilledButton from  '../../../components/Buttons/FilledButton';
import purseImg from '../../../../public/assets/img/purse.png';
import { useNavigate } from 'react-router-dom';

export default function CompletePay({isShow, setIsShow}) {
  const navigate = useNavigate()
  const handleToggleBtn = () => {
    
  }
  const handleAddCard = () => {

  }

  return (
    <div className={`bg-[#000]/[0.45] flex flex-col justify-end w-[100%] h-[100vh] fixed bottom-0 ${isShow?'flex':'hidden'}`}>
      <div className='bg-white flex flex-col items-stretch h-full rounded-tl-[18px] rounded-tr-[18px] pt-[38px] pb-[50px] px-[21px] relative border-b-[2px] border-icongray-50 border-solid justify-stretch'>
        <div className='flex justify-center items-center'>
          <img src={purseImg} alt='purse' className='w-[224px] h-[254px]' />
        </div>
        <div className='flex flex-col justify-between items-center gap-1 pt-[30px] pb-[19px]'>
          <div className='text-icongray-50 text-[26px]/[35px] font-bold'>Thank You!</div>
          <div className='text-icongray-50 text-[17px]/[22px] font-bold'>for your order</div>
        </div>
        <div className='text-icongray-50 text-sm text-center'>Your Order is now being processed. We will let you know once the order is picked from the outlet. Check the status of your Order</div>
        <div className='flex flex-col justify-between gap-[17px] pt-[34px] pb-[50px] items-stretch'>
          <FilledButton onClick={(e) => handleAddCard}>
            Track My Order
          </FilledButton>
          <div className='text-icongray-50 text-base font-bold flex justify-center' onClick={()=>navigate("/dashboard")}>Back To Home</div>
        </div>
        <div className="absolute bottom-2 self-center w-[119px] border-[2.5px] rounded-[999px] border-primary" />
      </div>
    </div>
  );
}
