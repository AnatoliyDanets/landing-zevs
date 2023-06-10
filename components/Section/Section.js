import PropTypes from "prop-types"
import s from "./Section.module.css";

export default function Section({ children, id, style }) {
    return (
        <section id={id} style={style} className={s.section}>
            {children}
        </section>
    );
}

Section.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}