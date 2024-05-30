"use client"
import React,{MouseEvent} from "react"
import Image from "next/image"


const NavBar:React.FC=()=>{
    return (
        <div className="flex flex-row items-center justify-center bg-[#203f51]">
            <div className="pl-18 pt-4 ps-4">
                <Image src="/asset/icons/logo-blanco2.png" alt="Guilsoft Logo" height={100} width={278} priority/>
            </div>
        </div>
    )
}

export default NavBar