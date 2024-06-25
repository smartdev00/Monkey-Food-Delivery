import React from 'react'
import Footer from '../../components/Footer'
// import Navbar from '../../components/Navbar/Navbar'
import MoreItem from '../../components/menu/MoreItem';

export default function More() {
  
  return (
    <div>
      {/* <Navbar /> */}
      <div className='flex flex-col pl-[23px] pr-[21px] pt-[31px] pb-[124px] gap-[19px] justify-start'>
        <MoreItem iconType="income" iconColor="gray"> Payment Details </MoreItem>
        <MoreItem iconType="shopping-bag" iconColor="gray"> My Orders </MoreItem>
        <MoreItem iconType="bell" iconColor="gray"> Notifications </MoreItem>
        <MoreItem iconType="mail" iconColor="gray"> Inbox </MoreItem>
        <MoreItem iconType="info" iconColor="gray"> About Us </MoreItem>
      </div>
      <Footer />
    </div>
  );
}