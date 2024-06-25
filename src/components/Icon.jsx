const Icon = ({ label, image }) => {

    return (
        <>
            <div className='flex flex-col '>
                <div className='   '>
                    <img className="bg-center items-center h-11 w-12 " src={image} />
                </div>
                <div className=' '>
                    {label}
                </div>
            </div>
        </>
    );
};

export default Icon;
