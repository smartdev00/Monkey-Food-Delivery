import Icons from "../Icons/Icons";

const Navbar = (props) => {
    const { back, shop } = props;
    return (
        <div className="flex items-center justify-between mt-[30px]">
            <div className="flex items-center gap-5">
                {back ? <Icons type="arrow-left" color="gray" /> : ""}
                <span className="text-2xl text-primary font-semibold">{props.text}</span>
            </div>
            {shop ? <Icons type="shopping-cart" color="gray" /> : "" }
        </div>
    );
}

export default Navbar;