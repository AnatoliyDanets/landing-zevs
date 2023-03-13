import { FormattedMessage } from "react-intl";
import s from "./Characteristics.module.css"


export default function Characteristics({ type, property, locale }) {


    const charProperty = property.reduce((acc, el) => {
        if (typeof el === "number" || typeof el === "string") {
            acc.push(el);
        }
        if (typeof el === "object") {
            if (el.hasOwnProperty(locale)) {
                acc.push(el[locale]);
            } else {
                const newEl = locale === "uk" ? "Відсутньо" : "Отсутсвует";
                acc.push(newEl);
            }
        }

        return acc;
    }, []);

    return (
        <table className={s.card__character}>
            <thead className={s.card__character_head}>
                {(type === "Ковдри" || type === "Одеяла") && <tr className={s.card__character_row}>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_one" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_two" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_three" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_four" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_five" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_six" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_seven" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_eight" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_blanket_nine" /></th>
                </tr>}
                {((type === "Подушки" && locale === 'uk') || type === "Подушки") && <tr className={s.card__character_row}>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_one" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_two" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_three" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_four" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_five" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_six" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_seven" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_eight" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_nine" /></th>
                    <th className={s.card__character_sel}> <FormattedMessage id="page.home.catalog_character_pillow_ten" /></th>
                </tr>}
            </thead>
            <tbody className={s.card__character_head}>
                <tr className={s.card__character_row}>
                    {charProperty.map((char, i) => (
                        <td key={i} className={s.card__character_sel}>{char}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}