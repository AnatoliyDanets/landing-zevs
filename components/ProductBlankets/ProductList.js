import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Container from "../Container";
import Section from "../Section";
import ProductItem from "./ProductItem/ProductItem";
import SectionTitle from "../SectionTitle";
import s from "./ProductList.module.css";



export default function ProductList({ products, set, items, locale }) {
  const blanket = {
    uk: "Ковдри",
    ru: "Одеяла",
  };
  const pillow = {
    uk: "Подушки",
    ru: "Подушки",
  };


  return (
    <Section id={"Products"}>
      <Container>
        <SectionTitle
          name={<FormattedMessage id="page.home.catalog_title" />}
        />
        <h3 id={"Blankets"} className={s.products__title}><FormattedMessage id="page.home.catalog_title_one" /></h3>
        <ul className={s.products}>
          {products
            .filter((el) => el.category[locale] === blanket[locale])

            .reduce(
              (acc, el) => (
                acc.find(({ model }) => el.model[locale] === model[locale]) ||
                acc.push(el),
                acc
              ),
              []
            )
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
          {products
            .filter((el) => el.category[locale] === pillow[locale])

            .reduce(
              (acc, el) => (
                acc.find(({ model }) => el.model[locale] === model[locale]) ||
                acc.push(el),
                acc
              ),
              []
            )
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
      </Container>
    </Section>
  );
}
