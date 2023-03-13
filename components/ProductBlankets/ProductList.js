import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Container from "../Container";
import Section from "../Section";
import FilterProducts from "../FilterProducts";
import ProductItem from "./ProductItem/ProductItem";
import SectionTitle from "../SectionTitle";
import s from "./ProductList.module.css";

const textAnmation = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function ProductList({ products, set, items, locale }) {

  const blanket = {
    uk: "Ковдри",
    ru: "Одеяла"
  };
  const pillow = {
    uk: "Подушки",
    ru: "Подушки"
  };
  const [currentCategory, setCurrentCategory] = useState(locale === "uk" ? "Ковдри" : "Одеяла");
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFilterBlankets = (e) => {

    setCurrentCategory(blanket[locale]);
    if (+e?.target.dataset.index !== activeIndex) {
      setActiveIndex(+e?.target.dataset.index);
      setActiveOne(true);
      setActiveTwo(false);
    } else {
      setActiveOne(false);
    }
  };
  const handleFilterPillows = (e) => {
    setCurrentCategory(pillow[locale]);
    if (+e.target.dataset.index !== activeIndex) {
      setActiveIndex(+e.target.dataset.index);
      setActiveTwo(true);
      setActiveOne(false);
    } else {
      setActiveTwo(false);
    }
  };

  useEffect(() => {
    handleFilterBlankets();
    setActiveOne(true);
  }, [locale, products]);

  return (
    <Section id={"Products"}>
      <Container>
        <SectionTitle name={<FormattedMessage id="page.home.catalog_title" />
        } />
        <FilterProducts
          handleFilterBlankets={handleFilterBlankets}
          handleFilterPillows={handleFilterPillows}
          activeOne={activeOne}
          activeTwo={activeTwo}
        />
        <ul className={s.products}>
          {products
            .filter((el) => el.category[locale] === currentCategory)
            .reduce(
              (acc, el) => (
                acc.find(({ model }) => el.model[locale] === model[locale]) || acc.push(el), acc
              ),
              []
            )
            .map(({ _id, model }) => (
              <motion.li
                key={_id}
                className={s.products__item}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
                custom={2}
                variants={textAnmation}
              >

                <ProductItem
                  id={_id}
                  arr={products}
                  set={set}
                  items={items}
                  text={model[locale]}
                  locale={locale}
                />
              </motion.li>
            ))}
        </ul>
      </Container>
    </Section>
  );
}
