import React from "react";
import google from '../../../public/assets/img/auth/google-plus-logo.png'

const LoginGoogle = (props) => {
    const { onClick } = props
  return (
    <div>
      <button className="text-xs text-white bg-[#dd4b3d] w-[100%] rounded-[999px] h-[56px] py-[16px] items-center px-[76px]" onClick={() => onClick}>
        <img className="mr-8 w-2 inline" src={google}/>Login with Google
      </button>
    </div>
  );
};

export default LoginGoogle;
