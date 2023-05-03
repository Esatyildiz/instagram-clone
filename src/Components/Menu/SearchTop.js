import React from 'react';

const SearchTop = ({ setSearch, handleDelete, search }) => {
    const itemReset = () => {
        setSearch('')
    }
    console.log(itemReset);

    return (
        <>
            <div className='pt-3 pb-9 pr-[14px] pl-6'>
                <h2 className='text-2xl font-semibold'>Ara</h2>
            </div>
            <div className='flex items-center mb-6 pb-6 relative px-4 border-b'>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Ara' className='py-1 px-4 h-10 w-full rounded-lg bg-[#efefef] placeholder:text-[#8e8e8e] outline-none ' />
                {search &&
                    <button onClick={itemReset} type='buton' className='absolute right-[18px] top-[33%] -translate-x-2/4 -translate-y-2/4 bg-[#c7c7c7] rounded-full  leading-none text-sm w-4 h-4 m-0 p-0 text-white flex items-center justify-center'>×</button>
                }
            </div>
            {search &&
                <div className='flex justify-between items-center mx-6 mb-2'>
                    <span className='font-semibold'>Yakındakiler</span>
                    <span onClick={() => handleDelete()} className='text-sm font-semibold text-[#0095f6] cursor-pointer'>Tümünü Temizle</span>
                </div>
            }
        </>
    );
};

export default SearchTop;