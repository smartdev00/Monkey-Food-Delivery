import TextField from "../../components/TextField/TextField";
import FilledButton from "../../components/Buttons/FilledButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleDataChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const validatePersonalData = (data) => {
    let isValid = false;
    if (data.name === "") {
      setError((previousState) => {
        return { ...previousState, name: "You must type in the name!" };
      });
    }
    if (data.email === "") {
      setError((previousState) => {
        return { ...previousState, email: "You must type in the email!" };
      });
    }
    if (data.mobileNo === "") {
      setError((previousState) => {
        return {
          ...previousState,
          mobileNo: "You must type in the Mobile No!",
        };
      });
    }
    if (data.address === "") {
      setError((previousState) => {
        return { ...previousState, address: "You must type in the address!" };
      });
    }
    if (data.password === "") {
      setError((previousState) => {
        return { ...previousState, password: "You must type in the password!" };
      });
    }
    if (data.confirmPassword === "") {
      setError((previousState) => {
        return {
          ...previousState,
          confirmPassword: "You must type in the confirm password!",
        };
      });
    } else if (data.password !== data.confirmPassword) {
      setError((previousState) => {
        return {
          ...previousState,
          confirmPassword: "Passwords are not matched!",
        };
      });
    }

    if (
      personalData.name !== "" &&
      personalData.email !== "" &&
      personalData.mobileNo !== "" &&
      personalData.address !== "" &&
      personalData.password !== "" &&
      personalData.confirmPassword !== "" &&
      personalData.password === personalData.confirmPassword
    )
      isValid = true;
    return isValid;
  };

  const handleSignUpClick = () => {
    if (validatePersonalData(personalData)) navigate("/intro");
  };

  return (
    <div className="relative flex flex-col items-center px-[21px] h-[790px]">
      <p className="text-3xl mt-[38px] mb-3 pt-[4px] text-primary">Sign Up</p>
      <span className="text-sm text-secondary">
        Add your details to sign up
      </span>
      <div className="flex flex-col gap-7 w-[100%] px-[13px] mt-9">
        <TextField
          name="name"
          placeholder="Name"
          type="text"
          autoFocus={true}
          error={error.name}
          value={personalData.name}
          onChange={(e) => handleDataChange(e)}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={error.email}
          value={personalData.email}
          onChange={(e) => handleDataChange(e)}
        />
        <TextField
          name="mobileNo"
          placeholder="Mobile No"
          type="text"
          error={error.mobileNo}
          value={personalData.mobileNo}
          onChange={(e) => handleDataChange(e)}
        />
        <TextField
          name="address"
          placeholder="Adress"
          type="text"
          error={error.address}
          value={personalData.address}
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
        <TextField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          error={error.confirmPassword}
          value={personalData.confirmPassword}
          onChange={(e) => handleDataChange(e)}
        />
        <FilledButton onClick={() => handleSignUpClick()}>Sign Up</FilledButton>
      </div>
      <p className="text-sm mt-6 text-secondary">
        Already have an Account?{" "}
        <Link to="/login" className="font-bold text-main">
          Login
        </Link>
      </p>
      <div className="absolute w-[119px] border-[2.5px] rounded-full bottom-3 border-primary" />
    </div>
  );
};

export default SignUp;
