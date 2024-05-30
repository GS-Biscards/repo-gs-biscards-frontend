'use client'
import React from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import InputForm from '@/components/InputForm';
import TextAreaForm from '@/components/TextAreaForm';
import { convertDataToHTMLform } from '@/utils/convert.file';

type Props = {}

const ContactSection = (props: Props) => {
    const { register, getValues, reset, formState: { errors }, handleSubmit: handleSendEmail , formState} = useForm<{
        fullName: string,
        email: string,
        message: string,
    }>();

    const [disabledBtn, setDisableBtn] = React.useState(false);

    const sendEmail = async (data: any) => {
        setDisableBtn(true)
        let formData: any = {
            to_name: "GuilSoft",
            to_email: "guilsoftweb@gmail.com",
            from_name: data.fullName,
            from_email: data.email,
            from_message: data.message
        }
        const formCurrent = convertDataToHTMLform(formData)
        try {
            await emailjs.sendForm('service_e12e5im', 'template_cp2nein', formCurrent, { publicKey: 'v_jnIdNUYI08HlpHE' });
            console.log('SUCCESS!');
            reset()
        } catch (error: any) {
            console.log("ERROR");
        }
        setDisableBtn(false)
    }
    return (
        <section id='home-contact'>
            <div
                className="grid grid-cols-1 lg:grid-cols-2"
                style={{ backgroundImage: `url(asset/images/landing-page/contact-bg.png)`, backgroundSize: 'cover', backgroundPosition: 'start' }}
            >
                <div className="flex flex-col h-full w-full items-start justify-end">
                    <div>
                        <img
                            src="asset/icons/logo-contact.png"
                            alt="logo-contact/png"
                            className="w-[204px] h-[204px] object-cover"
                        />
                    </div>

                </div>
                <div className='py-20 pr-48 pl-20'>
                    <div className="bg-[#FFF] rounded-[20px] pt-20 pb-20 px-20">
                        <span className="ff-arvo text-[20px] lg:text-[42px] text-[#273732]">
                            Contacto
                        </span>
                        <form
                            id="home-contact-form"
                            className='mt-10'
                            onSubmit={handleSendEmail(sendEmail)}
                        >
                            <div className='grid grid-cols-2 gap-x-5'>
                                <InputForm
                                    id={'landing-input-field-full-name'}
                                    register={register}
                                    errors={errors}
                                    fieldName={'fullName'}
                                    label={'Nombre y Apellido'}
                                    placeholder={'Jonn Doe'}
                                    required={true}
                                />
                                <InputForm
                                    id={'landing-input-field-email'}
                                    register={register}
                                    errors={errors}
                                    fieldName={'email'}
                                    label={'Email'}
                                    placeholder={'john.doe@guilsoft.com'}
                                    required={true}
                                />
                            </div>
                            <TextAreaForm
                                id={'landing-input-field-message'}
                                register={register}
                                errors={errors}
                                fieldName={'message'}
                                label={'Mensaje'}
                                placeholder={''}
                                required={true}
                                lines={5}
                            />
                            <div className="flex flex-row w-full justify-end">
                                <input
                                    type="submit"
                                    value="Enviar"
                                    onClick={() => sendEmail(getValues())}
                                    className='w-[140px] h-[60px] rounded-lg bg-[#3B6978] ff-lato text-white text-md font-semibold transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#203F51] to-[#203F51] '
                                />
                            </div>
                        </form>
                        <div className='mt-12'>
                        <span className='ff-lato text-[16px] lg:text-[20px] text-[#515F5A]'>
                            Mas información en todas nuestras redes sociales!
                        </span>
                        </div>
                        <div className='flex flex-row gap-x-10 mt-6'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">
                                    <path id="f" d="M27.605,47.461a23.875,23.875,0,1,0-7.461,0V30.777H14.08v-6.9h6.065v-5.26c0-5.983,3.562-9.288,9.018-9.288a36.319,36.319,0,0,1,5.076.423l.238.038.031.005v5.872H31.5c-2.965,0-3.89,1.841-3.89,3.729v4.481h6.621l-1.059,6.9H27.605Z" fill="#203f51" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">

                                    <g id="Grupo_12" data-name="Grupo 12" transform="translate(0 -0.044)">
                                        <g id="Grupo_11" data-name="Grupo 11" transform="translate(0 0.4)">
                                            <path id="Trazado_6" data-name="Trazado 6" d="M31.857,47.079H15.222c-.669-.056-1.338-.133-2.009-.166C5.857,46.549,1.141,42.172.274,34.879c-.119-1-.184-2.015-.274-3.022V15.222c.056-.67.133-1.34.166-2.012C.526,5.859,4.908,1.141,12.2.274c1-.119,2.012-.184,3.018-.274H31.857c.669.056,1.337.134,2.007.166C41.216.524,45.936,4.905,46.8,12.2c.119,1,.185,2.015.275,3.022V31.857c-.056.671-.132,1.34-.166,2.012-.365,7.357-4.737,12.064-12.037,12.936-1,.12-2.013.184-3.019.274M4.157,23.457l.088,0c0,.235-.006.471,0,.706.1,3.551.052,7.114.34,10.65a7.655,7.655,0,0,0,5.434,7.165,14.706,14.706,0,0,0,4.151.688c4.624.123,9.251.159,13.876.149a65.781,65.781,0,0,0,6.808-.311c4.188-.446,6.883-2.922,7.535-7.073A46.706,46.706,0,0,0,42.8,28.4c.02-4.913.013-9.829-.149-14.738-.184-5.578-2.951-8.851-8.419-9.111-7.115-.338-14.27-.327-21.387,0-5.283.241-7.858,3.042-8.341,8.332-.32,3.506-.247,7.048-.35,10.574" transform="translate(0 -0.434)" fill="#203f51" />
                                            <path id="Trazado_7" data-name="Trazado 7" d="M97.155,85.122a12.086,12.086,0,1,1-11.994-12.14,12.055,12.055,0,0,1,11.994,12.14m-12.118,7.79a7.844,7.844,0,1,0-7.812-7.856,7.87,7.87,0,0,0,7.812,7.856" transform="translate(-61.529 -61.962)" fill="#203f51" />
                                            <path id="Trazado_8" data-name="Trazado 8" d="M214.852,57.592a2.828,2.828,0,1,1,.045-5.656,2.828,2.828,0,0,1-.045,5.656" transform="translate(-178.751 -44.219)" fill="#203f51" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">

                                    <g id="Grupo_13" data-name="Grupo 13" >
                                        <path id="Trazado_9" data-name="Trazado 9" d="M.323,46.648c.884-3.134,1.686-6.15,2.6-9.133a4.028,4.028,0,0,0-.3-3.336,23.482,23.482,0,1,1,25.7,12.294,22.963,22.963,0,0,1-16.335-2.515,1.7,1.7,0,0,0-1.418-.179c-3.153.91-6.316,1.785-9.476,2.671-.214.06-.431.111-.772.2m3.426-3.395c.433-.1.7-.155.953-.227,2.04-.575,4.085-1.137,6.116-1.743a1.8,1.8,0,0,1,1.6.219A20.67,20.67,0,0,0,26.857,44.39,21.168,21.168,0,1,0,5.533,34.654a1.576,1.576,0,0,1,.2,1.407c-.617,2.075-1.189,4.163-1.773,6.248-.071.254-.116.516-.211.946" transform="translate(0 0)" fill="#203f51" />
                                        <path id="Trazado_10" data-name="Trazado 10" d="M105.153,109.148a15.015,15.015,0,0,1-6.406-1.868A27.031,27.031,0,0,1,86.161,93.7a9.156,9.156,0,0,1-.768-5.34,6.5,6.5,0,0,1,2.516-3.8,2.015,2.015,0,0,1,2.646.129c1.3,1.244,2.576,2.524,3.83,3.82a1.6,1.6,0,0,1,0,2.235c-.489.542-1.011,1.055-1.541,1.557a1.154,1.154,0,0,0-.249,1.487,16.792,16.792,0,0,0,8.237,8.172,1.035,1.035,0,0,0,1.3-.235c.511-.522,1.025-1.041,1.557-1.542a1.589,1.589,0,0,1,2.378,0q1.838,1.793,3.632,3.632a2.048,2.048,0,0,1,.276,2.747,6.185,6.185,0,0,1-4.822,2.588" transform="translate(-73.585 -72.609)" fill="#203f51" />
                                    </g>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection