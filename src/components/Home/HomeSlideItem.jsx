
const HomeSlide = ({ title, image }) => {

    return (
        <div className="pt-[22px]">
            <div className="flex flex-col " >
                <div className="flex felx-row w-[100px] justify-center">
                    <img src={image} className=" " alt="Food Image" />
                </div>
                <div className="flex felx-row justify-center">
                    <p className="text-dark-600 font-bold text-[18px]">{title}</p>
                </div>
            </div>
        </div>

    );
};

export default HomeSlide;
