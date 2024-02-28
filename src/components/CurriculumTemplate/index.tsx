import React from 'react';
import { User } from '@/models/user.model';
import Header from './Header';
import ProfileSection from './ProfileSection';
import NavBar from './NavBar';
import ContentSection from './ContentSection';
import Footer from './Footer';
import QRCode from 'qrcode';
import QRModal from '../QRModal';

interface Props {
  user: User
}

const CurriculumTemplate = ({ user }: Props) => {
  const [selectedComponent, setSelectedComponent] = React.useState<string>("about-me");
  const [qrModal, setQrModal] = React.useState<boolean>(false);
  const [qrcodeImg, setQRCodeImg] = React.useState<any>("");

  const onChangeSectionComponent = (linkName: string) => {
    setSelectedComponent(linkName)
  }
  const openQRModal = () => {
    QRCode.toDataURL(window.location.href).then(setQRCodeImg);
    setQrModal(true)
  }
  const closeQRModal = () => {
    setQrModal(false)
  }
  return (

    <div className="bg-homeBgCT min-h-screen -mt-200 bg-no-repeat bg-center bg-cover bg-fixed w-full lg:pt-[220px]">
      <Header handleQrModal={() => openQRModal()}/>
      <div className="container grid grid-cols-12 md:gap-10 justify-between " >
        <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44" >
          <ProfileSection user={user} />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <NavBar
            onHandleChange={(linkName: string) => onChangeSectionComponent(linkName)}
            handleQrModal={() => openQRModal()}
          />
          <ContentSection
            user={user}
            selectedComponent={selectedComponent}
          />
        </div>
      </div>
      <div className='container'>
        <Footer />
      </div>
      <QRModal
        showModal={qrModal}
        qrcode={qrcodeImg}
        close={closeQRModal}
      />
    </div>
  )
}

export default CurriculumTemplate;
