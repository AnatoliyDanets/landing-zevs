import PropTypes from "prop-types"
import s from "./SectionTitle.module.css";

export default function SectionTitle({ style, name }) {
    return (
        <h2 style={style} className={s.title}>
            {name}
        </h2>
    );
}

SectionTitle.propTypes = {
    style: PropTypes.object,
    name: PropTypes.node
}
