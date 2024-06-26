import { useNavigate } from "react-router";
import FilledButton from "../../components/Buttons/FilledButton";
import { Link } from "react-router-dom";


const OTP = () => {
  const navigate = useNavigate()
  const handleNextClick = () => {
    navigate("/newpassword")
  }
  return (
    <div className="flex flex-col items-center px-[21px] h-[790px] relative">
      <p className="text-[25px] mt-[38px] mb-3 text-center text-primary">We have sent an OTP to<br/>your Mobile</p>
      <span className="text-sm text-center text-secondary">Please check your mobile number 071*****12<br/>
        continue to reset your password</span>
      <div className="flex flex-col gap-9 w-[100%] px-[13px] mt-9">
        <div className="flex gap-7">
            <input
                className="align-middle w-[56px] h-[56px] text-center text-[37px] text-primary bg-[#f2f2f2] placeholder:text-placeholder rounded-[12px]"
                placeholder="*"
            />
            <input
                className="w-[56px] h-[56px] text-center text-[37px] text-primary bg-[#f2f2f2] placeholder:text-placeholder rounded-[12px]"
                placeholder="*"
            />
            <input
                className="w-[56px] h-[56px] text-center text-[37px] text-primary bg-[#f2f2f2] placeholder:text-placeholder rounded-[12px]"
                placeholder="*"
            />
            <input
                className="w-[56px] h-[56px] text-center text-[37px] text-primary bg-[#f2f2f2] placeholder:text-placeholder rounded-[12px]"
                placeholder="*"
            />
        </div>
        <FilledButton onClick={handleNextClick}>Next</FilledButton>
      </div>
      <p className="text-sm mt-8 text-secondary">
        Didn't Receive?{" "} 
        <Link to="/resetpassword" className="font-bold text-main">Click Here</Link>
      </p>
      <div className="absolute bottom-3 w-[119px] border-[2.5px] rounded-full border-primary" />
    </div>
  );
};

export default OTP;
