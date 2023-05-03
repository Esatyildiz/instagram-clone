import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../icon';

const HomeBar = ({ open, handleClick, active }) => {
    return (
        <NavLink to={"/"} onClick={() => handleClick(1)} className={active === 1 ? "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-bold group hover:bg-linkHover" : "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-normal group hover:bg-linkHover"}>
            <div className='group-hover:scale-[1.1] duration-150 '>
                <Icon name={active === 1 ? "homeActive" : "home"} />
            </div>
            {!open &&
                <span>Ana Sayfa</span>
            }
        </NavLink>
    );
};

export default HomeBar;