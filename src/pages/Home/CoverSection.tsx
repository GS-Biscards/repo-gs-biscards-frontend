'use client'
import React from 'react'
import Header from './Header'
import FrontSection from './FrontSection';
import SearchUserForm from '../SearchForm';
import SwiperHome, { Slide } from '@/components/SwiperHome';
import { useSwiper } from 'swiper/react';

type Props = {}

const CoverSection = (props: Props) => {
    const [swiper, setSwiper] = React.useState<any>(null);
    const [initialSlide, setInitialSlide] = React.useState<number>(0);
    const [showSearchSection, setShowSearchSection] = React.useState<boolean>(true);


    const settings = {
        autoplay: false,
        pagination: false,
        navigation: false,
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: initialSlide,
    };


    const handleNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };
    const handleSlideChange = (index: any) => {
        // Puedes agregar lógica adicional aquí si es necesario
    };
    return (
        <div className='h-full'>
            <div className='h-[72px]'>
                <Header />
            </div>
            <SwiperHome settings={settings} onSlideChange={handleSlideChange} onSwiper={setSwiper}>
                <Slide>
                    <FrontSection slideNext={handleNext} />
                </Slide>
                <Slide>
                    <SearchUserForm slidePrev={handlePrev} />
                </Slide>
            </SwiperHome>
        </div>
    )
}

export default CoverSection