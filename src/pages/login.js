
import React, { useState, useRef, useEffect } from 'react';
import Input from '../Components/Input';
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../firebase.js';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const enable = username && password

    const ref = useRef()

    useEffect(() => {
        let images = ref.current.querySelectorAll("img"),
            total = images.length,
            current = 0

        const imageslider = () => {
            if (current > 1) {
                images[current - 1].classList.add("opacity-0");
            } else {
                images[total - 1].classList.add("opacity-0");
            }
            images[current].classList.remove("opacity-0");
            if (current === total - 1) {
                current = 0
            } else {
                current += 1
            }
        }
        imageslider()

        let interval = setInterval(imageslider, 3000)
        return () => {
            clearInterval(interval)
        };



    }, [ref])

    const handleClick = async e => {
        e.preventDefault()
        await login(username, password)
        navigate(location.state?.return_url || '/', {
            replace: true
        })
    }


    const images = [
        "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
        "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
        "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
        "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
    ]



    return (
        <>
            <div className='w-full h-full flex-wrap overflow-auto flex gap-x-8 items-center justify-center'>
                <div className='hidden md:block w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[-46px_0px]'>
                    <div className='absolute top-[27px] right-[18px] w-[250px] h-[538px]' ref={ref}>
                        {images.map((image, key) => (
                            <img key={key} className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear' src={image} alt='' />
                        ))}
                    </div>
                </div>

                <div className='w-[350px] grid gap-y-3'>
                    <div className=' bg-white border p-[40px] pt-8 pb-6'>
                        <a href='#' className='flex justify-center'>
                            <div className='h-[51px] w-[175px] bg-[0px_0px]  bg-[length:176px_181px] bg-no-repeat	inline-block bg-logo-instagram' />
                        </a>
                        <form onSubmit={handleClick} className='mt-5 !gap-y-1.5'>
                            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} label="Phone number, username or email" />
                            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
                            <button type='submit' disabled={!enable} className='h-[30px] bg-brand text-white text-sm w-full rounded mt-2 font-medium disabled:opacity-50'>Log In</button>
                            <div className='flex items-center my-2'>
                                <div className='h-px bg-gray-300 flex-1' />
                                <span className='px-[18px] font-semibold text-gray-500 text-sm'>OR</span>
                                <div className='h-px bg-gray-300 flex-1' />
                            </div>
                            <button type='button' className='flex items-center mb-2 justify-center w-full gap-x-2 text-facebook'>
                                <AiFillFacebook size={20} />
                                <span className='text-sm font-semibold'>Facebook ile Giriş Yap</span>
                            </button>
                            <a href='#' className='flex items-center justify-center text-xs text-link'>
                                Şifreni mi unuttun?
                            </a>
                        </form>
                    </div>
                    <div className='bg-white border p-4 text-sm text-center font-semibold'>
                        Hesabın yok mu? <a href='#' className='text-[#0095f6]'>Kaydol</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;