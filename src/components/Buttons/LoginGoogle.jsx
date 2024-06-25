import React from "react";
import google from '../../../public/assets/img/google-plus-logo.png'

const LoginGoogle = (props) => {
    const { children } = props
  return (
    <div>
      <button className="text-xs text-white bg-[#dd4b3d] w-[315px] rounded-full h-14 py-[16px] items-center px-[76px]">
        <img className="mr-8 w-2 inline" src={google}/>Login with Google
      </button>
    </div>
  );
};

export default LoginGoogle;
