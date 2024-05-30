"use client"
import React from 'react';

interface Props {
  setShowSearchSection?: any;
  toggleSection?: any;
  slideNext?: any;
};

const FrontSection = ({ setShowSearchSection, toggleSection, slideNext }: Props) => {

  const handleKeyPress = () => {
    slideNext()

  };
  return (
    <div className="grid grid grid-cols-1 lg:grid-cols-2 " style={{ height: `calc(100vh - 72px)`}}>
      <div className='p-5 lg:p-40 lg:pt-28'>
        <div className="flex flex-col h-full justify-between" >
          <div>
            <h1 className="ff-arvo text-[32px] lg:text-[64px] text-[#273732] mb-2">Guilsoft</h1>
            <h1 className="ff-arvo text-[32px] lg:text-[64px] text-[#273732] mb-2">Business Card</h1>
          </div>
          <div>
            <p className="ff-lato text-[16px] lg:text-[20px] text-[#515F5A] mb-10">
              ¡Bienvenido a Guilsoft! Somos una empresa emergente de tecnología dedicada a simplificar tu presencia en línea.
              Con nuestras innovadoras Business Cards, creamos una conexión directa entretu negocio y tus clientes.
            </p>
          </div>
          <button className='w-[256px] h-[56px] rounded-[28px] bg-[#3B6978] ff-lato text-white text-md font-semibold'>
            Quiero mi Business Card
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <img
          src="asset/images/landing-page/mask.png"
          alt="Imagen frontal"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="absolute bottom-10 px-5 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mb-8">

        <div
          className="cursor-pointer flex flex-row items-center gap-x-8 w-full h-[56px] lg:w-[620px] lg:h-[71px] pl-16 pr-4 rounded-[8px] border border-[#00000078] bg-[#CDCDCD] shadow-lg p-8 focus:outline-none focus:ring-0 focus:border-[2px] focus:border-[#3B6978] peer ff-lato text-[25px] text-[#55595A] text-bold placeholder-[#55595A] placeholder-bold"
          onClick={() => handleKeyPress()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 38.912 38.923" strokeWidth="0">
            <path id="Trazado_5" data-name="Trazado 5" d="M38.383,33.651l-7.58-7.58a1.826,1.826,0,0,0-1.293-.537H28.272a15.809,15.809,0,1,0-2.737,2.737V29.51a1.819,1.819,0,0,0,.537,1.293l7.573,7.582a1.818,1.818,0,0,0,2.57.013l.013-.013,2.148-2.148a1.834,1.834,0,0,0,.008-2.586M15.809,25.54H15.8a9.727,9.727,0,1,1,.011,0" transform="translate(0 0)" fill="#55595a" />
          </svg> 
          Buscar una Business Card
        </div>

      </div>
    </div>

  );
};

export default FrontSection;