import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import useFormattedDate from "@/hook/hook";
import Image from "next/image";
import { makeSizeForImage } from "@/services/services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-scroll/modules";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Container from "../Container";
import s from "./PopularProducts.module.css";




export const ConvertToNormalDate = ({ date }) => {
    const finishDiscountDate = useFormattedDate(date);
    return String(finishDiscountDate)
};

export default function DiscountCards({ products, locale }) {

    return (
        <Section id={"Discount"}>
            <Container>
                <SectionTitle
                    name={<FormattedMessage id="page.home.discount_title" />}
                />

                <div className={s.discount}>
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

                            .map((el, i) => (

                                <SwiperSlide key={i}>
                                    <div className={s.discount__item}>

                                        <Image
                                            src={makeSizeForImage(el.cardImg[0].url, 450, 450)}
                                            alt={`discount ${el.model[locale]}`}
                                            width="450"
                                            height="450"
                                            className={s.discount__img}
                                            // priority
                                            blurDataURL="data:..."
                                            placeholder="blur"
                                        />
                                        {el.discount > 0 && <div className={s.discount__time}>
                                            <FormattedMessage id="page.home.discount_product_time" />
                                            {<ConvertToNormalDate date={el.discount_time} />}
                                        </div>}

                                        <article className={s.discount__info}>
                                            <h3 className={s.discount__title}>
                                                {el.model[locale]}
                                            </h3>
                                            <div className={s.popular__price} >
                                                <p className={s.discount__price} style={el.discount > 0 ? { marginRight: '5px' } : { marginRight: "0" }}>
                                                    {el.discount > 0
                                                        ? el.price - (el.discount / 100) * el.price
                                                        : el.price}{" "}
                                                    грн
                                                </p>
                                                {el.discount > 0 && (
                                                    <p
                                                        className={s.discount__price_discount}
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
                                            {el.discount > 0 && <div>
                                                <div
                                                    style={{ display: "flex", alignItems: "center" }}
                                                >
                                                    <span className={s.discount__discount}>
                                                        {" "}
                                                        -{el.discount}{" "}
                                                        <span style={{ fontSize: "12px" }}>%</span>
                                                    </span>{" "}
                                                </div>
                                            </div>}
                                            <Link

                                                className={s.discount__btn}
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
                                    </div>
                                </SwiperSlide>

                            ))}
                    </Swiper>
                </div>

            </Container>
        </Section>
    );
}

DiscountCards.propTypes = {
    locale: PropTypes.string,
    products: PropTypes.array
};