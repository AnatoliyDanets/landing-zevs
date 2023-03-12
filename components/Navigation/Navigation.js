import { Link } from "react-scroll/modules";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import logo from "../../image/Hero/Zevs.png";
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
                    >
                        <Image src={logo} alt="Logo" width={120} height={40} priority />
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
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.header_item_one" />
                    </Link>
                </li>
                <li className={s.nav__item}>
                    {" "}
                    <Link
                        activeClass="active"
                        to="Products"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className={s.nav__link}
                    >
                        <FormattedMessage id="page.home.header_item_two" />
                    </Link>
                </li>

                <li className={s.nav__item}>
                    <Link
                        activeClass="active"
                        to="Feedback"
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
                        to="Contacts"
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
