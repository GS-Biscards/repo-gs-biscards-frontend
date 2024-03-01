import React from 'react';
import { User } from '@/models/user.model';
import FileSaver from "file-saver";

interface Props {
    user: User
}

const AboutMe = ({ user }: Props) => {
    const saveContact = () => {
        var file = new Blob(
            [`BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:${user.firstName} ${user.lastName} ${''}\nN;CHARSET=UTF-8:${''};${''};${''};;\nEMAIL;CHARSET=UTF-8;type=WORK,INTERNET:${user.email}\nTEL;TYPE=WORK,VOICE:${user.personalPhone}\nTEL;TYPE=WORK,VOICE:${user.workPhone}\nLABEL;CHARSET=UTF-8;TYPE=WORK:${""}\nADR;CHARSET=UTF-8;TYPE=WORK:;;;;;;\nROLE;CHARSET=UTF-8:${user.description}\nORG;CHARSET=UTF-8:${''}\nURL;type=WORK;CHARSET=UTF-8:${window.location.href}\nREV:2020-08-31T03:41:09.870Z\nEND:VCARD`],
            { type: "text/vcard;charset=utf-8" }
        );
        FileSaver.saveAs(
            file,
            `${user.firstName}_${user.lastName}.vcf`,
            true
        );
    }

    const dividirEnParrafos = (frase: string) => {
        const puntoIndex = frase.indexOf('.');

        if (puntoIndex !== -1) {
            const primerParrafo = frase.substring(0, puntoIndex + 1).trim();
            const segundoParrafo = frase.substring(puntoIndex + 1).trim();
            return [primerParrafo, segundoParrafo];
        } else {
            return [frase];
        }
    }
    return (
        <div className="pt-12 " id='st-about-me' >
            <div className="flex items-center">
                <h2 className="ff-roboto-slab after-effect mr-6">Sobre Mí</h2>
                <div className="flex-1 title-line max-w-[150px] md:max-w-[220px] lg:max-w-[300px] " />
            </div>
            <div className="grid grid-cols-12 md:gap-10 pt-[40px]" >
                <div className="col-span-12 md:col-span-4">
                    <img alt="routePath"
                        src={user.accountImg.histoyImg}
                        width="300"
                        height="400"
                        decoding="async"
                        data-nimg="1"
                        className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0" loading="lazy" style={{ color: "transparent" }} />
                </div>
                <div className="col-span-12 md:col-span-8 ">
                    <div className=" md:mr-12 xl:mr-16">
                        <h3 className="ff-poppins text-2xl md:text-4xl  font-medium mb-2.5">¿Quien soy?</h3>
                        {
                            dividirEnParrafos(user.histoy).map((frase: string, index: number) => {
                                return (
                                    <p key={`text-p-${index}`} className="text-gray-lite leading-7 pb-2">
                                        {frase}
                                    </p>
                                )
                            })
                        }

                    </div>
                    <div>
                        <h3 className="ff-poppins text-2xl md:text-4xl font-medium my-5 ">Información Personal</h3>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex">
                                <span className="text-oriange shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                    </svg>
                                </span>
                                <div className="space-y-1">
                                    <p className="text-xs text-gray-lite ">Teléfono</p>
                                    <h6 className="ff-poppins font-medium ">
                                        <a className="hover:text-[#FA5252] duration-300 transition" href="tel:+1234567890">{user.personalPhone}</a>
                                    </h6>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-oriange-lite shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                    </svg>
                                </span>
                                <div className="space-y-1">
                                    <p className="ff-poppins text-xs text-gray-lite ">Ubicación</p>
                                    <h6 className="font-medium">{user.address.locality + ", " + user.address.country}</h6>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-green shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
                                    </svg>
                                </span>
                                <div className="space-y-1">
                                    <p className="ff-poppins text-xs text-gray-lite ">Email</p>
                                    <h6 className="font-medium">
                                        <a
                                            className="hover:text-[#FA5252] duration-300 transition"
                                            href="mailto:ibthemes21@gmail.com">
                                            {user.email}
                                        </a>
                                    </h6>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-color-50 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                                    </svg>
                                </span>
                                <div className="space-y-1">
                                    <p className="ff-poppins text-xs text-gray-lite ">Fecha Nacimiento</p>
                                    <h6 className="ff-poppins font-medium">{user.birth}</h6>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-color-50 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text- cursor-pointer" onClick={() => saveContact()}>
                                    <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="1em" width="1em" viewBox="0 0 256 256" enable-background="new 0 0 256 256" >
                                        <g><g><g>
                                            <path d="M21.7,39.9c-4.7,1.2-8.4,4.4-10.5,9.1L10,51.5v76.4v76.4l1.3,2.9c1.6,3.5,4.4,6.2,8,7.9c2.5,1.2,3,1.2,11.2,1.4l8.6,0.2l0.3-2.2c0.7-4.8,4.2-9.4,8.5-11.5c3-1.4,9.1-1.4,12.2,0c4.4,2,7.9,6.7,8.5,11.4l0.3,2.1H128h58.9l0.6-2.8c2.1-10.9,15-15.7,23.6-8.8c2.9,2.3,4.6,5.1,5.3,8.8l0.6,2.8l8.5-0.1l8.6-0.1l3-1.5c3.6-1.8,6-4.2,7.7-7.9l1.2-2.6v-76.4V51.5l-1.5-3.1c-1.8-3.6-4.2-6-7.9-7.7l-2.6-1.2l-105.1-0.1C46.7,39.3,23.4,39.4,21.7,39.9z M84.6,69.5c11.1,1.9,20.8,7.1,28.7,15.3c6.1,6.4,10.3,13.8,12.7,22.5c1.2,4.2,1.3,5.2,1.3,13.1c0,7.9-0.1,8.9-1.3,13.1c-2.4,8.8-6.6,16.1-12.7,22.5c-20.1,21.1-53.3,21.4-74,0.8C14.2,132,21.5,89.7,53.4,74C63,69.3,74,67.7,84.6,69.5z M228,84.8c2.4,1.8,3.2,3.3,3.2,6.2s-0.7,4.4-3.2,6.2c-1.2,1-1.6,1-41.1,1h-39.8l-1.6-1.1c-4.4-3.1-4-10,0.7-12.5c1.7-0.9,2.5-0.9,41.1-0.8C226.4,83.8,226.8,83.8,228,84.8z M228,114.3c2.4,1.8,3.2,3.3,3.2,6.2c0,2.9-0.7,4.4-3.2,6.2c-1.2,1-1.6,1-41.1,1h-39.9l-1.6-1.2c-4.3-3.3-3.8-9.9,1-12.5c1.5-0.8,3.3-0.8,41-0.7C226.3,113.3,226.8,113.3,228,114.3z M227.3,143.6c2.4,1.3,3.4,3,3.6,5.7c0.3,3.2-0.8,5.4-3.4,6.9l-1.9,1.2h-38.9h-38.9l-1.9-1.2c-4.7-2.7-4.7-9.7,0-12.5l1.9-1.2h39C225.1,142.7,225.6,142.7,227.3,143.6z" /><path fill="#000000" d="M70.9,84.7c-5.9,1.3-11.3,5.1-13.6,9.4c-1.4,2.9-2.7,8.1-3,13c-0.9,12,3,23.5,10.6,31.3l2.4,2.4l-1.1,1.9c-3.4,5.9-5.4,7.3-13.2,8.9c-3.2,0.6-6.5,1.4-7.3,1.8l-1.5,0.6l3.9,2.9c14.7,11,33.3,12.7,49.4,4.4c3.5-1.8,10.2-6.6,10.5-7.5c0.1-0.4-2.1-1-9.1-2.4c-2.6-0.6-5.1-1.3-6-2c-2-1.3-4.5-4.3-5.8-6.9l-0.9-1.8l1.6-1.4c4.2-3.7,8.9-12.5,10.3-19.3c1.8-8.4,1-18.9-1.7-25C92.7,86.9,81.6,82.4,70.9,84.7z" />
                                        </g></g></g>
                                    </svg>
                                </span>
                                <div className="space-y-1 cursor-pointer" onClick={() => saveContact()}>
                                    <p className="ff-poppins text-xs text-gray-lite ">Vcard</p>
                                    <h6 className="ff-poppins font-medium">{"Guardar contacto"}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
