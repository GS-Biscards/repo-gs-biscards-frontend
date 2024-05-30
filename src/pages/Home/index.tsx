import React from 'react';
import FrontSection from './FrontSection';
import AboutUsSection from './AboutUsSection';
import MisionSection from './MissionSection';
import ServicesSection from './ServicesSection';
import ProductsSections from './ProductsSections';
import ContactSection from './ContactSection';
import CoverSection from './CoverSection';

const HomePage = () => {
    return (
        <div>
            <CoverSection />
            <AboutUsSection />
            <MisionSection />
            <ServicesSection />
            <ProductsSections />
            <ContactSection />
        </div>
    )
}

export default HomePage;
