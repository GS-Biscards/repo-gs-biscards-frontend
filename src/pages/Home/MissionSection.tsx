import React from 'react'

type Props = {}

const MisionSection = (props: Props) => {
  return (
    <section>
      <div className="grid grid grid-cols-1 lg:grid-cols-2 " >
        <div className="relative overflow-hidden">
          <img
            src="asset/images/landing-page/mission.png"
            alt="Imagen frontal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className='p-5 lg:p-20 lg:pr-60'>
          <div className="flex flex-col h-full" >
            <div className='mb-12'>
              <h1 className="ff-arvo text-[20px] lg:text-[42px] text-[#273732]">
                Nuestra Misión: Conectar a las Personas con lo que Buscan
              </h1>

            </div>
            <div>
              <p className="ff-lato text-[16px] lg:text-[20px] text-[#515F5A]">
                En Guilsoft, nuestra misión es crear un espacio digital que facilite la conexión entre las personas y lo que están buscando.
                Ideamos una página web intuitiva y ordenada que reúne una variedad de Business Cards de comercios y profesionales que se
                aventuran en el mundo tecnológico con nuestra ayuda. Queremos simplificar y centralizar las opciones del mercado,
                todo en un ambiente completamente online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MisionSection