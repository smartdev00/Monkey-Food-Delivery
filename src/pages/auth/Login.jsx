import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/Buttons/FilledButton";
import LoginFacebook from "../../components/Buttons/LoginFacebook";
import LoginGoogle from "../../components/Buttons/LoginGoogle";
import authDatas from "./auth.json";

const Login = () => {
  const [personalData, setPersonalData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleDataChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleLoginClick = () => {
    let initialData = undefined;

    if (personalData.email === "" || personalData.password === ""){
      if( personalData.email === ""){
        setError((previousState) => {
          return { ...previousState, email: "You must type in the email!" };
        });
      }
      if (personalData.password === ""){
        setError((previousState) => {
          return { ...previousState, password: "You must type in the password!" };
        });
      }
    }
    else {
      authDatas.map((authData) => {
        if (authData.email === personalData.email)
          initialData = authData;
      });
      if( initialData === undefined ){
        setError((previousState) => {
          return { ...previousState, email: "Email is not existed!" };
        });
      }
      else if( initialData.password !== personalData.password){
        setError((previousState) => {
          return { ...previousState, password: "Password is not matched!" };
        });
      }
      else {
        navigate("/dashboard")
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center px-[21px] h-[790px]">
      <p className="text-3xl mt-[38px] mb-3 text-primary">Login</p>
      <span className="text-sm text-secondary">Add your details to login</span>
      <div className="flex flex-col gap-7 w-[100%] px-[13px] mt-9">
        <TextField
          name="email"
          placeholder="Your Email"
          type="text"
          error={error.email}
          autoFocus={true}
          value={personalData.email}
          onChange={(e) => handleDataChange(e)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={error.password}
          value={personalData.password}
          onChange={(e) => handleDataChange(e)}
        />
        <FilledButton onClick={() => handleLoginClick()}>Login</FilledButton>
      </div>
      <Link to="/auth/login/resetpassword" className="text-sm mt-6 text-secondary">
        Forgot your password?
      </Link>
      <div className="flex flex-col gap-7 px-[13px] mt-[49px] w-[100%]">
        <p className="text-sm text-secondary text-center">or Login With</p>
        <LoginFacebook />
        <LoginGoogle />
      </div>
      <p className="text-sm mt-[83px] text-secondary">
        Don't have an Account?{" "}
        <Link to="/auth/signup" className="font-bold text-main">Sign Up</Link>
      </p>
      <div className="absolute bottom-3 w-[119px] border-[2.5px] rounded-full border-primary" />
    </div>
  );
};

export default Login;
