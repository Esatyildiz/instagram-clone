import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../icon';

const Discover = ({ menuActive, open, active, handleClick }) => {
    return (
        <NavLink to={"/explore"} onClick={() => handleClick(2)} className={active === 2 ? "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-bold group hover:bg-linkHover" : "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-normal group hover:bg-linkHover"}>
            <div className='group-hover:scale-[1.1] duration-150'>
                <Icon name={active === 2 ? "activeDiscover" : "discover"} />
            </div>
            {!open &&
                <span>Keşfet</span>
            }
        </NavLink>
    );
};

export default Discover;