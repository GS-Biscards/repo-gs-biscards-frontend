import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="overflow-hidden rounded-b-2xl bg-slate-50 mt-16" id='st-footer'>
            <div className="container">
                <p className="text-center py-6 text-gray-lite dark:text-color-910">
                    © 2023&nbsp;
                    <a
                        className="hover:text-[#FA5252] duration-300 transition"
                        href="https://themeforest.net/user/ib-themes" target="_blank" rel="noopener noreferrer">
                        GuillSoft
                    </a>&nbsp;creado por Jarod17.
                </p>
            </div>
        </footer>
    )
}

export default Footer