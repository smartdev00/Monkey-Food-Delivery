const HomeSlide = ({ label, image }) => {

    return (
        <>
            <div className='flex flex-col    '>
                    <img className="  h-[124px] min-w-[124px]   " src={image}  />
                <div className='flex justify-center'>
                    {label}
                </div>
            </div>
        </>
    );
};

export default HomeSlide;
