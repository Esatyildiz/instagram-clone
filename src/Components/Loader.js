import React from 'react';

const Loader = () => {
    return (
        <div className='absolute top-0 left bg-white  w-full h-full flex flex-col items-center justify-center text-base text-white font-semibold'>
            <img src='/img/instagram-logo.png' className='w-20 h-20' alt='' />
            <img src='/img/bottom-logo.png' className='w-[72px] h-[37px] absolute bottom-8 ' alt='' />
        </div>
    );
};

export default Loader;

