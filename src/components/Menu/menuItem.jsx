import React from "react";
import Icons from '../Icons/Icons'

import NextOk from '../../../public/assets/img/menu/ok.svg'
const MenuItem = (props) => {
  const { menuImage, Name, counts} = props;
  return (
    <div className="flex  columns-3 py-[14px] ">
        <img className=' ' src={menuImage} alt="" style={{ position: 'relative', left: '21px' }} />     
      <div className="bg-white flex flex-col justify-center ps-[32px] aglign-center shadow-lg text-dark text-base h-[92px] font-semibold py-[16px] rounded-l-[30px] rounded-r-[10px]  w-[100%]" >
        <div className="flex text-center text-[22px] ">{Name}</div>
        <div className="flex text-center text-[11px] ">{counts} items</div>
      </div>      
        <img className=' ' src={NextOk} alt="" style={{ position: 'relative', right: '20px' }} />      
    </div>
  );
};

export default MenuItem;
