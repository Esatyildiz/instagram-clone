import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../icon';

const Reels = ({ menuActive, open, handleClick, active }) => {
    return (
        <NavLink to={"/reels"} onClick={() => handleClick(3)} className={active === 3 ? "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-bold group hover:bg-linkHover" : "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-normal group hover:bg-linkHover"}>
            <div className='group-hover:scale-[1.1] duration-150'>
                <Icon name={active === 3 ? "activeReels" : "reels"} />
            </div>
            {!open &&
                <span>Reels</span>
            }
        </NavLink>
    );
};

export default Reels;