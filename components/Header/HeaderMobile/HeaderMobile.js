import { FormattedMessage } from "react-intl";
import HeaderLangBox from "../HeaderLangBox";
import { Link } from "react-scroll";
import Close from "../../svgs/close.svg";
import Container from "../../Container";
import s from "./HeaderMobile.module.css";

export default function HeaderMobile({ show, onClick, locales }) {
    return (
        <div
            className={s.mobileMenu}
            style={
                show
                    ? { transform: "translateY(0) translateX(-50%)" }
                    : { transform: "translateX(100%) translateX(-50%)" }
            }
        >
            <Container>
                <button
                    type="button"
                    onClick={onClick}
                    className={s.mobileMenu__close}
                    title="button-menu-close"
                >
                    <Close className={s.modal__close_icon} />
                </button>
                <div className={s.mobileMenu__wrapper}>
                    <nav className={s.mobile__nav}>
                        <ul className={s.nav__list}>
                            <li className={s.nav__item}>
                                <HeaderLangBox locales={locales} />
                            </li>
                            <li className={s.nav__item}>
                                <Link
                                    activeClass="active"
                                    to="Features"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={onClick}
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
                                    offset={-30}
                                    duration={500}
                                    onClick={onClick}
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
                                    onClick={onClick}
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
                                    onClick={onClick}
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
                                    onClick={onClick}
                                >
                                    <FormattedMessage id="page.home.header_item_five" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    );
}
