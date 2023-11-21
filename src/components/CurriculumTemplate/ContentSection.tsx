import React from 'react';
import { User } from '@/models/user.model';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Contact from './Contact';

interface Props {
    user: User;
    selectedComponent: any;
}

const ContentSection = ({ user, selectedComponent }: Props) => {

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

    return (
        <div className="lg:rounded-2xl bg-[#111111] " style={{ minHeight: 480}}>
            <div data-aos="fade" className="aos-init aos-animate">
                {SectionComponent && <SectionComponent user={user} />}
            </div>
        </div>
    )
}

export default ContentSection