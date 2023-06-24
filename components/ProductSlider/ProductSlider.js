import React, { Component } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeSizeForImage } from "@/services/services";
import Arrow from "../svgs/arrow.svg";
import Slider from "react-slick";
import Image from "next/image";
import s from "./ProductSlider.module.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className={s.nextArrow} onClick={onClick}>
            <Arrow className={s.arrow__icon} />
        </div>
    );
}
SampleNextArrow.propTypes = {
    onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={s.prevArrow} onClick={onClick}>
            <Arrow className={s.arrow__icon} />
        </div>
    );
}

SamplePrevArrow.propTypes = {
    onClick: PropTypes.func,
};

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className={s.nextArrowGallery} onClick={onClick}>
            <Arrow className={s.arrow__icon_gal} />
        </div>
    );
}
NextArrow.propTypes = {
    onClick: PropTypes.func,
};

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className={s.prevArrowGallery} onClick={onClick}>
            <Arrow className={s.arrow__icon_gal} />
        </div>
    );
}

PrevArrow.propTypes = {
    onClick: PropTypes.func,
};

export default function ProductSlider({ cardImg }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        fade: true,
        asNavFor: ".slider-nav",
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: "2px",
    };

    return (
        <div >
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
            >
                {cardImg.length > 0 &&
                    cardImg.map((img, i) => (
                        <div key={img.public_id} className={s.slider__wr}>
                            <Image
                                src={makeSizeForImage(img.url, 460, 460)}
                                alt="Picture of the author"
                                width={460}
                                height={460}
                                priority
                                className={s.image}
                            />
                        </div>
                    ))}
            </Slider>
            <div className="thumbnail-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={(slider) => setSlider2(slider)}
                >
                    {cardImg.length > 0 &&
                        cardImg.map((img, i) => (
                            <div key={img.public_id} className={s.slider__wr}>
                                <Image
                                    src={makeSizeForImage(cardImg[0 + i].url, 70, 70)}
                                    alt="Picture of the author"
                                    width={70}
                                    height={70}
                                    className={s.image__dot}
                                    blurDataURL="data:..."
                                    placeholder="blur"
                                />
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
}

ProductSlider.propTypes = {
    cardImg: PropTypes.array,
};
