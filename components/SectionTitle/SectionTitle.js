import s from "./SectionTitle.module.css";

export default function SectionTitle({ style, name }) {
    return (
        <h2 style={style} className={s.title}>
            {name}
        </h2>
    );
}
