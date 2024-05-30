import PropTypes from 'prop-types';
import {
    Autoplay,
    Navigation,
    Pagination,
    Thumbs,
    EffectFade,
    EffectCreative,
} from 'swiper/modules';
import SwiperCore from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation, Pagination, Thumbs, EffectCreative]);


const SwiperHome = ({ children, sliderCName, settings, onSlideChange, onSwiper }: any) => {
    const sliderOptions = {
        ...settings,
        grabCursor:true,
        effect:'creative',
        creativeEffect:{
          prev: {
            shadow: true,
            translate: ['-100%', 0, -1],
          },
          next: {
            shadow: true,
            translate: ['100%', 0, 0],
          },
        },
        modules:[EffectCreative],
    };
    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        onSlideChange && onSlideChange(currentIndex);
    };
    return (
        <Swiper className={`${sliderCName}`} {...sliderOptions} onSlideChange={handleSlideChange} onSwiper={onSwiper} simulateTouch={false}>
            {children}
        </Swiper>
    );
}

export { SwiperSlide as Slide };

SwiperHome.propTypes = {
    children: PropTypes.instanceOf(Array),
    settings: PropTypes.shape({
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
    sliderCName: PropTypes.string,
    onSlideChange: PropTypes.func,
    onSwiper: PropTypes.func,
};

export default SwiperHome;