import React from 'react';
import { User } from '@/models/user.model';

interface Props {
    user: User;
}

const Contact = ({ user }: Props) => {
    return (
        <div className="pt-12 " id='st-contact'>
            <div className="flex items-center">
                <h2 className="ff-roboto-slab after-effect mr-6">
                    Contactos
                </h2>
                <div className="flex-1 title-line max-w-[150px] md:max-w-[220px] lg:max-w-[300px] " />
            </div>
            <div className="lg:flex gap-x-20 pt-[40px] ">
                <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                    <div className="mb-16 md:p-[48px] p-4 bg-[#F3F6F6] rounded-xl mb-[30px] md:mb-[60px]">
                        <h3 className="ff-poppins text-4xl ">
                            <span className="text-gray-lite text-2xl md:text-4xl ">
                                Quiero más información
                            </span>
                        </h3>
                        <form id="myForm">
                            <div className="relative z-0 w-full mt-[40px] mb-8 group">
                                <input
                                    type="text"
                                    name="name"
                                    className="ff-poppins block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                                    placeholder=" "
                                    required />
                                <label
                                    htmlFor="name"
                                    className="ff-poppins peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                >
                                    Nombre *
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="email"
                                    name="user_email"
                                    className="ff-poppins block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                                    placeholder=" "
                                    id="user_email"
                                    required
                                />
                                <label
                                    htmlFor="user_email"
                                    className="ff-poppins peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                >
                                    Email *
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="message"
                                    className="block ff-poppins autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                                    placeholder=" "
                                    id="message"
                                    required
                                />
                                <label
                                    htmlFor="message"
                                    className="ff-poppins peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                                    Mensaje *
                                </label>
                            </div>
                            <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                                <input
                                    type="submit"
                                    className="ff-poppins transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white "
                                    value="Enviar"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6">
                    <div className="col-span-12 md:col-span-4">
                        <img alt="routePath" src={user.accountImg.contactImg} width="300" height="400" decoding="async" data-nimg="1" className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0" loading="lazy" style={{ color: "transparent" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
