"use client"
import React from 'react';
import Image from 'next/image';
import { useScrollListener, useWindowSize } from '@/hooks/windows.scroll';

type Props = {};

const Header = (props: Props) => {
    const [activeMenuBnt, setActiveMenuBnt] = React.useState<boolean>(false);


    const handleNavItemClick = (itemName: string) => {
    };

    return (
        <header className="relative w-full px-5 lg:px-16 bg-white">
            <div className={`h-[72px] grid grid-cols-3 items-center`}>
                <div className='col-span-1'>
                    <nav className="hidden lg:flex lg:space-x-5">
                        <a href="/" className='item-a'>
                            <span className='ff-roboto text-[#273732]'>
                                Home
                            </span>
                        </a>
                        <a href="#home-products">
                            <span className='ff-roboto text-[#273732]'>
                                Productos
                            </span>
                        </a>
                        <a href="#home-about-us">
                            <span className='ff-roboto text-[#273732]'>
                                Sobre Nosotros
                            </span>
                        </a>
                        <a href="#home-contact">
                            <span className='ff-roboto text-[#273732]'>
                                Contacto
                            </span>
                        </a>
                    </nav>
                    <div className='lg:hidden'>
                        {
                            activeMenuBnt ?
                                <span
                                    className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  w-[40px] h-[40px] rounded-full flex justify-center items-center text-[#3B6978] text-4xl text-bold ml-3 "
                                    onClick={() => setActiveMenuBnt(false)}
                                >

                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                                    </svg>
                                </span> :
                                <span
                                    className="lg:opacity-0 lg:invisible visible opacity-100 w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-[#3B6978] text-3xl ml-3 "
                                    onClick={() => { setActiveMenuBnt(true); handleNavItemClick("") }}
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                                    </svg>
                                </span>
                        }
                    </div>
                </div>

                <div className="col-span-1 flex justify-center">
                    <img
                        src={'asset/icons/logo-guilsoft-text.png'}
                        alt={'guilsoft-logo'}
                        width={194}
                        height={60}
                    />
                </div>
                <div className="col-span-1 flex justify-end">
                    <a href="/login-form">
                        <div className='w-[95px] h-[40px] rounded-[20px] bg-[#3B6978] text-white text-sm flex justify-center items-center'>
                            Login
                        </div>
                    </a>

                </div>
            </div>
            {
                activeMenuBnt ?
                    <nav className="block lg:hidden">
                        <ul className="block  rounded-b-[8px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white pl-10">
                            <li className="mb-1">
                                <a href="/" className='item-a'>
                                    <span className='ff-roboto text-[#273732]'>
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="#home-products">
                                    <span className='ff-roboto text-[#273732]'>
                                        Productos
                                    </span>
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="#home-about-us">
                                    <span className='ff-roboto text-[#273732]'>
                                        Sobre Nosotros
                                    </span>
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="#home-contact">
                                    <span className='ff-roboto text-[#273732]'>
                                        Contacto
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav> :
                    null
            }
        </header>
    );
}

export default Header;