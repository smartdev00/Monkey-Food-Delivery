import logoImage from '../../public/assets/img/Logo.png'

const Logo = () => {

    return (
        <>
            <div className='  flex-col border border-red-400 '>
                <div className=' flex justify-center  '>
                    <img className="bg-center" src={logoImage} />
                </div>
                <div className=' flex justify-center  '>
                    <p className="   text-[34px]  text-[#FC6011]">Meal</p>
                    <p className='   text-[34px]  '>  Monkey</p>
                </div >
                <div className="  text-center pt-4 text-[12px]  text-slate-100  ">Food Delivery</div>
               
            </div >
        </>
    );
};

export default Logo;
