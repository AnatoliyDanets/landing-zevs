import Link from "next/link";
import Container from "../UI/Container/Container";
import s from "./ErrorBox.module.css";

export default function ErrorBox() {
    return (
        <Container>
            <section className={s.error}>
                <h1 className={s.error__title}>Zevs is not here :(</h1>
                <Link className={s.error__link} href="/">
                    Back to Zevs
                </Link>
            </section>
        </Container>
    );
}
