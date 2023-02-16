import Container from "../Container";
import Section from "../Section";
import ProductList from "../ProductList";
import ProductItemPillows from "../ProductItemPillows";
import SectionTitle from "../SectionTitle";



export default function ProductPillows({ products, set, items }) {
    return (
        <Section id={"Pillows"} >
            <Container >
                <SectionTitle name={"Подушки"} />
                <ProductList>
                    <ProductItemPillows arr={products} set={set} items={items} text={"Подушка кульковий холофайбер"} />
                    <ProductItemPillows arr={products} set={set} items={items} text={"Подушки штучний лебединий пух"} />
                    <ProductItemPillows arr={products} set={set} items={items} text={"Подушка бамбукова"} />
                </ProductList>
            </Container>
        </Section>
    );
}