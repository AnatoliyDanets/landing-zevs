import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll/modules";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Container from "../Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper";

import s from "./DiscountCards.module.css";

export default function DiscountCards({ products, locale }) {
    const convertToNormalDate = (date) => {
        return new Date(date - 10800000).toLocaleDateString();
    };
    const makeSizeForImage = (img, w, h) => {
        const splitImg = img.split("/");
        const addSize = splitImg.find((el) => el === "upload");
        const concatSize = `${addSize}/w_${w},h_${h},c_fill`;
        const startPath = splitImg.slice(0, 5);
        const endPath = splitImg.slice(-3);
        const newImagePath = [...startPath, concatSize, ...endPath].join("/");
        return newImagePath;
    };

    return (
        <Section id={"Discount"}>
            <Container>
                <SectionTitle
                    name={<FormattedMessage id="page.home.discount_title" />}
                />
                <div className={s.hero__banner}>
                    <div className={s.slider__wrapper}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className={s.slider}
                        >
                            {products
                                .reduce(
                                    (acc, el) => (
                                        acc.find(
                                            ({ model }) => el.model[locale] === model[locale]
                                        ) || acc.push(el),
                                        acc
                                    ),
                                    []
                                )
                                .filter((el) => el.discount > 0)
                                .map((el, i) => (
                                    <div className={s.slider__hero} key={i}>
                                        <SwiperSlide key={i}>
                                            <div className={s.slider__item}>
                                                <div className={s.slider__img_wrap}>
                                                    <Image
                                                        src={makeSizeForImage(el.cardImg[0].url, 450, 450)}
                                                        alt="feedback"
                                                        width="166"
                                                        height="170"
                                                        className={s.slider__img}
                                                        priority
                                                        blurDataURL="data:..."
                                                        placeholder="blur"
                                                    />
                                                    <div className={s.slider__discount_time}>
                                                        <FormattedMessage id="page.home.discount_product_time" />
                                                        {String(convertToNormalDate(el.discount_time))}
                                                    </div>
                                                </div>
                                                <article className={s.slider__info}>
                                                    <h3 className={s.slider__title}>
                                                        {el.model[locale]}
                                                    </h3>
                                                    <div>
                                                        {" "}
                                                        <p className={s.card__price}>
                                                            {el.discount > 0
                                                                ? el.price - (el.discount / 100) * el.price
                                                                : el.price}{" "}
                                                            грн
                                                        </p>
                                                        {el.discount > 0 && (
                                                            <p
                                                                className={s.card__price_discount}
                                                                style={
                                                                    el.discount > 0
                                                                        ? { textDecoration: "line-through" }
                                                                        : { textDecoration: "none" }
                                                                }
                                                            >
                                                                {el.price} грн
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div
                                                            style={{ display: "flex", alignItems: "center" }}
                                                        >
                                                            <span className={s.slider__discount}>
                                                                {" "}
                                                                -{el.discount}{" "}
                                                                <span style={{ fontSize: "12px" }}>%</span>
                                                            </span>{" "}
                                                        </div>
                                                    </div>
                                                    <Link
                                                        activeClass="active"
                                                        className={s.btn}
                                                        to={el.model[locale]}
                                                        href={`#${el.model[locale]}`}
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-50}
                                                        duration={500}
                                                    >
                                                        <FormattedMessage id="page.home.discount_product_link" />
                                                    </Link>
                                                </article>

                                                {/* </div> */}
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
