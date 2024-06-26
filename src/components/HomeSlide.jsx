const HomeSlide = ({ label, image }) => {

    return (
        <>
            <div className='flex flex-col    '>
                <div className=' flex justify-center  '>
                    <img className="  w-[124px]   " src={image}  />
                </div>
                <div className='flex justify-center'>
                    {label}
                </div>
            </div>
        </>
    );
};

export default HomeSlide;
