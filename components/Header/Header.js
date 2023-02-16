import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Container from "../Container";
import Navigation from "../Navigation";
import logo from "../../image/Hero/Zevs.PNG"
import Burger from "../svgs/burger.svg"
import s from "./Header.module.css";
// const logo = dynamic(() => import('../svgs/zevs.svg'))
const HeaderMobile = dynamic(() => import('./HeaderMobile'));

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showIsDesktop, setShowshowIsDesktop] = useState(false);

    const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });


    const handleShowMenu = () => {
        setShowMobileMenu(prev => !prev)
    }

    useEffect(() => { isDesktop ? setShowshowIsDesktop(true) : setShowshowIsDesktop(false) }, [isDesktop])


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
            style={
                isMobile && scrollY >= 89
                    ? { position: "fixed", backgroundColor: "rgba(51, 51, 51, 0.85)" }
                    : { position: "absolute", backgroundColor: "rgba(51, 51, 51, 0.4)" }
                        ? isTablet && scrollY >= 105
                            ? { position: "fixed", backgroundColor: "rgba(51, 51, 51, 0.85)" }
                            : { position: "absolute", backgroundColor: "rgba(51, 51, 51, 0.4)" }
                        : null
            }
        >
            <Container style={{ backgroundColor: "transparent" }}>
                {showIsDesktop ?
                    <Navigation /> :
                    <nav>
                        {<ul className={s.header__list} style={
                            showMobileMenu
                                ? { transform: "translateX(-101%) translateX(0%)" }
                                : { transform: null }
                        }>
                            <li className={s.header__item}>
                                <Link
                                    activeClass="active"
                                    to="Hero"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}

                                >
                                    <Image src={logo}
                                        alt="Logo"
                                        width={120} height={40} priority="true" />
                                </Link>
                            </li>
                            <li className={s.header__item}>
                                <button type="button" className={s.header__burger} onClick={handleShowMenu}>
                                    <Burger className={s.header__burgerIcon} />
                                </button>

                            </li>
                        </ul>}
                        <HeaderMobile show={showMobileMenu} onClick={handleShowMenu} />

                    </nav>



                }
            </Container>


        </header>
    );
}