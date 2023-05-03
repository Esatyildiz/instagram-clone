import React, { useState } from 'react';
import Create from '../Menu/Create.js';
import Discover from '../Menu/Discover.js';
import HomeBar from '../Menu/HomeBar.js';
import Message from '../Menu/Message.js';
import Notifications from '../Menu/Notifications.js';
import Profile from '../Menu/Profile.js';
import Reels from '../Menu/Reels.js';
import Search from '../Menu/Search';

const Menu = ({ open, setOpen }) => {
    const [active, setActive] = useState(null);

    const handleClick = (id) => {
        setActive(id)
    }

    return (
        <>
            <div className='grow gap-y-2 flex flex-col'>
                <HomeBar active={active} handleClick={handleClick} open={open} />
                <Search open={open} setOpen={setOpen} />
                <Discover active={active} handleClick={handleClick} open={open} />
                <Reels active={active} handleClick={handleClick} open={open} />
                <Message active={active} handleClick={handleClick} open={open} />
                <Notifications active={active} handleClick={handleClick} open={open} />
                <Create active={active} handleClick={handleClick} open={open} />
                <Profile active={active} handleClick={handleClick} open={open} />
            </div>
        </>
    );
};

export default Menu;