import React from 'react';
interface Props {
    handleQrModal: any
}

const Header = ({ handleQrModal }: Props) => {
    const [activeMenuBnt, setActiveMenuBnt] = React.useState<boolean>(false);
    const [activeNavItem, setActiveNavItem] = React.useState<string>('');
    const handleNavItemClick = (itemName: string) => {
        setActiveNavItem(itemName);
    };
    const handleQRItemClick = () => {
        handleQrModal()
        setActiveMenuBnt(false)
    }
    return (
        <div className="container w-full bg-[#111111] lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:hidden">
            <div className="w-full flex justify-between px-4">
                <a
                    className="text-3xl font-semibold text-white"
                    href="/">
                    GuilSoft
                    {/* <img
                                    alt="logo"
                                    src=""
                                    width="153"
                                    height="26"
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-[28px] lg:h-[32px]"
                                    style={{ color: 'transparent' }}
                                /> */}
                </a>
                <div className="flex items-center">

                    {
                        activeMenuBnt ?
                            <span
                                className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100 bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                                onClick={() => setActiveMenuBnt(false)}
                            >

                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                                </svg>
                            </span> :
                            <span
                                className="lg:opacity-0 lg:invisible visible opacity-100 bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
                                onClick={() => { setActiveMenuBnt(true); handleNavItemClick("") }}
                            >
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                                </svg>
                            </span>
                    }
                </div>
            </div>
            {
                activeMenuBnt ?
                    <nav className="block lg:hidden">
                        <ul className="block  rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-[#111111] ">
                            <li className="mb-1">
                                <a
                                    className={`rounded-md  cursor-pointer font-poppins bg-[#111111] font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[#A6A6A6] text-white linked ${activeNavItem === 'about-me' ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]" : ""} `}
                                    href="#cvt-about-me"
                                    onClick={() => handleNavItemClick("about-me")}
                                >
                                    <span className="mr-2 text-xl">
                                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path>
                                            <path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path>
                                            <path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path>
                                            <path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    Sobre Mí
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className={`rounded-md  cursor-pointer font-poppins bg-[#111111] font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[#A6A6A6] ${activeNavItem === 'gallery' ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]" : ""} `}
                                    href="#cvt-gallery"
                                    onClick={() => handleNavItemClick("gallery")}
                                >
                                    <span className="mr-2 text-xl">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M495.1,38.4H85.5c-9.4,0-17.1,7.6-17.1,17.1v17.1H51.3c-9.4,0-17.1,7.6-17.1,17.1v17.1H17.1c-9.4,0-17.1,7.6-17.1,17.1     v332.8c0,9.4,7.6,17.1,17.1,17.1h409.6c9.4,0,17.1-7.6,17.1-17.1v-17.1h17.1c9.4,0,17.1-7.6,17.1-17.1v-17.1h17.1     c9.4,0,17.1-7.6,17.1-17.1V55.5C512.2,46,504.6,38.4,495.1,38.4z M426.8,314.4l-44.7-51.2c-3.4-3.9-9.4-3.9-12.9,0l-54,61.8     L168,194.2c-3.2-2.9-8.1-2.9-11.3,0L17.3,318.1V132.3c0-4.7,3.8-8.5,8.5-8.5h392.5c4.7,0,8.5,3.8,8.5,8.5V314.4z M452.5,422.4     H444V123.7c0-9.4-7.6-17.1-17.1-17.1H51.4v-8.5c0-4.7,3.8-8.5,8.5-8.5h392.5c4.7,0,8.5,3.8,8.5,8.5l0.1,315.8     C461,418.6,457.2,422.4,452.5,422.4z M486.6,388.2h-8.5V89.6c0-9.4-7.6-17.1-17.1-17.1H85.5V64c0-4.7,3.8-8.5,8.5-8.5h392.5     c4.7,0,8.5,3.8,8.5,8.5v315.7h0.1C495.1,384.4,491.3,388.2,486.6,388.2z" />
                                            <path d="M307.4,174.9c-18.8,0-34.1,15.3-34.1,34.1c0,18.8,15.3,34.1,34.1,34.1c18.8,0,34.1-15.3,34.1-34.1     C341.5,190.2,326.2,174.9,307.4,174.9z" />
                                        </svg>
                                    </span>
                                    Gallería
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className={`rounded-md  cursor-pointer font-poppins bg-[#111111] font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[#A6A6A6] ${activeNavItem === 'contact' ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]" : ""} `}
                                    href="#cvt-contact"
                                    onClick={() => handleNavItemClick("contact")}>
                                    <span className="mr-2 text-xl">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path></g>
                                        </svg>
                                    </span>
                                    Contacto
                                </a>
                            </li>
                            <li className="mb-1">
                                <div
                                    className={`rounded-md  cursor-pointer font-poppins bg-[#111111] font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[#A6A6A6] ${activeNavItem === 'contact' ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]" : ""} `}
                                    onClick={() => handleQRItemClick()}>
                                    <span className="mr-2 text-xl">
                                        <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 9h6V3H3zm1-5h4v4H4zm1 1h2v2H5zm10 4h6V3h-6zm1-5h4v4h-4zm1 1h2v2h-2zM3 21h6v-6H3zm1-5h4v4H4zm1 1h2v2H5zm15 2h1v2h-2v-3h1zm0-3h1v1h-1zm0-1v1h-1v-1zm-10 2h1v4h-1v-4zm-4-7v2H4v-1H3v-1h3zm4-3h1v1h-1zm3-3v2h-1V3h2v1zm-3 0h1v1h-1zm10 8h1v2h-2v-1h1zm-1-2v1h-2v2h-2v-1h1v-2h3zm-7 4h-1v-1h-1v-1h2v2zm6 2h1v1h-1zm2-5v1h-1v-1zm-9 3v1h-1v-1zm6 5h1v2h-2v-2zm-3 0h1v1h-1v1h-2v-1h1v-1zm0-1v-1h2v1zm0-5h1v3h-1v1h-1v1h-1v-2h-1v-1h3v-1h-1v-1zm-9 0v1H4v-1zm12 4h-1v-1h1zm1-2h-2v-1h2zM8 10h1v1H8v1h1v2H8v-1H7v1H6v-2h1v-2zm3 0V8h3v3h-2v-1h1V9h-1v1zm0-4h1v1h-1zm-1 4h1v1h-1zm3-3V6h1v1z" />
                                            <path fill="none" d="M0 0h24v24H0z" />
                                        </svg>
                                    </span>
                                    Compartir
                                </div>
                            </li>

                        </ul>
                    </nav> :
                    null
            }
        </div>
    )
}

export default Header