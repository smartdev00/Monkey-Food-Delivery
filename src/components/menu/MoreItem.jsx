import React from 'react'
import Icons from '../Icons/Icons'


export default function MoreItem({children, iconType, iconColor}) {
  
  return (
    <div className='flex justify-stretch p-0 m-0 bg-inherit w-full h-75px relative'>
      <div className='flex justify-start items-center basis-full bg-pageback-50 mr-16px w-full rounded-7px pl-[13px] pt-[13px] pb-[9px] gap-[18px]'>
        <div className='flex justify-center basis-[53px] h-53px items-center bg-pageback-100 rounded-[999px]'> 
          <Icons type={iconType} color={iconColor} /> 
        </div>
        <div className='flex justify-start grow items-center font-sans text-[13px]/[17px] p-0 pl-[0px] m-0'>{children}</div>
      </div>
      <div className='flex justify-end items-center w-[33px] h-[33px] rounded-[999px] bg-pageback-50 absolute right-0 top-[21px] pr-[7px]'>
        <Icons type='arrow-right' color='gray' />
      </div>
    </div>
  );
}