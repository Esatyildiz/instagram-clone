import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = ({ open, handleClick, active }) => {
    return (
        <NavLink to={"/esatyldz_48"} onClick={() => handleClick(7)} className={active === 7 ? "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-bold group hover:bg-linkHover" : "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-normal group hover:bg-linkHover"}>
            <div className='group-hover:scale-[1.1] duration-150'>
                <div className={`w-6 h-6 rounded-full overflow-hidden ${active === 7 ? "border-2 border-black" : ""}`}>
                    <img src="/img/profile.jpeg" className='object-contain' alt='profile' />
                </div>
            </div>
            {!open &&
                <span>Profil</span>
            }
        </NavLink>
    );
};

export default Profile;