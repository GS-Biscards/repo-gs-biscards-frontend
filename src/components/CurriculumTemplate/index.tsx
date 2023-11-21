import React from 'react';
import NavBar from './NavBar';
import { User } from '@/models/user.model';
import ContentSection from './ContentSection';
import ProfileSection from './ProfileSection';
import Footer from './Footer';

interface Props {
  user: User
}

const CurriculumTemplate = ({ user }: Props) => {
  const [selectedComponent, setSelectedComponent] = React.useState<string>("about-me");
  const onChangeSectionComponent = (linkName: string) => {
    setSelectedComponent(linkName)
  }
  return (
    <div className="bg-homeBgCT min-h-screen -mt-200 bg-no-repeat bg-center bg-cover bg-fixed w-full lg:pt-[220px]">
      <div className="container grid grid-cols-12 md:gap-10 justify-between " >
        <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44" >
          <ProfileSection user={user} />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <NavBar onHandleChange={(linkName: string) => onChangeSectionComponent(linkName)} />
          <ContentSection
            user={user}
            selectedComponent={selectedComponent}
          />
        </div>
      </div>
      <div className='container'>
        <Footer />
      </div>
    </div>
  )
}

export default CurriculumTemplate