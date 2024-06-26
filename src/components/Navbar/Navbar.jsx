// import Basket from "../Icons/Basket";

const Navbar = (props) => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-2xl text-primary font-semibold">{props.text}</span>
            <Basket type="shopping-cart" color="orange" />
        </div>
    );
}

export default Navbar;