import { motion } from "framer-motion";
import Container from "../Container";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Phone from "../svgs/phone.svg";
import Location from "../svgs/location.svg";
import Clock from "../svgs/clock.svg";
import s from "./Contacts.module.css";

const textAnmation = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export default function Contacts() {
    return (
        <Section id={"Contacts"} >
            <Container>
                <SectionTitle name={"Контакти"} />

                <ul className={s.contacts}>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={1}
                        variants={textAnmation}
                        className={s.contacts__item}
                    >
                        <article>
                            <div className={s.contacts__titles}>
                                {" "}
                                <Phone className={s.contacts__icon} />
                                <h3>Зв&apos;язатися з нами</h3>
                            </div>
                            <table className={s.contacts__table}>
                                <thead className={s.contacts__head}>
                                    <tr className={s.contacts__head_row}>
                                        <th>Перший номер</th>
                                        <th>Другий номер</th>
                                        <th>Viber</th>
                                        <th>Telegram</th>
                                    </tr>
                                </thead>
                                <tbody className={s.contacts__body}>
                                    <tr className={s.contacts__body_row}>
                                        <td>
                                            <a href="tel:+380661165541">+380 (66) 116-55-41</a>
                                        </td>
                                        <td>
                                            <a href="tel:+380633502142">+380 (63) 350-21-42</a>
                                        </td>
                                        <td>
                                            <a href="viber://chat?number=%2B380636652157">
                                                +380 (63) 665-21-57
                                            </a>
                                        </td>
                                        <td>
                                            <a href="https://telegram.me/+380636652157">
                                                +380 (63) 665-21-57
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </motion.li>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={2}
                        variants={textAnmation}
                        className={s.contacts__item}
                    >
                        <article>
                            <div className={s.contacts__titles}>
                                <Location className={s.contacts__icon} />
                                <h3>Місцезнаходження</h3>
                            </div>
                            <p> Харків, Україна</p>
                        </article>
                    </motion.li>
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2, once: true }}
                        custom={3}
                        variants={textAnmation}
                        className={s.contacts__item}
                    >
                        <article>
                            <div className={s.contacts__titles}>
                                <Clock className={s.contacts__icon} />
                                <h3>Часи праці</h3>
                            </div>

                            <table className={s.contacts__table}>
                                <thead className={s.contacts__head}>
                                    <tr className={s.contacts__head_row}>
                                        <th>Понеділок - П&apos;ятниця </th>
                                        <th>Субота, Неділя</th>
                                    </tr>
                                </thead>
                                <tbody className={s.contacts__body}>
                                    <tr className={s.contacts__body_row}>
                                        <td>9:00 - 18:00</td>

                                        <td>10:00 - 14:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </motion.li>
                </ul>
            </Container>
        </Section>
    );
}
