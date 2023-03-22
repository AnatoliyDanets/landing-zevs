import Link from "next/link";
import { FormattedMessage } from "react-intl";
import Container from "../Container";
import s from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={s.footer}>
            <Container>
                {/* <ul className={s.footer__list}>
                    <li className={s.footer__item}>
                        {" "}
                        <Link href={"/political"} prefetch={false}>
                            <FormattedMessage id="page.home.footer_title_one" />
                        </Link>
                    </li>
                    <li className={s.footer__item}>
                        <Link href={"/agreement"} prefetch={false}>
                            <FormattedMessage id="page.home.footer_title_two" />
                        </Link>
                    </li>
                </ul> */}

                <p className={s.footer__copy}>© 2023 Zevs VIP & Design</p>
            </Container>
        </footer>
    );
}
