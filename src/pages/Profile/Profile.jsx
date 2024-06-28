import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import avatar from "../../../public/assets/img/profile-avatar.png";
import TextField from "../../components/TextField/TextField";
import Icons from "../../components/Icons/Icons";
import FilledButton from "../../components/Buttons/FilledButton";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  const [personalData, setPersonalData] = useState({
    name: "Emilia Clarke",
    email: "emiliaclarke@email.com",
    mobileNo: "emiliaclarke@email.com",
    address: "No 23, 6th Lane, Colombo 03",
    password: "123123123",
    confirmPassword: "123123123",
  });
  const [editable, setEditable] = useState(false);

  const handlePersonalChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
  };

  return (
    <div className="relative h-[996px]">
      <div className="px-[21px]">
        <Navbar text="Profile" shop="true" />
        <div className="flex flex-col justify-center items-center mb-[47px] mt-[30px]">
          <img src={avatar} />
          <div
            className="flex items-center gap-[7px] mt-[18px] mb-[11px] hover:cursor-pointer"
            onClick={() => handleEditClick()}
          >
            <Icons type="pen" color="orange" />
            <span className="text-main text-[10px]">Edit Profile</span>
          </div>
          <span className="text-primary text-base font-bold mb-1">
            Hi there Emilia!
          </span>
          <Link to="/" className="text-[11px] text-secondary">
            Sign Out
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <TextField
            placeholder="Name"
            name="name"
            disable={!editable}
            autoFocus={true}
            value={personalData.name}
            onChange={(e) => handlePersonalChange(e)}
          />
          <TextField
            placeholder="Email"
            name="email"
            type="email"
            disable={!editable}
            value={personalData.email}
            onChange={(e) => handlePersonalChange(e)}
          />
          <TextField
            placeholder="Mobile No"
            name="mobileNo"
            disable={!editable}
            value={personalData.mobileNo}
            onChange={(e) => handlePersonalChange(e)}
          />
          <TextField
            placeholder="Address"
            name="address"
            disable={!editable}
            value={personalData.address}
            onChange={(e) => handlePersonalChange(e)}
          />
          <TextField
            placeholder="Password"
            name="password"
            disable={!editable}
            value={personalData.password}
            type="password"
            onChange={(e) => handlePersonalChange(e)}
          />
          <TextField
            placeholder="ConfirmPassword"
            name="confirmPassword"
            disable={!editable}
            value={personalData.confirmPassword}
            type="password"
            onChange={(e) => handlePersonalChange(e)}
          />
          <FilledButton onClick={() => handleSaveClick()}>Save</FilledButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
