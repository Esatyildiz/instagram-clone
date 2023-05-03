import React from 'react';
import story from '../data/searcItem.json';

const RightBar = () => {
    return (
        <div className='pt-8 w-[319px]'>
            <div className='flex items-center justify-between mb-3 '>
                <div className='flex items-center'>
                    <img src='/img/profile.jpeg' alt='' className='w-16 h-16 cursor-pointer mr-4 object-contain rounded-full' />
                    <div className='flex flex-col'>
                        <span className='text-sm leading-4 font-semibold'>esatyldz_48</span>
                        <span className='text-[#8e8e8e] text-sm font-normal ml-1'>(っ◔◡◔)っ 𝔼𝕊𝔸𝕋  𝕐𝕀𝕃𝔻𝕀ℤ</span>
                    </div>
                </div>
                <button type='button' className='cursor-pointer text-xs text-[#0095f6] font-semibold'>Geçiş yap</button>
            </div>
            <div className='flex justify-between mb-3'>
                <span className='text-sm font-semibold text-[#8e8e8e]'>Senin için önerilenler</span>
                <span className='text-xs font-semibold'>Tümünü Gör</span>
            </div>
            {story.map((storyItem) => (
                <div key={storyItem.id} className='flex items-center justify-between mb-3 ml-1'>
                    <div className='flex items-center'>
                        <img src={storyItem.image} alt='' className='w-8 h-8 mr-[10px] object-contain rounded-full' />
                        <div className='flex flex-col'>
                            <span className='text-sm leading-4 font-semibold'>{storyItem.title}</span>
                            <span className='text-[#8e8e8e] text-xs font-normal ml-1'>{storyItem.description}</span>
                        </div>
                    </div>
                    <button type='button' className='cursor-pointer text-xs text-[#0095f6] font-semibold'>Takip Et</button>
                </div>
            ))}
        </div>
    );
};

export default RightBar;