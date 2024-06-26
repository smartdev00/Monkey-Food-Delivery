import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar/Navbar';
import MoreItem from '../../components/menu/MoreItem';

export default function More() {
  
  return (
    <div>
      <div className='pl-[23px] pr-[21px] pt-[31px]'><Navbar text='More'/></div>
      <div className='flex flex-col pl-[23px] pr-[21px] pt-[31px] pb-[124px] gap-[19px] justify-start'>
        <MoreItem iconType="income" iconColor="gray"> Payment Details </MoreItem>
        <MoreItem iconType="shopping-bag" iconColor="gray"> My Orders </MoreItem>
        <MoreItem iconType="bell" iconColor="gray"> 
          Notifications
          <div className='flex basis-full grow justify-end pr-[24px]'>
            <span className='flex justify-center items-center w-[21px] h-[21px] bg-[#ff1717] rounded-[999px] text-xs text-white'>15</span> 
          </div>
        </MoreItem>
        <MoreItem iconType="mail" iconColor="gray"> Inbox </MoreItem>
        <MoreItem iconType="info" iconColor="gray"> About Us </MoreItem>
      </div>
      <Footer />
    </div>
  );
}