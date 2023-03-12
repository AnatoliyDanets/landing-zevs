import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
/* eslint-disable react/no-unescaped-entities */
import Container from "../Container";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Star from "../svgs/star.svg";
import Clients from "../svgs/clients.svg";
import Internet from "../svgs/internet.svg";
import Problem from "../svgs/problem.svg";
import Product from "../svgs/product.svg";
import Discount from "../svgs/discount.svg";
import s from "./Features.module.css";

const textAnmation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export default function Features() {
    return (
        <Section id={"Features"}>
            <Container>
                <SectionTitle name={<FormattedMessage id="page.home.features_title" />
                } />
                <ul className={s.features}>
                    <motion.li

                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={1}
                        variants={textAnmation}
                        className={s.features__item}
                    >
                        <article>
                            <Star className={s.features__icon} />
                            <h3 className={s.features__title}><FormattedMessage id="page.home.features_title_one" /></h3>
                            <p className={s.features__text}>
                                <FormattedMessage id="page.home.features_item_one" />
                            </p>
                        </article>
                    </motion.li>
                    <motion.li

                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={2}
                        variants={textAnmation}
                        className={s.features__item}
                    >
                        <article>
                            <Clients className={s.features__icon} />
                            <h3 className={s.features__title}><FormattedMessage id="page.home.features_title_two" /></h3>
                            <p className={s.features__text}>
                                <FormattedMessage id="page.home.features_item_two" />
                            </p>
                        </article>
                    </motion.li>
                    <motion.li

                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={3}
                        variants={textAnmation}
                        className={s.features__item}
                    >
                        <article>
                            <Internet className={s.features__icon} />
                            <h3 className={s.features__title}><FormattedMessage id="page.home.features_title_three" /></h3>
                            <p className={s.features__text}>
                                <FormattedMessage id="page.home.features_item_three" />
                            </p>
                        </article>
                    </motion.li>
                    <motion.li

                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={4}
                        variants={textAnmation}
                        className={s.features__item}
                    >
                        <article>
                            <Problem className={s.features__icon} />
                            <h3 className={s.features__title}><FormattedMessage id="page.home.features_title_four" /></h3>
                            <p className={s.features__text}>
                                <FormattedMessage id="page.home.features_item_four" />
                            </p>
                        </article>
                    </motion.li>
                    <motion.li

                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={5}
                        variants={textAnmation}
                        className={s.features__item}
                    >
                        <article>
                            <Product className={s.features__icon} />
                            <h3 className={s.features__title}><FormattedMessage id="page.home.features_title_five" /></h3>
                            <p className={s.features__text}>
                                <FormattedMessage id="page.home.features_item_five" />
                            </p>
                        </article>
                    </motion.li>
                    <motion.li

                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={6}
                        variants={textAnmation}
                        className={s.features__item}
                    >
                        <article>
                            <Discount className={s.features__icon} />
                            <h3 className={s.features__title}><FormattedMessage id="page.home.features_title_six" /></h3>
                            <p className={s.features__text}>
                                <FormattedMessage id="page.home.features_item_six" />
                            </p>
                        </article>
                    </motion.li>
                </ul>
            </Container>
        </Section>
    );
}
