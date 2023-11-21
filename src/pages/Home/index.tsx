import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" className="mb-8 h-40" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">
                El sitio está en mantenimiento.
            </h1>
            <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
                Estamos trabajando para mejorar la experiencia del usuario. ¡Disculpe las molestias!
            </p>
            <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded">Contactanos</a>
                <a href="#" className="border-2 border-white-800 text-white font-bold py-3 px-6 rounded">Recargar</a>
            </div>
        </div>
    )
}

export default HomePage