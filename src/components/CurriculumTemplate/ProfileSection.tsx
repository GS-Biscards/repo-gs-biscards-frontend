import React from 'react';
import { User } from '@/models/user.model';
import { saveContact } from '@/utils/save.file';

interface Props {
    user: User;
}

const ProfileSection = ({ user }: Props) => {
   
    return (

        <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
            <img
                alt="avatar"
                src={user.accountImg.profileImg}
                width="240"
                height="240"
                decoding="async"
                data-nimg="1"
                className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                loading="lazy"
                style={{ color: 'transparent' }}
            />
            <div className="pt-[100px] pb-8">
                <h1 className="mt-6 mb-1 text-4xl font-semibold text-white">
                    {user.firstName + " " + user.lastName}
                </h1>
                <h3 className="mb-4 text-[#7B7B7B] inline-block bg-[#1D1D1D] px-5 py-1.5 rounded-lg text-[#A6A6A6] ">
                    {user.description}
                </h3>
                <div className="flex justify-center space-x-3">
                    <a
                        href={user?.socialMedia !== undefined ? user.socialMedia.instagramUrl : "https://instagram.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="socialbtn">
                            <img src="asset/icons/ig-icon.svg" alt="icon" style={{ height: "1em", width: "1em" }} />
                        </span>
                    </a>
                    <a
                        href={user?.socialMedia !== undefined ? user.socialMedia.facebookUrl : "https://www.facebook.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="socialbtn text-[#1773EA]">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                            </svg>
                        </span>
                    </a>
                    <a
                        href={user?.socialMedia !== undefined ? user.socialMedia.twitterUrl : "https://twitter.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="socialbtn text-[#1C9CEA]">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                        </span>
                    </a>
                    <a
                        href={user?.socialMedia !== undefined ? user.socialMedia.tikTokUrl : "https://www.tiktok.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="socialbtn ">
                            <svg height="1em" width="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5156 18.9001V17.0279C18.8658 16.9359 18.2106 16.8881 17.5543 16.885C9.52906 16.885 3 23.4152 3 31.4405C3 36.3634 5.46035 40.7212 9.21355 43.3564C6.70047 40.6688 5.30332 37.1262 5.30535 33.4468C5.30535 25.5358 11.6486 19.0848 19.5156 18.9001" fill="#00F2EA" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8586 40.0934C23.4392 40.0934 26.3602 37.245 26.4932 33.6952L26.5053 2.00632H32.2945C32.1709 1.34468 32.1084 0.673085 32.1076 0H24.2011L24.1879 31.69C24.056 35.2387 21.1339 38.086 17.5544 38.086C16.4797 38.0864 15.4212 37.8246 14.4707 37.3231C15.0844 38.1793 15.8932 38.8772 16.8301 39.3589C17.767 39.8407 18.8051 40.0924 19.8586 40.0934V40.0934ZM43.1089 12.7624V11.0012C40.9813 11.0032 38.8994 10.3843 37.1185 9.22028C38.6799 11.0181 40.7822 12.2609 43.11 12.7624" fill="#00F2EA" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.118 9.21909C35.3727 7.22207 34.4114 4.65954 34.4125 2.00732H32.2941C32.5684 3.47326 33.1373 4.86827 33.9665 6.10789C34.7957 7.34751 35.8678 8.40594 37.118 9.21909V9.21909ZM17.5539 24.7925C15.7917 24.7946 14.1023 25.4955 12.8562 26.7416C11.6102 27.9876 10.9093 29.677 10.9072 31.4392C10.9084 32.6514 11.2408 33.8403 11.8686 34.8773C12.4964 35.9142 13.3956 36.7599 14.4691 37.323C13.6517 36.1958 13.2116 34.839 13.2115 33.4467C13.2132 31.6843 13.914 29.9946 15.1601 28.7483C16.4062 27.502 18.0958 26.8009 19.8582 26.7989C20.5431 26.7989 21.1994 26.9121 21.8194 27.1067V19.0341C21.1697 18.9421 20.5144 18.8943 19.8582 18.8912C19.7427 18.8912 19.6295 18.8978 19.5152 18.9V25.1004C18.8809 24.8985 18.2195 24.7947 17.5539 24.7925" fill="#FF004F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.1092 12.7623V18.9077C39.0086 18.9077 35.2103 17.5962 32.1079 15.37V31.4393C32.1079 39.4645 25.58 45.9936 17.5547 45.9936C14.4534 45.9936 11.5775 45.0152 9.21387 43.3552C10.5728 44.8206 12.2197 45.9896 14.0515 46.7889C15.8833 47.5881 17.8604 48.0004 19.8589 47.9999C27.8842 47.9999 34.4133 41.4709 34.4133 33.4467V17.3774C37.6182 19.682 41.467 20.9197 45.4145 20.9151V13.0064C44.623 13.0064 43.8534 12.9206 43.1092 12.7612" fill="#FF004F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.1079 31.4392V15.37C35.3127 17.6748 39.1616 18.9125 43.1092 18.9077V12.7623C40.7817 12.2603 38.6797 11.0171 37.1188 9.21909C35.8686 8.40594 34.7964 7.34751 33.9672 6.10789C33.1381 4.86827 32.5691 3.47326 32.2948 2.00732H26.5056L26.4935 33.6962C26.3605 37.2449 23.4395 40.0934 19.8589 40.0934C18.8054 40.0923 17.7673 39.8404 16.8304 39.3587C15.8936 38.877 15.0848 38.1792 14.471 37.323C13.3973 36.7601 12.4978 35.9145 11.8698 34.8775C11.2418 33.8405 10.9092 32.6516 10.908 31.4392C10.91 29.677 11.6109 27.9876 12.857 26.7416C14.103 25.4955 15.7925 24.7946 17.5547 24.7925C18.2385 24.7925 18.8948 24.9047 19.5159 25.1004V18.9C11.6489 19.0847 5.30566 25.5357 5.30566 33.4467C5.30566 37.2724 6.79199 40.7552 9.21387 43.3562C11.6554 45.075 14.5689 45.9962 17.5547 45.9936C25.58 45.9936 32.1079 39.4645 32.1079 31.4392" fill="white" />
                            </svg>
                        </span>
                    </a>
                    <a
                        href={user?.socialMedia !== undefined ? user.socialMedia.linkedInUsrl : "https://www.linkedin.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="socialbtn text-[#0072b1]">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                        </span>
                    </a>
                </div>
                <div className="p-7 rounded-2xl mt-7 bg-[#1D1D1D]">
                    <div className="flex py-2.5 border-b border-[#3D3A3A]">
                        <span className="flex-shrink-0 socialbtn bg-black text-[#E93B81] shadow-md">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                            </svg>
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-[#A6A6A6]">Teléfono</p>
                            <p className="text-white break-all">
                                <a className="hover:text-[#FA5252] duration-300 transition" href={`tel:${user.personalPhone}`}>{user.personalPhone}</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#3D3A3A]">
                        <span className="flex-shrink-0 socialbtn bg-black text-[#6AB5B9]  shadow-md">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                            </svg>
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-[#A6A6A6]">Location</p>
                            <p className="text-white break-all">{user.address.locality + ", " + user.address.province + ", " + user.address.country} </p>
                        </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#3D3A3A]">
                        <span className="flex-shrink-0 socialbtn bg-black text-[#FD7590] shadow-md">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
                            </svg>
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-[#A6A6A6]">
                                Email
                            </p>
                            <p className="text-white break-all">
                                <a className="hover:text-[#FA5252] duration-300 transition" href={`mailto:${user.email}`}>{user.email}</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#3D3A3A]">
                        <span className="flex-shrink-0 socialbtn bg-black text-[#C17CEB] shadow-md">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                            </svg>
                        </span>
                        <div className="text-left ml-2.5"><p className="text-xs text-[#A6A6A6]">Fecha de Nacimiento</p>
                            <p className="text-white break-all">{user.birth}</p>
                        </div>
                    </div>
                    <div className="flex py-2.5 " >
                        <span className="flex-shrink-0 socialbtn bg-black text-[#E93B81] shadow-md undefined cursor-pointer " onClick={() => saveContact(user)}>
                            <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="1em" width="1em" viewBox="0 0 256 256" enable-background="new 0 0 256 256" >
                                <g><g><g>
                                    <path d="M21.7,39.9c-4.7,1.2-8.4,4.4-10.5,9.1L10,51.5v76.4v76.4l1.3,2.9c1.6,3.5,4.4,6.2,8,7.9c2.5,1.2,3,1.2,11.2,1.4l8.6,0.2l0.3-2.2c0.7-4.8,4.2-9.4,8.5-11.5c3-1.4,9.1-1.4,12.2,0c4.4,2,7.9,6.7,8.5,11.4l0.3,2.1H128h58.9l0.6-2.8c2.1-10.9,15-15.7,23.6-8.8c2.9,2.3,4.6,5.1,5.3,8.8l0.6,2.8l8.5-0.1l8.6-0.1l3-1.5c3.6-1.8,6-4.2,7.7-7.9l1.2-2.6v-76.4V51.5l-1.5-3.1c-1.8-3.6-4.2-6-7.9-7.7l-2.6-1.2l-105.1-0.1C46.7,39.3,23.4,39.4,21.7,39.9z M84.6,69.5c11.1,1.9,20.8,7.1,28.7,15.3c6.1,6.4,10.3,13.8,12.7,22.5c1.2,4.2,1.3,5.2,1.3,13.1c0,7.9-0.1,8.9-1.3,13.1c-2.4,8.8-6.6,16.1-12.7,22.5c-20.1,21.1-53.3,21.4-74,0.8C14.2,132,21.5,89.7,53.4,74C63,69.3,74,67.7,84.6,69.5z M228,84.8c2.4,1.8,3.2,3.3,3.2,6.2s-0.7,4.4-3.2,6.2c-1.2,1-1.6,1-41.1,1h-39.8l-1.6-1.1c-4.4-3.1-4-10,0.7-12.5c1.7-0.9,2.5-0.9,41.1-0.8C226.4,83.8,226.8,83.8,228,84.8z M228,114.3c2.4,1.8,3.2,3.3,3.2,6.2c0,2.9-0.7,4.4-3.2,6.2c-1.2,1-1.6,1-41.1,1h-39.9l-1.6-1.2c-4.3-3.3-3.8-9.9,1-12.5c1.5-0.8,3.3-0.8,41-0.7C226.3,113.3,226.8,113.3,228,114.3z M227.3,143.6c2.4,1.3,3.4,3,3.6,5.7c0.3,3.2-0.8,5.4-3.4,6.9l-1.9,1.2h-38.9h-38.9l-1.9-1.2c-4.7-2.7-4.7-9.7,0-12.5l1.9-1.2h39C225.1,142.7,225.6,142.7,227.3,143.6z" /><path fill="#000000" d="M70.9,84.7c-5.9,1.3-11.3,5.1-13.6,9.4c-1.4,2.9-2.7,8.1-3,13c-0.9,12,3,23.5,10.6,31.3l2.4,2.4l-1.1,1.9c-3.4,5.9-5.4,7.3-13.2,8.9c-3.2,0.6-6.5,1.4-7.3,1.8l-1.5,0.6l3.9,2.9c14.7,11,33.3,12.7,49.4,4.4c3.5-1.8,10.2-6.6,10.5-7.5c0.1-0.4-2.1-1-9.1-2.4c-2.6-0.6-5.1-1.3-6-2c-2-1.3-4.5-4.3-5.8-6.9l-0.9-1.8l1.6-1.4c4.2-3.7,8.9-12.5,10.3-19.3c1.8-8.4,1-18.9-1.7-25C92.7,86.9,81.6,82.4,70.9,84.7z" /></g></g></g>
                            </svg>
                        </span>
                        <div className="text-left ml-2.5 undefined cursor-pointer" onClick={() => saveContact(user)}>
                            <p className="text-xs text-[#A6A6A6]">{"Vcard"}</p>
                            <p className="text-white break-all">{"Guardar contacto"}</p>
                        </div>
                    </div>
                </div>
                
                <div
                    onClick={() => window.open(user.accountImg.downloadFile)}
                    className="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6 cursor-pointer"
                >
                    <img src="asset/icons/descarga-st.png" alt="icon" className="mr-2" />
                    Descargar CV
                </div>
            </div>
        </div>
    )
}

export default ProfileSection