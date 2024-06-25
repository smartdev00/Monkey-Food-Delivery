import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Logo from '../components/Logo'

import up from '../../public/assets/img/up.png'


const Home = () => {

  return (
    <>
      
        <div className=" ">
          <div class="flex justify-center ...">
            <img className="opacity-80 w-full h-[28em]  " src={up} />
          </div>
          <Logo />

        <Footer />
        </div>
      </>
      );
};

      export default Home;
