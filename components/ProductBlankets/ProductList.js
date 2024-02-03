import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import Section from "../UI/Section";
import ProductItem from "./ProductItem/ProductItem";
import SectionTitle from "../UI/SectionTitle";
import s from "./ProductList.module.css";
import { memo } from 'react';



export default function ProductList({ products, set, items, locale }) {
  const blanket = {
    uk: "Ковдри",
    ru: "Одеяла",
  };
  const pillow = {
    uk: "Подушки",
    ru: "Подушки",
  };

  const findProductCategory = (products, category) => products
    .filter((el) => el.category[locale] === category[locale])

    .reduce(
      (acc, el) => (
        acc.find(({ model }) => el.model[locale] === model[locale]) ||
        acc.push(el),
        acc
      ),
      []
    )

  return (
    <Section id={"Products"}>
      <SectionTitle
        name={<FormattedMessage id="page.home.catalog_title" />}
      />
      <h3 id={"Blankets"} className={s.products__title}><FormattedMessage id="page.home.catalog_title_one" /></h3>
      <ul className={s.products}>
        {findProductCategory(products, blanket)
          .map(({ _id, model }) => (
            <li key={_id} className={s.products__item}>
              <ProductItem
                id={_id}
                arr={products}
                set={set}
                items={items}
                text={model[locale]}
                locale={locale}

              />
            </li>
          ))}
      </ul>
      <h3 id="Pillows" className={s.products__title}> <FormattedMessage id="page.home.catalog_title_two" /></h3>
      <ul className={s.products}>
        {findProductCategory(products, pillow)
          .map(({ _id, model }) => (
            <li key={_id} className={s.products__item}>
              <ProductItem
                id={_id}
                arr={products}
                set={set}
                items={items}
                text={model[locale]}
                locale={locale}

              />
            </li>
          ))}
      </ul>
    </Section>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
  set: PropTypes.func,
  items: PropTypes.array,
  locale: PropTypes.string
};