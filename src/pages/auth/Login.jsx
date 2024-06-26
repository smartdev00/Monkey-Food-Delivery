import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/Buttons/FilledButton";
import LoginFacebook from "../../components/Buttons/LoginFacebook";
import LoginGoogle from "../../components/Buttons/LoginGoogle";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate("/dashboard")
  }
  return (
    <div className="relative flex flex-col items-center px-[21px] h-[790px]">
      <p className="text-3xl mt-[38px] mb-3 text-primary">Login</p>
      <span className="text-sm text-secondary">Add your details to login</span>
      <div className="flex flex-col gap-7 w-[100%] px-[13px] mt-9">
        <TextField name="email" placeholder="Your Email" type="text" />
        <TextField name="password" placeholder="Password" type="text" />
        <FilledButton onClick={handleLoginClick}>Login</FilledButton>
      </div>
      <Link to="/resetpassword" className="text-sm mt-6 text-secondary">
        Forgot your password?
      </Link>
      <div className="flex flex-col gap-7 items-center mt-[49px]">
        <p className="text-sm text-secondary">
            or Login With
        </p>
        <LoginFacebook/>
        <LoginGoogle/>
      </div>
      <p className="text-sm mt-[83px] text-secondary">
        Don't have an Account?{" "}
        <Link to="/signup" className="font-bold text-main">Sign Up</Link>
      </p>
      <div className="absolute bottom-3 w-[119px] border-[2.5px] rounded-full border-primary" />
    </div>
  );
};

export default Login;
