import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../Container";
import classNames from "classnames";
import { Link } from "react-scroll/modules";
import Check from "../svgs/check.svg";
import { FormattedMessage } from "react-intl";
import s from "./Hero.module.css";

const textAnmation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};



export default function Hero() {

    // const isTablet = useMediaQuery({ query: "(min-width: 480px)" });
    // const [showIsTablet, setShowIsTablet] = useState(false);
    // useEffect(() => {
    //     isTablet ? setShowIsTablet(true) : setShowIsTablet(false);
    // }, []);
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="Hero"
            className={classNames(s.hero, s.hero__container)}
        >
            <Container style={{ backgroundColor: "transparent" }}>
                <motion.h1
                    viewport={{ amount: 0.2, once: true }}
                    custom={1}
                    variants={textAnmation}
                    className={s.hero__title}
                >

                    <FormattedMessage id="page.home.hero_title" />
                </motion.h1>

                {/* {showIsTablet && (
                    <motion.div
                        viewport={{ amount: 0.2, once: true }}
                        custom={0}
                        variants={textAnmation}
                    >
                        <p className={s.hero__text}>Продукція Zevs:</p>
                        <ul className={s.hero__list}>
                            <li className={s.hero__item}>
                                <span>
                                    <Check className={s.hero__checkIcon} />
                                </span>{" "}
                                Антибактеріальна
                            </li>
                            <li className={s.hero__item}>
                                <span>
                                    <Check className={s.hero__checkIcon} />
                                </span>
                                Повітряпропускна
                            </li>
                            <li className={s.hero__item}>
                                <span>
                                    <Check className={s.hero__checkIcon} />
                                </span>
                                Антиалергенна
                            </li>
                            <li className={s.hero__item}>
                                <span>
                                    <Check className={s.hero__checkIcon} />
                                </span>
                                Термозберігаюча
                            </li>
                        </ul>
                    </motion.div>
                )} */}
                <motion.div
                    viewport={{ amount: 0.2, once: true }}
                    custom={2}
                    variants={textAnmation}
                >
                    <Link
                        activeClass="active"
                        className={s.btn}
                        to="Products"
                        href={"#Products"}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        Каталог
                    </Link>
                </motion.div>

            </Container>
        </motion.section>
    );
}
