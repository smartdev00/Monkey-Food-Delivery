import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/Buttons/FilledButton";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const navigate = useNavigate()
  const handleSendClick = () => {
    navigate("/auth/login/resetpassword/otp")
  }
  return (
    <div className="relative flex flex-col items-center px-[21px] h-[790px]">
      <p className="text-3xl mt-[38px] mb-3 text-primary">Reset Password</p>
      <span className="text-sm text-secondary text-center">Please enter your emaili to receive a link</span>
      <span className="text-sm text-secondary text-center">to create a new password via email</span>
      <div className="flex flex-col gap-[34px] w-[100%] px-[13px] mt-[60px]">
        <TextField name="email" placeholder="Your Email" type="text" />
        <FilledButton onClick={handleSendClick}>Send</FilledButton>
      </div>
      <div className="absolute bottom-3 w-[119px] border-[2.5px] rounded-full border-primary" />
    </div>
  );
};

export default ResetPassword;
