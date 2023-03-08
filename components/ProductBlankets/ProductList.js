import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

export default function ProductList({ products, set, items }) {
  const [catalog, setCatalog] = useState([]);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFilterBlankets = (e) => {
    const blankets = products
      .filter((el) => el.category === "Ковдри")
      .reduce(
        (acc, el) => (
          acc.find(({ model }) => el.model === model) || acc.push(el), acc
        ),
        []
      );
    setCatalog(blankets);
    if (+e?.target.dataset.index !== activeIndex) {
      setActiveIndex(+e?.target.dataset.index);
      setActiveOne(true);
      setActiveTwo(false);
    } else {
      setActiveOne(false);
    }
  };
  const handleFilterPillows = (e) => {
    const pillows = products
      .filter((el) => el.category === "Подушки")
      .reduce(
        (acc, el) => (
          acc.find(({ model }) => el.model === model) || acc.push(el), acc
        ),
        []
      );
    setCatalog(pillows);
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
  }, []);

  return (
    <Section id={"Products"}>
      <Container>
        <SectionTitle name={"Каталог"} />
        <FilterProducts
          handleFilterBlankets={handleFilterBlankets}
          handleFilterPillows={handleFilterPillows}
          activeOne={activeOne}
          activeTwo={activeTwo}
        />
        <ul className={s.products}>
          {catalog.map(({ _id, model }) => (
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              custom={1}
              variants={textAnmation}
              key={_id}
              className={s.products__item}
            >
              <ProductItem
                id={_id}
                arr={products}
                set={set}
                items={items}
                text={model}
              />
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}