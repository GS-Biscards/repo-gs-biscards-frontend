'use client'
import React from 'react'
import Header from './Header'
import FrontSection from './FrontSection';
import { useRouter } from 'next/navigation';

type Props = {}

const CoverSection = (props: Props) => {
    const router = useRouter();
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
    const handleSearchPage = () => {
        router.push('/search-users');
    };
    return (
        <div className='h-full'>
            <div className='h-[72px]'>
                <Header />
            </div>
            <FrontSection slideNext={handleSearchPage} />
            {/* <SwiperHome settings={settings} onSlideChange={handleSlideChange} onSwiper={setSwiper}>
                <Slide>
                    <FrontSection slideNext={handleNext} />
                </Slide>
                <Slide>
                    <SearchUserForm slidePrev={handlePrev} />
                </Slide>
            </SwiperHome> */}
        </div>
    )
}

export default CoverSection