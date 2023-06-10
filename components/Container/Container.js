import PropTypes from "prop-types"

import s from "./Container.module.css"

export default function Container({ style, children }) {
    return (
        <div className={s.container} style={style}>{children}</div>
    )
}

Container.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node
}