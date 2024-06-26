import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import avatar from '../../public/assets/img/profile-avatar.png'
import Basket from '../components/Icons/Basket';
import TextField from '../components/TextField/TextField';

const Profile = () => {
    return (
        <div className='p-[21px]'>
            <Navbar text="Profile"/>
            <div className='flex flex-col justify-center items-center'>
                <img src={avatar}/>
                <div className='flex items-center mt-[18px] mb-[11px]'>
                    <Basket type="pen" color='orange'/> 
                    <span className='text-main text-[10px]'>Edit Profile</span>
                </div>
                <span className='text-primary text-base font-bold mb-1'>Hi there Emilia</span>
                <span className='text-[11px] text-secondary'>Sign Out</span>
            </div>
            <div>
                <TextField placeholder="name"/>
            </div>
        </div>
    );
}

export default Profile;