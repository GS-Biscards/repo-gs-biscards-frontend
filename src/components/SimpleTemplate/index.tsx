"use client"
import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import { User } from '@/models/user.model';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Footer from './Footer';
import QRCode from 'qrcode';
import QRModal from '../QRModal';
import Contact from './Contact';

interface Props {
    user: User
}

const SimpleTemplate = ({ user }: Props) => {
    const [qrModal, setQrModal] = React.useState<boolean>(false);
    const [qrcodeImg, setQRCodeImg] = React.useState<any>("");


    const openQRModal = () => {
        console.log("window.location.href", window.location.href);
        QRCode.toDataURL(window.location.href).then(setQRCodeImg);
        setQrModal(true)
    }
    const closeQRModal = () => {
        setQrModal(false)
    }
    return (
        <>
            <div className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
                <Navbar
                    handleQrModal={() => openQRModal()}
                />
                <Profile user={user} />
            </div>
            <div className="bg-homeBg bg-no-repeat bg-center bg-cover bg-fixed w-full md:pb-16 ">
                <div className="container rounded-2xl bg-white px-4 sm:px-5 md:px-10 lg:px-20">
                    <div data-aos="fade" className="aos-init aos-animate">
                        <AboutMe user={user} />
                        <Gallery user={user} />
                        <Contact user={user} />
                        <Footer />
                    </div>
                </div>
            </div>
            <QRModal
                showModal={qrModal}
                qrcode={qrcodeImg}
                close={closeQRModal}
            />
        </>
    )
}

export default SimpleTemplate