<<<<<<< HEAD
// import Basket from "../Icons/Basket";
=======
import Icons from "../Icons/Icons";
>>>>>>> cd687a54e8c4ca120342161f5a84ca6cc5d0f1f0

const Navbar = (props) => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-2xl text-primary font-semibold">{props.text}</span>
            <Icons type="shopping-cart" color="gray" />
        </div>
    );
}

export default Navbar;