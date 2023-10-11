import { useMediaQuery } from "react-responsive";
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Phone from "../svgs/phone.svg";
import Location from "../svgs/location.svg";
import Clock from "../svgs/clock.svg";
import s from "./Contacts.module.css";

export default function Contacts() {
    const [showIsMobileContacts, setShowIsMobileContacts] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
    useEffect(() => {
        isMobile ? setShowIsMobileContacts(true) : setShowIsMobileContacts(false);
    }, [isMobile])
    return (
        <Section id={"Contacts"}>
            <SectionTitle
                name={<FormattedMessage id="page.home.contacts_title" />}
            />

            <ul className={s.contacts}>
                <li className={s.contacts__item}>
                    <article>
                        <div className={s.contacts__titles}>
                            {" "}
                            <Phone className={s.contacts__icon} />
                            <h3>
                                <FormattedMessage id="page.home.contacts_title_one" />
                            </h3>
                        </div>
                        {showIsMobileContacts ? (
                            <ul>
                                <li className={s.contacts__mobile_item}>
                                    <h4 className={s.contacts__mobile_title} >
                                        {" "}
                                        <FormattedMessage id="page.home.contacts_title_item_one" />
                                    </h4>
                                    <a className={s.contacts__link} href="tel:+380661165541">+380 (66) 116-55-41</a>
                                </li>
                                <li className={s.contacts__mobile_item} >
                                    {" "}
                                    <h4 className={s.contacts__mobile_title} >
                                        {" "}
                                        <FormattedMessage id="page.home.contacts_title_item_two" />

                                    </h4>
                                    <a className={s.contacts__link} href="tel:+380633502142">
                                        +380 (63) 350-21-42
                                    </a>
                                </li>
                                <li className={s.contacts__mobile_item} >
                                    <h4 className={s.contacts__mobile_title} > Viber</h4>
                                    <a
                                        className={s.contacts__link}
                                        href="viber://chat?number=%2B380636652157"
                                    >
                                        +380 (63) 665-21-57
                                    </a>
                                </li>
                                <li className={s.contacts__mobile_item} >
                                    <h4 className={s.contacts__mobile_title} > Telegram</h4>
                                    <a
                                        className={s.contacts__link}
                                        href="https://telegram.me/+380636652157"
                                    >
                                        +380 (63) 665-21-57
                                    </a>
                                </li>
                            </ul>
                        ) : <table className={s.contacts__table}>
                            <thead className={s.contacts__head}>
                                <tr className={s.contacts__head_row}>
                                    <th>
                                        <FormattedMessage id="page.home.contacts_title_item_one" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="page.home.contacts_title_item_two" />
                                    </th>
                                    <th>Viber</th>
                                    <th>Telegram</th>
                                </tr>
                            </thead>
                            <tbody className={s.contacts__body}>
                                <tr className={s.contacts__body_row}>
                                    <td className={s.contacts__body_sel}>
                                        <a className={s.contacts__link} href="tel:+380661165541">
                                            +380 (66) 116-55-41
                                        </a>
                                    </td>
                                    <td className={s.contacts__body_sel}>
                                        <a className={s.contacts__link} href="tel:+380633502142">
                                            +380 (63) 350-21-42
                                        </a>
                                    </td>
                                    <td className={s.contacts__body_sel}>
                                        <a
                                            className={s.contacts__link}
                                            href="viber://chat?number=%2B380636652157"
                                        >
                                            +380 (63) 665-21-57
                                        </a>
                                    </td>
                                    <td className={s.contacts__body_sel}>
                                        <a
                                            className={s.contacts__link}
                                            href="https://telegram.me/+380636652157"
                                        >
                                            +380 (63) 665-21-57
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>}

                    </article>
                </li>
                <li className={s.contacts__item}>
                    <article>
                        <div className={s.contacts__titles}>
                            <Location className={s.contacts__icon} />
                            <h3>
                                <FormattedMessage id="page.home.contacts_title_two" />
                            </h3>
                        </div>
                        <p>
                            <FormattedMessage id="page.home.contacts_title_two_item" />
                        </p>
                    </article>
                </li>
                <li className={s.contacts__item}>
                    <article>
                        <div className={s.contacts__titles}>
                            <Clock className={s.contacts__icon} />
                            <h3>
                                <FormattedMessage id="page.home.contacts_title_three" />
                            </h3>
                        </div>

                        <table className={s.contacts__table}>
                            <thead className={s.contacts__head}>
                                <tr className={s.contacts__head_row}>
                                    <th>
                                        <FormattedMessage id="page.home.contacts_title_three_item_one" />
                                    </th>
                                    <th>
                                        <FormattedMessage id="page.home.contacts_title_three_item_two" />
                                    </th>
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
                </li>
            </ul>
        </Section>
    );
}
