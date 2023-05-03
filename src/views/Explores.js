import React from 'react';
import { Link } from 'react-router-dom';
import expo from '../data/explores.json';
import { Icon } from '../icon';
import Masonry from "react-responsive-masonry"



const Explores = () => {
    return (
        <Link to="#" className='  gap-1'>
            <Masonry columnsCount={3} gutter="4px">
                {expo.map((kesfet) => (
                    <div key={kesfet.id} className='shrink-0  relative group'>
                        <img src={kesfet.image} alt='' className='w-full h-full  object-cover ' />
                        <button type='button' className='absolute top-2 right-2'>
                            <Icon name="video" />
                        </button>
                        <div className='absolute w-full bottom-0 h-0 z-10 bg-black bg-opacity-50 duration-200  group-hover:h-full'></div>
                    </div>
                ))}
            </Masonry>
        </Link>
    );
};

export default Explores;