import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
const Menu = () => {

  return (
    <div>
        Welcome I am Menu.
        <Link
              to={"/Home"}
              data-tooltip-id="createBtn"
              data-tooltip-place="top"
              data-tooltip-content="Create"
              className="fixed bottom-14 right-4 text-2xl flex justify-center overflow-hidden cursor-pointer"
            >
            </Link>
              <Footer />  
    </div>
  );
};

export default Menu;
