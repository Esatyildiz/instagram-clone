import React from 'react';
import { Icon } from '../../icon';
import SearchMenuOpen from './SearchMenuOpen';

const Search = ({ open, setOpen }) => {


    return (
        <>
            <button type='button' className={`px-3 py-3  rounded-3xl duration-150 ease-linear flex items-center text-link gap-x-4 font-normal group hover:bg-linkHover ${open ? "border-[#ececec] border" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <div className='group-hover:scale-[1.1] duration-150'>
                    <Icon name={open ? "activeSearch" : "search"} />
                </div>
                {!open &&
                    <span>Ara</span>
                }
            </button>
            {<SearchMenuOpen open={open} />}


        </>
    );

};

export default Search;
