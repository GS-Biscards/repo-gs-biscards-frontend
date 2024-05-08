import React from 'react';

const Footer = () => {
    return (
        <footer className="overflow-hidden rounded-2xl bg-[#111111]">
            <div className="container">
                <p className="text-center py-6 text-gray-500">
                    © 2023&nbsp;
                    <a
                        className="hover:text-[#FA5252] duration-300 transition"
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