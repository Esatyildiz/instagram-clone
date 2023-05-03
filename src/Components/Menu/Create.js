import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../icon';

const Create = ({ open, handleClick, active }) => {
    return (
        <Link to="#" onClick={() => handleClick(6)} className={active === 6 ? "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-bold group hover:bg-linkHover" : "px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-normal group hover:bg-linkHover"}>
            <div className='group-hover:scale-[1.1] duration-150'>
                <Icon name={active === 6 ? "activeCreate" : "create"} />
            </div>
            {!open &&
                <span>Oluştur</span>
            }
        </Link>
    );
};

export default Create;
