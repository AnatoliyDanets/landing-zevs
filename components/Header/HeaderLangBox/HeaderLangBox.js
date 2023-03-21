import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import s from "./HeaderLangBox.module.css";

export default function HeaderLangBox({ locales }) {
    const router = useRouter();
    const currentRoute = router.locale;


    return (
        <ul className={s.change__lang}>
            <li className={s.change__lang_item}>
                <Link className={currentRoute === locales[0] ? s.change__lang_active : s.change__lang_noactive} key={locales[0]} href="/" locale={locales[0]}>
                    UA
                </Link>
            </li>
            <li className={s.change__lang_item}>
                <Link className={currentRoute === locales[1] ? s.change__lang_active : s.change__lang_noactive} key={locales[1]} href="/" locale={locales[1]}>
                    RU
                </Link>
            </li>
        </ul>
    );
}
