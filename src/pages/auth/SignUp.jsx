import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/Buttons/FilledButton";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const handleSignUpClick = () => {
    navigate("/intro")
  }
  return (
    <div className="relative flex flex-col items-center px-[21px] h-[790px]">
      <p className="text-3xl mt-[38px] mb-3 pt-[4px] text-primary">Sign Up</p>
      <span className="text-sm text-secondary">
        Add your details to sign up
      </span>
      <div className="flex flex-col gap-7 w-[100%] px-[13px] mt-9">
        <TextField name="name" placeholder="Name" type="text" />
        <TextField name="email" placeholder="Email" type="text" />
        <TextField name="MobileNo" placeholder="Mobile No" type="text" />
        <TextField name="adress" placeholder="Adress" type="text" />
        <TextField name="password" placeholder="Password" type="text" />
        <TextField
          name="ConfirmPassword"
          placeholder="Confirm Password"
          type="text"
        />
        <FilledButton onClick={handleSignUpClick}>Sign Up</FilledButton>
      </div>
      <p className="text-sm mt-6 text-secondary">
        Already have an Account?{" "}
        <Link to="/login" className="font-bold text-main">Login</Link>
      </p>
      <div className="absolute w-[119px] border-[2.5px] rounded-full bottom-3 border-primary" />
    </div>
  );
};

export default SignUp;
