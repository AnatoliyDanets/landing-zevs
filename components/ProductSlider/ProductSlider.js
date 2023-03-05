import React, { Component } from "react";
import Arrow from "../svgs/arrow.svg";
import Slider from "react-slick";
import Image from "next/image";
import s from "./ProductSlider.module.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={s.nextArrow}
            // style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        >
            <Arrow className={s.arrow__icon} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={s.prevArrow}
            // style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        >
            <Arrow className={s.arrow__icon} />
        </div>
    );
}

function urlSize(url, w, h) {
    const startUrl = url.slice(0, 50)
    const endUrl = url.split('/').slice(-3).join('/')
    const newURL = startUrl + `w_${w},h_${h},c_scale/` + endUrl
    return newURL
}

urlSize("https://res.cloudinary.com/dleesb43b/image/upload/v1677709955/products/jkabynffjeizbj1pmv20.jpg", 450, 400)


export default class CenterMode extends Component {
    render() {
        const { cardImg } = this.props;
        const settings = {
            customPaging: function (i) {
                return (
                    <Image
                        src={cardImg[0 + i].url}
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        className={s.image__dot}
                        priority
                        blurDataURL="data:..."
                        placeholder="blur"
                    />
                );
            },
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };


        return (
            <div>
                <Slider {...settings}>
                    {cardImg.length > 0 &&
                        cardImg.map((img, i) => (
                            <div key={img.public_id} className={s.slider__wr}>
                                <Image
                                    src={img.url}
                                    alt="Picture of the author"
                                    sizes="100vw"
                                    width={280}
                                    height={280}
                                    className={s.image}
                                />
                            </div>
                        ))}
                </Slider>
            </div>
        );
    }
}
