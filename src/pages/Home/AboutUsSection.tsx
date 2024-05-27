import React from 'react'

type Props = {}

const AboutUsSection = (props: Props) => {
    return (
        <section id='home-about-us'>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-5 lg:px-40 lg:py-20 bg-[#82AAAA] ">
                <div className="lg:col-span-1" >
                    <img
                        src="asset/images/landing-page/about-us.png"
                        alt="Sobre_nosotros/png"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="lg:col-span-2 lg:pl-40 ">
                    <div className="flex flex-col h-full" >
                        <div className='mb-12'>
                            <h1 className="ff-arvo text-[20px] lg:text-[42px] text-[#273732]">
                                ¿Quienes somos?
                                </h1>
                        </div>
                        <div className='mb-12'>
                            <p className="ff-lato text-[16px] lg:text-[20px] text-[#515F5A] mb-10">
                                Guilsoft nace de la unión de los nombres de Guillermo Carrillo y Sofia Salas Soler,
                                socios fundadores de la empresa. La inspiración surge al detectar las disparidades
                                entre los negocios en línea y fuera de ella. Con un equipo experto en diseño, programación y ventas,
                                lo que comenzó como una idea se convirtió en una red fiable, ofreciendo atención de calidad y soluciones
                                innovadoras.
                            </p>
                        </div>

                        <button className='w-[256px] h-[56px] rounded-[28px] bg-[#3B6978] ff-lato text-white text-md font-semibold'>
                            Mas información
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection