"use client";
import React from "react";
import { User } from "@/models/user.model";
import NavBar from "./NavBar";
import Footer from "./Footer";
import QRCode from "qrcode";
import QRModal from "@/components/QRModal";
import { motion, useScroll } from "framer-motion";
import Profile from "./Profile";
import Image from "next/image";
import Home from "./Home";
import Contact from "./Contact";

interface Props {
  user?: User;
}

const FolioxTemplate = ({ user }: Props) => {
  const { scrollYProgress } = useScroll();
  const [selectedComponent, setSelectedComponent] =
    React.useState<string>("about-me");
  const [qrModal, setQrModal] = React.useState<boolean>(false);
  const [qrcodeImg, setQRCodeImg] = React.useState<any>("");

  const onChangeSectionComponent = (linkName: string) => {
    setSelectedComponent(linkName);
  };
  const openQRModal = () => {
    QRCode.toDataURL(window.location.href).then(setQRCodeImg);
    setQrModal(true);
  };
  const closeQRModal = () => {
    setQrModal(false);
  };
  return (
    <motion.div className="bg-foliox box-border w-full min-h-[100vh] clear-both float-left relative">
      {/* <Header handleQrModal={() => openQRModal()}/> */}
      <div className="">
        <div className="">
          <NavBar
            onHandleChange={(linkName: string) =>
              onChangeSectionComponent(linkName)
            }
            handleQrModal={() => openQRModal()}
          />
          <div
            className="foliox_tm_section w-full h-auto clear-left clear-right float-left" id="home"
          >
            <Home user={user}/>
          </div>
        </div>
        <div className="foliox_tm_section w-full h-auto clear-both float-left" id="about">
          <Profile user={user} />
        </div>
        <div className="foliox_tm_section w-full h-auto clear-both float-left" id="contact">
          <Contact/>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
      <QRModal showModal={qrModal} qrcode={qrcodeImg} close={closeQRModal} />
    </motion.div>
  );
};

export default FolioxTemplate;
