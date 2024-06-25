const Icon = ({ label, image }) => {

    return (
        <>
            <div className='flex flex-col  '>
                <div className=' flex    '>
                    <img className="bg-center  h-11 w-12 " src={image} />
                </div>
                <div className='flex  '>
                    {label}
                </div>
            </div>
        </>
    );
};

export default Icon;
