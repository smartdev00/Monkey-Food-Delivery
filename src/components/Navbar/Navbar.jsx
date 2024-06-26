 
import Icons from "../Icons/Icons";
 

const Navbar = (props) => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-2xl text-primary font-semibold">{props.text}</span>
            <Icons type="shopping-cart" color="gray" />
        </div>
    );
}

export default Navbar;