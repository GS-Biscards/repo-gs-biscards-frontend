import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full h-auto clear-both float-left">
            <div className="container-foliox w-full h-auto clear-both float-left text-center py-[100px] px-0">
                <p className="text-center py-6 text-gray-500 ff-poppins">
                    © 2023&nbsp;
                    <a
                        className="hover:text-extra-color duration-300 transition"
                        href="https://guilsoft.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GuilSoft
                    </a>&nbsp;
                    creado por Mica.
                </p>
            </div>
        </footer>
    )
}

export default Footer