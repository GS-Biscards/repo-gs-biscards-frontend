"use client"
import React from 'react';
import Navbar from './Navbar';
import About from './AboutMe';
import Footer from './Footer';
import Profile from './Profile';
import Contact from './Contact';
import Gallery from './Gallery';
import { User } from '@/models/user.model';

interface Props {
    user: User
}

const SimpleTemplate = ({ user }: Props) => {
    return (
        <>
            <div className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
                <Navbar />
                <Profile user={user} />
            </div>
            <div className="bg-homeBg bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
                <div className="container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 lg:px-20">
                    <div data-aos="fade" className="aos-init aos-animate">
                        <About user={user} />
                        <Gallery user={user} />
                        <Contact user={user} />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimpleTemplate