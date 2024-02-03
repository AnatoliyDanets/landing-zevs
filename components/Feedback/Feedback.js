import { FormattedMessage } from "react-intl";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import SliderSection from "../UI/SliderSection/SliderSection";
import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";
import imageOne from "../../image/Feedback/1.jpg";
import imageTwo from "../../image/Feedback/2.jpg";
import imageThree from "../../image/Feedback/3.jpg";
import imageFive from "../../image/Feedback/5.jpg";
import imageSix from "../../image/Feedback/6.jpg";
import imageSeven from "../../image/Feedback/7.jpg";
import imageEight from "../../image/Feedback/8.jpg";
import imageNine from "../../image/Feedback/9.jpg";
import imageTen from "../../image/Feedback/10.jpg";
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
                <SliderSection>
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
                </SliderSection>
            </div>
        </Section>
    );
}
