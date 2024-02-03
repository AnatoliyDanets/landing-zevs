import PropTypes from "prop-types";
import { Pagination, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function SliderSection({ children, classname }) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={classname}
        >
            {children}
        </Swiper>
    );
}

SliderSection.propTypes = {
    children: PropTypes.node,
};
