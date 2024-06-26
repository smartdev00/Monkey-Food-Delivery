import logoImage from '../../public/assets/img/Logo.png'

const Logo = () => {

    return (
        <>
            <div className='flex-col  items-center   text-center'>
                <div className=' items-center'>
                    <img className="bg-center" src={logoImage} />
                </div>
                <div className=' text-6xl text-justify'>
                    <p className="text-[#FC6011]">Meal</p>
                    <p className='  '>Monkey</p>
                </div >
                <div className="text-6xl  text-slate-100  ">Food Delivery</div>
               
            </div >
        </>
    );
};

export default Logo;
