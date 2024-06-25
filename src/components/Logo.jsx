import logoImage from '../../public/assets/img/Logo.png'

const Logo = () => {

    return (
        <>
            <div className='  flex-col h-1/2  items-center text-center'>
                <p className='flex justify-center'><img className="bg-center  " src={logoImage} /></p>
                <p><p className='text-lg text-orange-500'>Meal</p> <p className='text-orange-500'>Monkey</p> </p>
                <p className="text-sm   text-slate-100 fs">Food Delivery</p>
            </div>
        </>
    );
};

export default Logo;
