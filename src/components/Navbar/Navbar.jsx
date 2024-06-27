import { useNavigate } from "react-router";
import Icons from "../Icons/Icons";

const Navbar = (props) => {
    const { back, shop } = props;
    const navigate = useNavigate()
    const onHandlePreviousClick = () => {
        window.history.back();
    }
    return (
        <div className="flex items-center justify-between mt-[30px]">
            <div className="flex items-center gap-5">
                <div onClick={() => onHandlePreviousClick()}>
                    {back ? <Icons type="arrow-left" color="gray" /> : ""}
                </div>
                <span className="text-2xl text-primary font-semibold">{props.text}</span>
            </div>
            <div onClick={() => navigate("/more/order")}>
                {shop ? <Icons type="shopping-cart" color="gray" /> : "" }
            </div>
        </div>
    );
}

export default Navbar;