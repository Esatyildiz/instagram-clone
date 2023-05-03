import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../icon';

const Message = ({ menuActive, open, handleClick, active }) => {
    return (
        <NavLink to={"/inbox"} onClick={() => handleClick(4)} className={active === 4 ? "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-bold group hover:bg-linkHover" : "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-normal group hover:bg-linkHover"}>
            <div className='group-hover:scale-[1.1] duration-150'>
                <Icon name={active === 4 ? "activeMessage" : "message"} />
            </div>
            {!open &&
                <span>Mesajlar</span>
            }
        </NavLink>
    );
};

export default Message;