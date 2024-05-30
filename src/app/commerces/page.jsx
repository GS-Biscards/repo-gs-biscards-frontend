"use client"
import React from 'react'
import Sidenav from '@/components/ProfessionForm/sidenav'
import ManageProfessions from '@/components/ProfessionForm/manage-professions'
import NavBar from '@/components/ProfessionForm/navbar'
import { ProfessionType } from '@/components/ProfessionForm/interface'

export default function ProfessionForm() {
    return (
        <div className="flex flex-col h-screen w-screen">
            <NavBar/>
            <div className="flex flex-row h-full bg-gradient-to-b from-[#203f51] to-[#82aaaa] p-2">
                <Sidenav index={2}/>
                <ManageProfessions type={ProfessionType.COMMERCE}/>
                <div className="w-1/6"></div>
            </div>
        </div>   
    )
}