import Close from "../../svgs/close.svg";
import { Link } from "react-scroll";
import Container from "../../Container";
import s from "./HeaderMobile.module.css";

export default function HeaderMobile({ show, onClick }) {
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
                                <Link
                                    activeClass="active"
                                    to="Features"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={onClick}
                                >
                                    Переваги
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
                                    Ковдри
                                </Link>
                            </li>
                            <li className={s.nav__item}>
                                {" "}
                                <Link
                                    activeClass="active"
                                    to="Pillows"
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    onClick={onClick}
                                >
                                    Подушки
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
                                    Відгуки
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
                                    Як замовити?
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
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    );
}
