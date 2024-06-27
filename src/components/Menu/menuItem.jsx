import React from "react";

import NextOk from '../../../public/assets/img/menu/ok.svg'
const MenuItem = (props) => {
  const { menuImage, Name, counts} = props;
  return (
    <div className="flex relative columns-3 py-[18px] ">
      <div className="flex align-middle">
        <img className='w-[220px]' src={menuImage} alt="" style={{ position: 'relative', left: '35px' }} />
      </div>
      <div className="bg-white flex  flex-col ps-[50px] aglign-center shadow-lg   text-dark text-base h-[92px] font-semibold py-[16px] rounded-l-[30px] rounded-r-[10px]  w-[550px]" >
        <div className=" flex text-center  ">{Name}</div>
        <div className=" flex text-center  ">{counts} items</div>

      </div>
      <div className="flex align-middle">
        <img className='  w-[100px]' src={NextOk} alt="" style={{ position: 'relative', right: '20px' }} />
      </div>
    </div>
  );
};

export default MenuItem;
