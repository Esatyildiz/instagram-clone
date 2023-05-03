import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import More from '../Components/Menu/More.js';
import { Icon } from '../icon.js';
import Menu from './Sidebar/Menu';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <aside className={`w-[244px] h-full fixed flex-shrink-0 px-3 pt-2 pb-5 border-r border-[#dbdbdb] duration-150 ease-linear flex flex-col ${open ? "w-[73px]" : "duration-150"}`}>
            <Link to="/" className='h-[92px] w-full flex items-center px-3'>
                <Icon name={open ? "instagram" : "instagramLogo"} />
            </Link>
            <Menu open={open} setOpen={setOpen} />
            <More open={open} />
        </aside>
    );
};

export default Sidebar;