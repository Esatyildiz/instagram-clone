import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../icon';

const Notifications = ({ open, handleClick, active }) => {
    return (
        <Link to="#" onClick={() => handleClick(5)} className={active === 5 ? "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-bold group hover:bg-linkHover" : "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-normal group hover:bg-linkHover"}>
            <div className='group-hover:scale-[1.1] duration-150'>
                <Icon name={active === 5 ? "activeNotifications" : "notifications"} />
            </div>
            {!open &&
                <span>Bildirimler</span>
            }
        </Link>
    );
};

export default Notifications;