import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Explores from '../views/Explores';
import HomeInstagram from '../views/HomeInstagram';

const Content = () => {
    return (
        <main className='ml-[461px] mr-[199px]  w-full mt-8'>

            <Routes>
                <Route path='/' element={<HomeInstagram />}></Route>
                <Route path='/explore' element={<Explores />}></Route>
            </Routes>
        </main>
    );
};

export default Content;