import { motion } from "framer-motion";
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
                <SectionTitle name={"Чому ми?"} />
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
                            <h3 className={s.features__title}>Український бренд</h3>
                            <p className={s.features__text}>
                                Весь текстиль, який надано в нашому магазині - ми виробляємо
                                самі
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
                            <h3 className={s.features__title}>Понад 17000 клієнтів</h3>
                            <p className={s.features__text}>
                                З нами працювало вже понад 17 000 осіб. Кожен четвертий купив у
                                нас товар повторно! Це свідчить про результат!
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
                            <h3 className={s.features__title}>Понад 20 років на ринку</h3>
                            <p className={s.features__text}>
                                Ми працюємо понад 20 років на ринку. У нас продумані навіть
                                найдрібніші деталі
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
                            <h3 className={s.features__title}>Вирішуємо всі проблеми</h3>
                            <p className={s.features__text}>
                                Якщо у вас виникла проблема, ми обов'язково вирішимо її. Ми
                                працюємо на всі 100%, нам нема чого боятися.
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
                            <h3 className={s.features__title}>Весь товар у наявності</h3>
                            <p className={s.features__text}>
                                У нас є абсолютно всі позиції, представлені на сайті
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
                            <h3 className={s.features__title}>Знижки та акції</h3>
                            <p className={s.features__text}>
                                У нас постійно діють якісь знижки та акції, представлені на
                                сайті
                            </p>
                        </article>
                    </motion.li>
                </ul>
            </Container>
        </Section>
    );
}
