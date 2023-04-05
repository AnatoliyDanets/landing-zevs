import dynamic from "next/dynamic";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-scroll/modules";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Container from "../Container";
import HeaderLangBox from "./HeaderLangBox";
import Navigation from "../Navigation";
import logo from "../../image/Hero/Zevs.png";
import Burger from "../svgs/burger.svg";
import s from "./Header.module.css";

const HeaderMobile = dynamic(() => import("./HeaderMobile"));

export default function Header({ locales, findDiscountProducts }) {
    const [scrollY, setScrollY] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showIsDesktop, setShowshowIsDesktop] = useState(false);

    const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

    const handleShowMenu = () => {
        setShowMobileMenu((prev) => !prev);
    };

    useEffect(() => {
        isDesktop ? setShowshowIsDesktop(true) : setShowshowIsDesktop(false);
    }, [isDesktop]);
    const styleFixedHeader = {
        position: "fixed",
        backgroundColor: "rgba(51, 51, 51, 0.85)",

    };

    const styleAbsoluteHeader = {
        position: "absolute",
        backgroundColor: "rgba(51, 51, 51, 0.4)",
    };

    const fixedHeader = useMemo(
        () => isMobile && scrollY >= 89
            ? styleFixedHeader
            : styleAbsoluteHeader
                ? isTablet && scrollY >= 106
                    ? styleFixedHeader
                    : styleAbsoluteHeader
                : null,
        [isMobile, scrollY, isTablet, styleFixedHeader, styleAbsoluteHeader]
    );


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header
            className={s.header}
            style={fixedHeader}
        >
            <Container style={{ position: "relative" }}>

                {showIsDesktop ? (
                    <>
                        <HeaderLangBox locales={locales} />
                        <Navigation findDiscountProducts={findDiscountProducts} />
                    </>

                ) : (
                    <nav>
                        {
                            <ul
                                className={s.header__list}
                                style={
                                    showMobileMenu
                                        ? { transform: "translateX(-102%) translateX(0%)" }
                                        : { transform: null }
                                }
                            >
                                <li className={s.header__item}>
                                    <Link
                                        activeClass="active"
                                        to="Hero"
                                        href={"#Hero"}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        <Image
                                            src={logo}
                                            alt="Logo"
                                            width={112}
                                            height={40}
                                            priority="true"
                                        />
                                    </Link>
                                </li>
                                <li className={s.header__item}>
                                    <button
                                        type="button"
                                        className={s.header__burger}
                                        onClick={handleShowMenu}
                                        aria-label="Мобильное меню"
                                    >
                                        <Burger className={s.header__burgerIcon} />
                                    </button>
                                </li>
                            </ul>
                        }
                        <HeaderMobile show={showMobileMenu} onClick={handleShowMenu} locales={locales} findDiscountProducts={findDiscountProducts} />
                    </nav>
                )}

            </Container>
        </header>
    );
}
