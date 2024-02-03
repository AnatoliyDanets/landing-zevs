import PropTypes from "prop-types";
import Container from "../Container/Container";
import s from "./Section.module.css";

export default function Section({ children, id, style }) {
    return (
        <section id={id} style={style} className={s.section}>
            <Container>{children}</Container>
        </section>
    );
}

Section.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};
