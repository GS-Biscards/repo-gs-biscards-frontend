import React from 'react';

const Footer = () => {
    return (
        <footer className="overflow-hidden rounded-b-2xl bg-[#F3F6F6] mt-16" id='st-footer'>
            <div className="container">
                <p className="ff-poppins text-center py-6 text-gray-lite ">
                    © 2023&nbsp;
                    <a
                        className="ff-poppins text-gray-lite hover:text-[#FA5252] duration-300 transition"
                        href="https://guilsoft.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        GuillSoft
                    </a>
                    &nbsp;creado por Jarod17.
                </p>
            </div>
        </footer>
    )
}

export default Footer;
