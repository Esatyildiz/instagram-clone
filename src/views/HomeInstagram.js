import React, { useEffect, useRef, useState } from 'react';
import HomesIcerik from '../Components/HomesIcerik';
import Hikaye from '../data/hikaye.json';
import ScrollContainer from 'react-indiana-drag-scroll';
import RightBar from '../Components/RightBar';

const HomeInstagram = () => {
    const storyRef = useRef();
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);

    useEffect(() => {
        if (storyRef.current) {
            const scrollHandle = () => {
                const isEnd = storyRef.current.scrollLeft + storyRef.current.offsetWidth === storyRef.current.scrollWidth
                const isBegin = storyRef.current.scrollLeft === 0
                setPrev(!isBegin)
                setNext(!isEnd)
            }
            scrollHandle()
            storyRef.current.addEventListener('scroll', scrollHandle)

            return () => {
                storyRef?.current?.removeEventListener('scroll', scrollHandle)
            }
        }
    }, [storyRef])

    const nextStory = () => {
        storyRef.current.scrollLeft += storyRef.current.offsetWidth - 200
    }
    const prevStory = () => {
        storyRef.current.scrollLeft -= storyRef.current.offsetWidth - 200
    }

    return (
        <>
            <div className='flex'>
                <div className='w-[630px] mr-[64px] pt-8'>
                    <div className='relative'>
                        {prev && <button onClick={prevStory} className="absolute left-0 top-[40%] ml-2 -translate-y-1/2"><img src='/img/prev.svg' alt='' className='w-h-7 h-7' /></button>}
                        {next && <button onClick={nextStory} className="absolute right-0 top-[40%] mr-2 -translate-y-1/2"><img src='/img/next.svg' alt='' className='w-h-7 h-7 ' /></button>}
                        <ScrollContainer
                            className="scroll-container  flex scroll-smooth overflow-x-auto flex-nowrap gap-x-3 mb-6 items-center"
                            innerRef={storyRef}
                        >
                            {Hikaye.map((story) => (
                                <div key={story.id}>
                                    <div className='w-[66px] h-[66px] border-2 border-[#ff0c5e] rounded-full flex items-center justify-center'>
                                        <img src={story.image} alt='' className='w-14 h-14 object-contain rounded-full' />
                                    </div>
                                    <span className='text-xs leading-4 font-normal'>{story.title}</span>
                                </div>
                            ))}
                        </ScrollContainer>
                    </div>
                    <HomesIcerik />
                </div>
                <RightBar />
            </div>
        </>
    );
};

export default HomeInstagram;