import React, { useState } from 'react';
import { Icon } from '../../icon';
import SearchItem from '../../data/searcItem.json';
import SearchTop from './SearchTop';

const SearchMenuOpen = ({ open }) => {
    const [search, setSearch] = useState('');
    const [list, setList] = useState(SearchItem);

    const itemDelete = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    };

    const handleDelete = () => {
        setSearch("");
    };

    return (
        <>
            <div className={`w-[397px]  h-screen pt-2  rounded-r-2xl  duration-300 ease-linear  fixed top-0 bg-white shadow-3xl ${open ? "left-[73px] opacity-100 z-20 " : "-left-[73px] opacity-0 z-[-1]"}`}>

                <SearchTop setSearch={setSearch} handleDelete={handleDelete} search={search} />

                <div className='overflow-y-auto h-screen'>
                    {list
                        .filter((searchBox) => {
                            if (search === "") {
                                return null;
                            } else if (searchBox?.title?.toString().toLowerCase().includes(search?.toString().toLowerCase())) {
                                return searchBox
                            }
                        }).map((searchBox) => (
                            <div key={searchBox?.id} className='px-6 flex justify-between items-center py-2 cursor-pointer duration-150 ease-in-out hover:bg-[#fafafa]'>
                                <div className='flex items-center'>
                                    <img src={searchBox?.image} className='w-14 h-14 object-contain rounded-full' alt='' />
                                    <div className='flex flex-col ml-3'>
                                        <span className='text-sm font-semibold'>{searchBox?.title}</span>
                                        <span className='text-[#8f8f8f] font-normal text-sm'>{searchBox?.description}</span>
                                    </div>
                                </div>
                                <button onClick={() => itemDelete(searchBox.id)} className='cursor-pointer text-[#8e8e8e]'>
                                    <Icon name="close" size={16} />
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default SearchMenuOpen;




