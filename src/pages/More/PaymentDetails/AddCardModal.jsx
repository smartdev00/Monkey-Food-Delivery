import React, { useState } from 'react'
import FilledButton from  '../../../components/Buttons/FilledButton';
import TextField from '../../../components/TextField/TextField';
import Icons from '../../../components/Icons/Icons';
import { useSearchParams } from 'react-router-dom';

export default function AddCardModal({isShow, setIsShow}) {
  const handleToggleBtn = () => {
    
  }
  const handleAddCard = () => {

  }
  const [cardNum, setCardNum] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [secureCode, setSecureCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [removable, setRemovable] = useState(false);

  return (
    <div className={`bg-[#000]/[0.45] pt-[146px] w-[375px] h-[812px] absolute bottom-0 ${isShow?'block':'hidden'}`}>
      <div className='bg-white flex flex-col h-full rounded-tl-[18px] rounded-tr-[18px] px-[21px] relative border-b-[2px] border-icongray-50 border-solid justify-stretch'>
        <div className='pt-[23px] pb-[18px] border-b-[#707070]/[0.1] border-b-[1px] border-solid text-icongray-50 font-bold text-sm'>
          Add Credit/Debit Card
        </div>
        <div className='flex flex-col pt-[19px] pb-[39px] gap-[19px] justify-between'>
          <TextField placeholder="Card Number" value={cardNum} onChange={setCardNum}/>
          <div className='flex items-center justify-between'>
            <div className='flex justify-start items-center text-icongray-50 font-semibold text-sm'>
              Expiry
            </div>
            <div className='flex justify-end basis-[235px] gap-[29px]'>
              <TextField placeholder="MM" value={month} onChange={setMonth}/>
              <TextField placeholder="YY" value={year} onChange={setYear}/>
            </div>
          </div>
          <TextField placeholder="Security Code" value={secureCode} onChange={setSecureCode}/>
          <TextField placeholder="First Name" value={firstName} onChange={setFirstName}/>
          <TextField placeholder="Last Name" value={lastName} onChange={setLastName}/>
        </div>
        <div className='flex h-[35px] justify-between'>
          <div className='flex items-center justify-start text-icongray-100 text-sm'>
            You can remove this card at anytime 
          </div>
          <div className='flex items-center relative h-full cursor-pointer' onClick={() => setRemovable(!removable)} >
            <span>
              <div className={`transition ease-in-out duration-500 w-[33px] h-[12px] rounded-[6px] ${removable?'bg-[#2563eb]':'bg-[#d8d8d8]'}`}></div>
            </span>
            <span className={`transition ease-in-out duration-500 left-0 absolute ${removable?'translate-x-[16px]':''}`}>
              <div className={`transition ease-in-out duration-500 w-[17px] h-[17px] drop-shadow-md rounded-[999px] ${removable?'bg-[#fff]':'bg-[#c1c1c1]'}`}></div>
            </span>

          </div>
        </div>
        <div className='py-[38px]'>
          <FilledButton onClick={(e) => handleAddCard}>
              <div className='flex items-center justify-center relative'>
                <div className='absolute left-[73px]'><Icons type='plus' color='gray' /></div> Add Card
              </div>
          </FilledButton>
        </div>
        <div className="absolute bottom-2 self-center w-[119px] border-[2.5px] rounded-[999px] border-primary" />
        <div className='closing-btn cursor-pointer absolute top-[14px] right-[16px]' onClick={() => setIsShow(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11.828" height="11.828" viewBox="0 0 11.828 11.828">
            <g id="Group_8169" data-name="Group 8169" transform="translate(1.414 1.414)">
              <line id="Line_32" data-name="Line 32" x2="9" y2="9" fill="none" stroke="#4a4b4d" strokeLinecap="round" strokeWidth="2"/>
              <line id="Line_33" data-name="Line 33" x1="9" y2="9" fill="none" stroke="#4a4b4d" strokeLinecap="round" strokeWidth="2"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
