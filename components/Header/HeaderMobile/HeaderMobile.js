import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import Close from "../../svgs/close.svg";
import Container from "../../UI/Container";
import HeaderLangBox from "../HeaderLangBox";
import s from "./HeaderMobile.module.css";

export default function HeaderMobile({ show, onClick, locales }) {
    return (
        <div
            className={s.mobileMenu}
            style={
                show
                    ? { transform: " translateX(-50%)" }
                    : { transform: "translateX(100%)" }
            }
        >
            <Container>
                <button
                    type="button"
                    onClick={onClick}
                    className={s.mobileMenu__close}
                    title="button-menu-close"
                >
                    <Close className={s.mobileMenu__close_icon} />
                </button>
                <div className={s.mobileMenu__wrapper}>
                    <nav className={s.mobileMenu__nav}>
                        <ul className={s.mobileMenu__nav_list}>
                            <li className={s.mobileMenu__nav_item}>
                                <HeaderLangBox locales={locales} />
                            </li>

                            <li className={s.mobileMenu__nav_item}>
                                <Link
                                    activeClass="active"
                                    to="Discount"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    href={"#Discount"}
                                    onClick={onClick}
                                >
                                    <FormattedMessage id="page.home.discount_title" />
                                </Link>
                            </li>
                            <li className={s.mobileMenu__nav_item}>
                                {" "}
                                <Link
                                    activeClass="active"
                                    to="Blankets"
                                    href={"#Blankets"}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={onClick}
                                >
                                    <FormattedMessage id="page.home.catalog_title_one" />
                                </Link>
                            </li>
                            <li className={s.mobileMenu__nav_item}>
                                {" "}
                                <Link
                                    activeClass="active"
                                    to="Pillows"
                                    href={"#Pillows"}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={onClick}
                                >
                                    <FormattedMessage id="page.home.catalog_title_two" />
                                </Link>
                            </li>
                            <li className={s.mobileMenu__nav_item}>
                                <Link
                                    activeClass="active"
                                    to="Features"
                                    href={"#Features"}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onClick={onClick}
                                >
                                    <FormattedMessage id="page.home.header_item_one" />
                                </Link>
                            </li>
                            <li className={s.mobileMenu__nav_item}>
                                <Link
                                    activeClass="active"
                                    to="Feedback"
                                    href={"#Feedback"}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onClick={onClick}
                                >
                                    <FormattedMessage id="page.home.header_item_three" />
                                </Link>
                            </li>
                            <li className={s.mobileMenu__nav_item}>
                                <Link
                                    activeClass="active"
                                    to="HowOrder"
                                    href={"#HowOrder"}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onClick={onClick}
                                >
                                    <FormattedMessage id="page.home.header_item_four" />
                                </Link>
                            </li>
                            <li className={s.mobileMenu__nav_item}>
                                <Link
                                    activeClass="active"
                                    to="Delivery"
                                    href={"#Delivery"}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onClick={onClick}
                                >
                                    <FormattedMessage id="page.home.delivery_title" />
                                </Link>
                            </li>
                            <li className={s.mobileMenu__nav_item}>
                                <Link
                                    activeClass="active"
                                    to="Contacts"
                                    href={"#Contacts"}
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

HeaderMobile.propTypes = {
    show: PropTypes.bool,
    onClick: PropTypes.func,
    locales: PropTypes.array,
};
