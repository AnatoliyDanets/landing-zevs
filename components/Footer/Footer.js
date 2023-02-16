import Link from "next/link"
import Container from "../Container"
import s from "./Footer.module.css"


export default function Footer() {
    return (
        <footer className={s.footer} >
            <Container>
                <ul className={s.footer__list}>
                    <li className={s.footer__item}> <Link href={"/political"} prefetch={false}> Политика конфиденциальности</Link></li>
                    <li className={s.footer__item}><Link href={"/agreement"} prefetch={false}> Пользовательское соглашение</Link></li>
                </ul>


                <p className={s.footer__copy}>© 2022 Zevs VIP & Design</p>


            </Container>
        </footer>
    )
}