import React from "react";
import Icons from '../Icons/Icons'

import NextOk from '../../../public/assets/img/menu/ok.svg'
const MenuItem = (props) => {
  const { menuImage, Name, counts} = props;
  return (
    <div className="flex  columns-3 py-[18px] ">
        <img className=' ' src={menuImage} alt="" style={{ position: 'relative', left: '30px' }} />     
      <div className="bg-white flex flex-col justify-center ps-[70px] aglign-center shadow-lg text-dark text-base h-[92px] font-semibold py-[16px] rounded-l-[30px] rounded-r-[10px]  w-[550px]" >
        <div className="flex text-center">{Name}</div>
        <div className="flex text-center">{counts} items</div>
      </div>      
        <img className=' ' src={NextOk} alt="" style={{ position: 'relative', right: '20px' }} />      
    </div>
  );
};

export default MenuItem;
