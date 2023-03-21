import { motion } from "framer-motion";
import classNames from "classnames";
import { Link } from "react-scroll/modules";
import { FormattedMessage } from "react-intl";
import Container from "../Container";
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


                <motion.div
                    viewport={{ amount: 0.2, once: true }}
                    custom={2}
                    variants={textAnmation}
                >
                    <Link
                        activeClass="active"
                        className={s.hero__btn}
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
