import React from "react";
import facebook from '../../../public/assets/img/auth/facebook-letter-logo.png'

const LoginFacebook = (props) => {
    const { onClick } = props
  return (
    <div>
      <button className="text-xs text-white bg-facebook w-[100%] rounded-[999px] h-[56px] py-[16px] items-center text-center" onClick={() => onClick}>
        <img className="mr-8 w-2 inline" src={facebook}/>Login with Facebook
      </button>
    </div>
  );
};

export default LoginFacebook;
