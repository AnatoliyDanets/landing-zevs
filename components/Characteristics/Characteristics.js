import s from "./Characteristics.module.css"


export default function Characteristics({ type, property }) {

    return (
        <table className={s.card__character}>
            <thead className={s.card__character_head}>
                {type === "Ковдри" && <tr className={s.card__character_row}>
                    <th className={s.card__character_sel}>{"Ширина(см)"}</th>
                    <th className={s.card__character_sel}>{"Країна виробник"}</th>
                    <th className={s.card__character_sel}>{"Довжина(см)"}</th>
                    <th className={s.card__character_sel}>{"Тип ковдри"}</th>
                    <th className={s.card__character_sel}>{"Ступінь теплоти"}</th>
                    <th className={s.card__character_sel}>{"За технологією пошиття"}</th>
                    <th className={s.card__character_sel}>{"Наповнювач"}</th>
                    <th className={s.card__character_sel}>{"Матеріал чохла"}</th>
                    <th className={s.card__character_sel}>{"Густина наповнювача"}</th>
                </tr>}
                {type === "Подушки" && <tr className={s.card__character_row}>
                    <th className={s.card__character_sel}>{"Вага(гр)"}</th>
                    <th className={s.card__character_sel}>{"Ширина подушки(см)"}</th>
                    <th className={s.card__character_sel}>{"Довжина подушки(см)"}</th>
                    <th className={s.card__character_sel}>{"Країна виробник"}</th>
                    <th className={s.card__character_sel}>{"Ортопедичні властивості"}</th>
                    <th className={s.card__character_sel}>{"Тип"}</th>
                    <th className={s.card__character_sel}>{"Застібка наволочки"}</th>
                    <th className={s.card__character_sel}>{"Наповнювач"}</th>
                    <th className={s.card__character_sel}>{"Форма"}</th>
                    <th className={s.card__character_sel}>{"Матеріал напірника/чохла"}</th>
                </tr>}
            </thead>
            <tbody className={s.card__character_head}>
                <tr className={s.card__character_row}>
                    {property.map((char, i) => (
                        <td key={i} className={s.card__character_sel}>{char}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}