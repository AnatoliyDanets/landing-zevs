import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Container from "../Container";
import logo from "../../image/Hero/Zevs.PNG"
import { useRouter } from 'next/router'
import s from "./HearderCard.module.css"

export default function HearderCard() {
    const router = useRouter()
    const [scrollY, setScrollY] = useState(0);
    const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
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
                isMobile && scrollY >= 120
                    ? { position: "fixed", backgroundColor: "rgba(0, 0, 0, 0.7)" }
                    : { position: "absolute", backgroundColor: "transparent" }
                        ? isTablet && scrollY >= 70
                            ? { position: "fixed", backgroundColor: "rgba(0, 0, 0, 0.7)" }
                            : { position: "absolute", backgroundColor: "transparent" }
                        : null
            }
        >
            <Container style={{ backgroundColor: "transparent" }}>
                <ul className={s.header__list}>
                    <li className={s.header__item}>
                        <button className={s.card__back} type="button" onClick={() => router.back()}>
                            Повернутись на головну
                        </button>



                    </li>
                    <li className={s.header__item}>
                        <Link
                            activeClass="active"
                            to="Character"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            Характеристики
                        </Link>
                    </li>
                    <li className={s.header__item}>
                        <Link
                            activeClass="active"
                            to="Character"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            Товари які пасують
                        </Link>
                    </li>

                </ul>
            </Container>
        </header>
    );
}
