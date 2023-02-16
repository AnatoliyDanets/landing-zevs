import s from "./ProductList.module.css";

export default function ProductList({ children }) {
    return <ul className={s.products}>{children}</ul>;
}
