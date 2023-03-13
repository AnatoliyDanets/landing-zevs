import { Gallery, Item } from "react-photoswipe-gallery";
import { FormattedMessage } from "react-intl";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import Section from "../Section";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import s from "./Feedback.module.css";

export default function Feedback() {
    const feedbackPeople = [
        "https://i.ibb.co/xsqBHS5/Screenshot-2023-01-30-15-54-35-624-edit-com-uaprom-prom.jpg",
        "https://i.ibb.co/f8Ryj0g/Screenshot-2023-01-30-15-54-13-438-edit-com-uaprom-prom.jpg",
        "https://i.ibb.co/2Wf054h/IMG-20230130-155506.jpg",
        "https://i.ibb.co/CV42MRS/Screenshot-2023-01-30-16-02-54-551-edit-com-uaprom-prom.jpg",
        "https://i.ibb.co/2ycRVSQ/Screenshot-2023-01-30-16-00-19-905-edit-com-uaprom-prom.jpg",
        "https://i.ibb.co/85CVTW3/Screenshot-2023-01-30-16-04-30-027-edit-com-uaprom-prom.jpg",
        "https://i.ibb.co/xDdYsyB/Screenshot-2023-01-30-16-05-35-341-edit-com-uaprom-prom.jpg",
        "https://i.ibb.co/0n4sHJL/Screenshot-2023-01-30-16-02-02-988-edit-com-uaprom-prom.jpg",
        "https://i.ibb.co/YbGCVDr/Screenshot-2023-01-30-16-03-39-071-edit-com-uaprom-prom.jpg",
        "https://i.ibb.co/bJZGtmj/Screenshot-2023-01-30-15-56-03-747-edit-com-uaprom-prom.jpg",
    ];
    return (
        <Section id={"Feedback"}>
            <Container>
                <SectionTitle
                    name={<FormattedMessage id="page.home.feedback_title" />}
                />
                <Gallery>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                            gridGap: 5,
                        }}
                    >
                        {feedbackPeople.map((el, i) => (
                            <Item
                                key={i}
                                original={el}
                                thumbnail={el}
                                width="700"
                                height="400"
                            >
                                {({ ref, open }) => (
                                    <Image
                                        ref={ref}
                                        onClick={open}
                                        src={el}
                                        alt="Picture of the author"
                                        width="130"
                                        height="60"
                                        className={s.slider__img}
                                        priority
                                        blurDataURL="data:..."
                                        placeholder="blur"
                                    />
                                )}
                            </Item>
                        ))}
                    </div>
                </Gallery>
            </Container>
        </Section>
    );
}
