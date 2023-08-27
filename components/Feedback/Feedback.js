import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import imageOne from "../../image/Feedback/1.jpg"
import imageTwo from "../../image/Feedback/2.jpg"
import imageThree from "../../image/Feedback/3.jpg"
import imageFive from "../../image/Feedback/5.jpg"
import imageSix from "../../image/Feedback/6.jpg"
import imageSeven from "../../image/Feedback/7.jpg"
import imageEight from "../../image/Feedback/8.jpg"
import imageNine from "../../image/Feedback/9.jpg"
import imageTen from "../../image/Feedback/10.jpg"
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
        imageTen
    ];
    // const feedbackPeople = [
    //     "https://i.ibb.co/xsqBHS5/Screenshot-2023-01-30-15-54-35-624-edit-com-uaprom-prom.jpg",
    //     "https://i.ibb.co/f8Ryj0g/Screenshot-2023-01-30-15-54-13-438-edit-com-uaprom-prom.jpg",
    //     "https://i.ibb.co/2Wf054h/IMG-20230130-155506.jpg",
    //     "https://i.ibb.co/CV42MRS/Screenshot-2023-01-30-16-02-54-551-edit-com-uaprom-prom.jpg",
    //     "https://i.ibb.co/2ycRVSQ/Screenshot-2023-01-30-16-00-19-905-edit-com-uaprom-prom.jpg",
    //     "https://i.ibb.co/85CVTW3/Screenshot-2023-01-30-16-04-30-027-edit-com-uaprom-prom.jpg",
    //     "https://i.ibb.co/xDdYsyB/Screenshot-2023-01-30-16-05-35-341-edit-com-uaprom-prom.jpg",
    //     "https://i.ibb.co/0n4sHJL/Screenshot-2023-01-30-16-02-02-988-edit-com-uaprom-prom.jpg",
    //     "https://i.ibb.co/YbGCVDr/Screenshot-2023-01-30-16-03-39-071-edit-com-uaprom-prom.jpg",
    //     "https://i.ibb.co/bJZGtmj/Screenshot-2023-01-30-15-56-03-747-edit-com-uaprom-prom.jpg",
    // ];
    return (
        <Section id={"Feedback"}>
            <SectionTitle
                name={<FormattedMessage id="page.home.feedback_title" />}
            />
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
