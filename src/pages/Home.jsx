import { Link, useNavigate } from "react-router-dom";

import Line from '../components/Line'
import Logo from '../components/Logo'
import Login from '../components/Buttons/FilledButton'
import SignUP from '../components/Buttons/BorderButton'

import upImage from '../../public/assets/img/up.png'

const Home = () => {
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate("/auth/login")
  }

  const handleSignUpClick = () => {
    navigate("/auth/signup")
  }

  return (
    <div>
      <div className="  relative   ">
        <img className=" w-[100%] h-[392px] " src={upImage} />
      </div>

      <div className=" h-[382px]" style={{ position: 'relative', bottom: '80px' }}>
        <Logo />
        <div className="w-full px-[52px] pt-[28px] text-primary text-center">
          Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep
        </div>
        <div className="px-[34px] pt-[28px]">
          <Login onClick={handleLoginClick}> Login</Login>
        </div>
        <div className="px-[34px] pt-[28px]">
          <SignUP onClick={handleSignUpClick}> Create an Account </SignUP>
        </div>
        <div className="px-[34px] pt-[40px]">
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Home;
