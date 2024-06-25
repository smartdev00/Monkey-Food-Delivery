import React from "react";
import facebook from '../../../public/assets/img/facebook-letter-logo.png'

const LoginFacebook = (props) => {
    const { onClick } = props
  return (
    <div>
      <button className="text-xs text-white bg-facebook w-[315px] rounded-full h-[56px] py-[16px] items-center px-[76px]" onClick={() => onClick}>
        <img className="mr-8 w-2 inline" src={facebook}/>Login with Facebook
      </button>
    </div>
  );
};

export default LoginFacebook;
