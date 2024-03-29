import { Link } from "react-scroll/modules";
import { FormattedMessage } from "react-intl";
import Container from "../UI/Container";
import s from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="Hero" className={s.hero}>
            <Container>
                <div className={s.hero__content}>
                    <h1 className={s.hero__title}>
                        <FormattedMessage id="page.home.hero_title" />
                    </h1>

                    <div>
                        <Link
                            activeClass="active"
                            className={s.hero__btn}
                            to="Products"
                            href={"#Products"}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            Каталог
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
