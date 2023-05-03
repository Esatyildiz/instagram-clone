import React, { useState } from 'react';
import { Icon } from '../icon';
import ModalIcerik from './Main/ModalIcerik';

const HomesIcerik = () => {
    const [ModalShow, setModalShow] = useState(false);

    return (
        <div className='flex items-center justify-center mt-5'>
            <div className='w-[470px]'>
                <div className='flex items-center justify-between mb-3 ml-1'>
                    <div className='flex items-center'>
                        <img src='/img/profile.jpeg' alt='' className='w-8 h-8 mr-[10px] object-contain rounded-full' />
                        <span className='text-sm leading-4 font-semibold'>esatyldz_48</span>
                        <span className='text-[#8e8e8e] text-sm font-normal ml-1'>. 5d</span>
                    </div>
                    <button onClick={() => setModalShow(!ModalShow)} type='button' className='cursor-pointer'>
                        <Icon name="ShowAll" />
                    </button>
                    {<ModalIcerik ModalShow={ModalShow} setModalShow={setModalShow} />}
                </div>
                <div>
                    <img src='/img/plane.jpeg' className='w-[468px] h-[468px] object-cover mb-1' alt='' />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <button type='button' className='p-2 text-[#262626] hover:text-[#8e8e8e] duration-150'>
                                <Icon name="heart" />
                            </button>
                            <button type='button' className='p-2 text-[#262626] hover:text-[#8e8e8e] duration-150'>
                                <Icon name="comments" />
                            </button>
                            <button type='button' className='p-2 text-[#262626] hover:text-[#8e8e8e] duration-150'>
                                <Icon name="gonderi" />
                            </button>
                        </div>
                        <button type='button' className='p-2 text-[#262626] hover:text-[#8e8e8e] duration-150'>
                            <Icon name="save" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomesIcerik;