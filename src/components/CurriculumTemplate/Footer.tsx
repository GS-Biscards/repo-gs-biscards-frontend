import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="overflow-hidden rounded-2xl bg-slate-50 dark:bg-black">
            <div className="container">
                <p className="text-center py-6 text-white">
                    © 2023&nbsp;
                    <a className="hover:text-[#FA5252] duration-300 transition" href="" target="_blank" rel="noopener noreferrer">
                        GuillSoft
                    </a>&nbsp;
                    creado por Jarod17.
                </p>
            </div>
        </footer>
    )
}

export default Footer