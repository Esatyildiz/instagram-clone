import React from 'react';
import Content from './Content.js';
import Sidebar from './Sidebar.js';

const Layout = ({ children }) => {
    return (
        <div className='flex h-full'>
            <Sidebar />
            <Content>{children}</Content>
        </div>
    );
};

export default Layout;