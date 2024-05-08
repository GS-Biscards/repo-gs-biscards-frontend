import React from 'react';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Contact from './Contact';
import { User } from '@/models/user.model';

interface Props {
    user: User;
    selectedComponent: any;
}

const MobileMenu = ({ user, selectedComponent }: Props) => {
    const [isMobile, setIsMobile] = React.useState<boolean>(false);
    let SectionComponent = null;

    switch (selectedComponent) {
        case 'about-me':
            SectionComponent = AboutMe;
            break;
        case 'gallery':
            SectionComponent = Gallery;
            break;
        case 'contact':
            SectionComponent = Contact;
            break;
        default:
            SectionComponent = AboutMe;
            break;
    }

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1020px)');
        setIsMobile(mediaQuery.matches);

        const handleScreenResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener('change', handleScreenResize);
        return () => {
            mediaQuery.removeEventListener('change', handleScreenResize);
        };
    }, []);

    if (isMobile) {
        return (
            <div >
                <div className="lg:rounded-2xl bg-[#111111] rounded-2xl pb-12" >
                    <div data-aos="fade" className="aos-init aos-animate" id='cvt-about-me'>
                        <AboutMe user={user} />
                    </div>
                </div>
                <div className="lg:rounded-2xl bg-[#111111] rounded-2xl mt-8" id='cvt-gallery'>
                    <div data-aos="fade" className="aos-init aos-animate">
                        <Gallery user={user} />
                    </div>
                </div>
                <div className="lg:rounded-2xl bg-[#111111] rounded-2xl" id='cvt-contact'>
                    <div data-aos="fade" className="aos-init aos-animate">
                        <Contact user={user} />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="lg:rounded-2xl bg-[#111111] " style={{ minHeight: 480 }}>
            <div data-aos="fade" className="aos-init aos-animate">
                {SectionComponent && <SectionComponent user={user} />}
            </div>
        </div>
    )
}

export default MobileMenu