import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import logo from "../../image/Hero/Zevs_desk.png";
import s from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav>
            <ul className={s.nav__list}>
                <li className={s.nav__item}>
                    <Link
                        activeClass="active"
                        to="Hero"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        href={"#Hero"}
                    >
                        <Image src={logo} alt="Logo" width={122} height={40} priority />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link
                        activeClass="active"
                        to="Discount"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        href={"#Discount"}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.discount_title" />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    {" "}
                    <Link
                        activeClass="active"
                        to="Blankets"
                        href={"#Blankets"}
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.catalog_title_one" />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    {" "}
                    <Link
                        activeClass="active"
                        to="Pillows"
                        href={"#Pillows"}
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.catalog_title_two" />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link
                        activeClass="active"
                        to="Features"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        href={"#Features"}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.header_item_one" />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link
                        activeClass="active"
                        to="Feedback"
                        href={"#Feedback"}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.header_item_three" />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link
                        activeClass="active"
                        to="HowOrder"
                        href={"#HowOrder"}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.header_item_four" />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link
                        activeClass="active"
                        to="Delivery"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        href={"#Delivery"}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.delivery_title" />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    <Link
                        activeClass="active"
                        to="Contacts"
                        href={"#Contacts"}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.header_item_five" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
