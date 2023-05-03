import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='w-full h-full flex-wrap overflow-auto flex gap-x-8 items-center justify-center'>
            <Outlet />
        </div>
    );
};

export default AuthLayout;