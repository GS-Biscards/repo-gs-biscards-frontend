"use client"
import React,{MouseEvent, useState} from "react"
import Link from "next/link";

const navItems = [{ name: "Profesiones",href:"/professions"},{ name: "Servicios",href:"/services" },{name: "Comercios",href:"/commerces"}]
interface props {
    index:number
}

const Sidenav:React.FC<props>=({index})=>{
    const [selectedItem,setSelectedItem]=useState(index)
    const onClick=(key:number)=>(event: MouseEvent<HTMLDivElement>) =>{
        setSelectedItem(key)
    }
    return (
        <div className="w-1/6 flex-shrink-0">
            <div className="items-center justify-center p-2 w-full">
                {navItems.map((item,index) => (
                    <div key={index} id={index.toString()} className={`font-semibold w-full p-2 mt-3 rounded-sm text-center ${selectedItem === index? "act bg-white text-[#203F51]":"dis text-white"} 
                    hover:bg-white hover:text-[#203F51]`}onClick={onClick(index)}>
                    <Link href={item.href}> {item.name} </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidenav

