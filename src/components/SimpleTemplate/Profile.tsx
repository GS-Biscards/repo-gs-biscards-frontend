import React from 'react';
import { User } from '@/models/user.model';

interface Props {
    user: User
}

const Profile = ({ user }: Props) => {
    return (
        <div
            className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
            data-aos="fade"
            id='st-profile'
        >
            <img
                alt="hero image"
                src={user.accountImg.profileImg}
                width="250"
                height="250"
                decoding="async"
                data-nimg="1"
                className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
                style={{ color: "transparent" }} />
            <h3 className="ff-poppins mt-6 mb-1 text-5xl font-semibold">{user.firstName + " " + user.lastName}</h3>
            <p className="ff-poppins mb-4 text-[#7B7B7B]">{user.description}</p>
            <div className="flex space-x-3">
                {
                    user?.socialMedia !== undefined && user.socialMedia.instagramUrl !== "" ?
                        <a
                            href={user.socialMedia.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="socialbtn">
                                <img src="asset/icons/ig-icon.svg" alt="icon" style={{ height: "1em", width: "1em" }} />
                            </span>
                        </a> :
                        <span className="socialbtn-block text-gray-400 cursor-not-allowed">
                            <img src="asset/icons/ig-block-icon.svg" alt="icon" style={{ height: "1em", width: "1em" }} />
                        </span>
                }
                {
                    user?.socialMedia !== undefined && user.socialMedia.facebookUrl !== "" ?
                        <a
                            href={user.socialMedia.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="socialbtn text-[#1773EA]">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                </svg>
                            </span>
                        </a> :
                        <span className="socialbtn-block text-gray-400 cursor-not-allowed">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                            </svg>
                        </span>
                }
                {
                    user?.socialMedia !== undefined && user.socialMedia.twitterUrl !== "" ?

                        <a href={user?.socialMedia !== undefined ? user.socialMedia.twitterUrl : "https://twitter.com/"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="socialbtn text-[#1C9CEA]">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                            </span>
                        </a> :
                        <span className="socialbtn-block text-gray-400 cursor-not-allowed">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                        </span>
                }
                {
                    user?.socialMedia !== undefined && user.socialMedia.tikTokUrl !== "" ?
                        <a
                            href={user.socialMedia.tikTokUrl}
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
                        </a> :
                        <span className="socialbtn-block text-gray-400 cursor-not-allowed">
                            <svg height="1em" width="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5156 18.9001V17.0279C18.8658 16.9359 18.2106 16.8881 17.5543 16.885C9.52906 16.885 3 23.4152 3 31.4405C3 36.3634 5.46035 40.7212 9.21355 43.3564C6.70047 40.6688 5.30332 37.1262 5.30535 33.4468C5.30535 25.5358 11.6486 19.0848 19.5156 18.9001" fill="#00F2EA" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8586 40.0934C23.4392 40.0934 26.3602 37.245 26.4932 33.6952L26.5053 2.00632H32.2945C32.1709 1.34468 32.1084 0.673085 32.1076 0H24.2011L24.1879 31.69C24.056 35.2387 21.1339 38.086 17.5544 38.086C16.4797 38.0864 15.4212 37.8246 14.4707 37.3231C15.0844 38.1793 15.8932 38.8772 16.8301 39.3589C17.767 39.8407 18.8051 40.0924 19.8586 40.0934V40.0934ZM43.1089 12.7624V11.0012C40.9813 11.0032 38.8994 10.3843 37.1185 9.22028C38.6799 11.0181 40.7822 12.2609 43.11 12.7624" fill="#00F2EA" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.118 9.21909C35.3727 7.22207 34.4114 4.65954 34.4125 2.00732H32.2941C32.5684 3.47326 33.1373 4.86827 33.9665 6.10789C34.7957 7.34751 35.8678 8.40594 37.118 9.21909V9.21909ZM17.5539 24.7925C15.7917 24.7946 14.1023 25.4955 12.8562 26.7416C11.6102 27.9876 10.9093 29.677 10.9072 31.4392C10.9084 32.6514 11.2408 33.8403 11.8686 34.8773C12.4964 35.9142 13.3956 36.7599 14.4691 37.323C13.6517 36.1958 13.2116 34.839 13.2115 33.4467C13.2132 31.6843 13.914 29.9946 15.1601 28.7483C16.4062 27.502 18.0958 26.8009 19.8582 26.7989C20.5431 26.7989 21.1994 26.9121 21.8194 27.1067V19.0341C21.1697 18.9421 20.5144 18.8943 19.8582 18.8912C19.7427 18.8912 19.6295 18.8978 19.5152 18.9V25.1004C18.8809 24.8985 18.2195 24.7947 17.5539 24.7925" fill="#FF004F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.1092 12.7623V18.9077C39.0086 18.9077 35.2103 17.5962 32.1079 15.37V31.4393C32.1079 39.4645 25.58 45.9936 17.5547 45.9936C14.4534 45.9936 11.5775 45.0152 9.21387 43.3552C10.5728 44.8206 12.2197 45.9896 14.0515 46.7889C15.8833 47.5881 17.8604 48.0004 19.8589 47.9999C27.8842 47.9999 34.4133 41.4709 34.4133 33.4467V17.3774C37.6182 19.682 41.467 20.9197 45.4145 20.9151V13.0064C44.623 13.0064 43.8534 12.9206 43.1092 12.7612" fill="#FF004F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.1079 31.4392V15.37C35.3127 17.6748 39.1616 18.9125 43.1092 18.9077V12.7623C40.7817 12.2603 38.6797 11.0171 37.1188 9.21909C35.8686 8.40594 34.7964 7.34751 33.9672 6.10789C33.1381 4.86827 32.5691 3.47326 32.2948 2.00732H26.5056L26.4935 33.6962C26.3605 37.2449 23.4395 40.0934 19.8589 40.0934C18.8054 40.0923 17.7673 39.8404 16.8304 39.3587C15.8936 38.877 15.0848 38.1792 14.471 37.323C13.3973 36.7601 12.4978 35.9145 11.8698 34.8775C11.2418 33.8405 10.9092 32.6516 10.908 31.4392C10.91 29.677 11.6109 27.9876 12.857 26.7416C14.103 25.4955 15.7925 24.7946 17.5547 24.7925C18.2385 24.7925 18.8948 24.9047 19.5159 25.1004V18.9C11.6489 19.0847 5.30566 25.5357 5.30566 33.4467C5.30566 37.2724 6.79199 40.7552 9.21387 43.3562C11.6554 45.075 14.5689 45.9962 17.5547 45.9936C25.58 45.9936 32.1079 39.4645 32.1079 31.4392" fill="white" />
                            </svg>
                        </span>
                }
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
            <div
                onClick={() => window.open(user.accountImg.downloadFile)}
                className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6 cursor-pointer"
            >
                <img src="asset/icons/descarga-st.png" alt="icon" className="mr-2" />Descargar CV</div>
        </div>
    )
}

export default Profile;
