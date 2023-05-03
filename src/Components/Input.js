import React, { useEffect, useState } from 'react';

const Input = ({ label, type = 'text', ...props }) => {
    const [show, setShow] = useState(false);
    const [inputType, setType] = useState(type)
    useEffect(() => {
        if (show) {
            setType("text")
        } else if (type === "password") {
            setType("password")
        }
    }, [show])

    return (
        <label className='block relative'>
            <input required={true} type={inputType} className="bg-zinc-50 border w-full h-[38px] outline-none text-xs mt-1 focus:border-gray-300 peer rounded" style={{ padding: "9px 0 7px 8px" }} id='info' {...props} />
            <small className='absolute top-1/2 -translate-y-1/2 left-2 text-xs text-[#8e8e8e]  duration-200 peer-focus:text-[10px]    peer-valid:-translate-y-4'>{label}</small>
            {type === "password" && props?.value && (
                <button type='button' onClick={() => setShow(show => !show)} className='absolute top-0 right-0 h-full flex items-center text-sm font-semibold pr-2'>
                    {show ? 'hide' : 'show'}
                </button>
            )}
        </label>

    );
};

export default Input;   