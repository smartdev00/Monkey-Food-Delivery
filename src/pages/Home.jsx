import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Logo from '../components/Logo'

import up from '../../public/assets/img/up.png'


const Home = () => {

  return (
    <>

       
        <div class="flex   w-48 h-48   justify-around ">
          {/* <img className="opacity-80   " src={up} /> */}

          <Logo />

          {/* <Footer /> */}
        
      </div>
    </>
  );
};

export default Home;
