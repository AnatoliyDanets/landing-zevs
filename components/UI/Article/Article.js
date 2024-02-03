import PropTypes from "prop-types";


export default function Article({ classname, children }) {
    return <article className={classname}>{children}</article>;
}

Article.propTypes = {
    children: PropTypes.node,
};
