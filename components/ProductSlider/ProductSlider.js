import React, { Component } from "react";
import Arrow from "../svgs/arrow.svg";
import Slider from "react-slick";
import Image from "next/image";
import s from "./ProductSlider.module.css"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={s.nextArrow}
            // style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        ><Arrow className={s.arrow__icon} /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={s.prevArrow}
            // style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        ><Arrow className={s.arrow__icon} /></div>
    );
}
export default class CenterMode extends Component {

    render() {
        const { cardImg } = this.props;
        const settings = {
            customPaging: function (i) {
                return (
                    <a>
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
                    </a>
                );
            },
            dots: true,
            // dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />

        };

        const css = { width: '100%', height: 'auto' }
        return (

            <div>
                <Slider {...settings} >
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