import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/Buttons/FilledButton";
import { useNavigate } from "react-router";

const NewPassword = () => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/profile");
  };
  return (
    <div className="flex flex-col items-center px-[21px] h-[790px] relative">
      <p className="text-3xl mt-[38px] mb-3 text-center text-primary">
        New Password
      </p>
      <span className="text-sm text-center text-secondary">
        Please enter your email to receive a
        <br />
        link to create a new password via email
      </span>
      <div className="flex flex-col gap-7 w-[100%] px-[13px] mt-[39px]">
        <TextField placeholder="New Password" />
        <TextField placeholder="Confirm Password" />
        <FilledButton onClick={handleNextClick}>Next</FilledButton>
      </div>
      <div className="absolute bottom-3 w-[119px] border-[2.5px] rounded-full border-primary" />
    </div>
  );
};

export default NewPassword;
