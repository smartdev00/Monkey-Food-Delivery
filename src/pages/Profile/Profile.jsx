import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import avatar from '../../../public/assets/img/profile-avatar.png'
import TextField from '../../components/TextField/TextField';
import Icons from '../../components/Icons/Icons';
import FilledButton from '../../components/Buttons/FilledButton'
import Footer from '../../components/Footer';

const Profile = () => {
    return (
        <div>
            <div className='p-[21px]'>
                <Navbar text="Profile"/>
                <div className='flex flex-col justify-center items-center mb-[47px] mt-[30px]'>
                    <img src={avatar}/>
                    <div className='flex items-center mt-[18px] mb-[11px]'>
                        <Icons type="pen" color='orange'/> 
                        <span className='text-main text-[10px]'>Edit Profile</span>
                    </div>
                    <span className='text-primary text-base font-bold mb-1'>Hi there Emilia</span>
                    <span className='text-[11px] text-secondary'>Sign Out</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <TextField placeholder="name"/>
                    <TextField placeholder="Email"/>
                    <TextField placeholder="Mobile No"/>
                    <TextField placeholder="Adress"/>
                    <TextField placeholder="Password"/>
                    <TextField placeholder="Confirm Password"/>
                    <FilledButton>Save</FilledButton>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Profile;