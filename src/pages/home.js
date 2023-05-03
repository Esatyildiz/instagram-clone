import React from 'react';
import Content from '../Components/Content.js';
import Sidebar from "../Components/Sidebar.js"

const home = () => {
    return (
        <div className="h-full flex">
            <Sidebar />
            <Content />
        </div>
    );
};

export default home;