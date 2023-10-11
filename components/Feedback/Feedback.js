import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import imageOne from "../../image/Feedback/1.jpg";
import imageTwo from "../../image/Feedback/2.jpg";
import imageThree from "../../image/Feedback/3.jpg";
import imageFive from "../../image/Feedback/5.jpg";
import imageSix from "../../image/Feedback/6.jpg";
import imageSeven from "../../image/Feedback/7.jpg";
import imageEight from "../../image/Feedback/8.jpg";
import imageNine from "../../image/Feedback/9.jpg";
import imageTen from "../../image/Feedback/10.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import s from "./Feedback.module.css";

export default function Feedback() {
    const feedbackPeople = [
        imageOne,
        imageTwo,
        imageThree,
        imageFive,
        imageSix,
        imageSeven,
        imageEight,
        imageNine,
        imageTen,
    ];

    return (
        <Section id={"Feedback"}>
            <SectionTitle name={<FormattedMessage id="page.home.feedback_title" />} />
            <div className={s.feedback}>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {feedbackPeople.map((el, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={el}
                                alt="feedback"
                                quality={100}
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                                className={s.feedback__img}
                                blurDataURL="data:..."
                                placeholder="blur"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section>
    );
}
