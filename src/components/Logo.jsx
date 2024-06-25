import logoImage from '../../public/assets/img/Logo.png'

const Logo = () => {

  return (
    <>
      <div className='flex text-center'>
        <p className="text-lg text-center text-slate-100"></p>
        <img className="bg-center items-center" src={logoImage} />
      </div>
    </>
  );
};

export default Logo;
