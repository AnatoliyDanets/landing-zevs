
import Container from "../Container";
import Section from "../Section";
import ProductList from "../ProductList";
import ProductItemBlankets from "../ProductItemBlankets/ProductItemBlankets";
import SectionTitle from "../SectionTitle";



export default function ProductBlankets({ products, set, items }) {
    return (
        <Section id={"Products"} >
            <Container >
                <SectionTitle name={"Ковдри"} />
                <ProductList>
                    <ProductItemBlankets arr={products} set={set} items={items} text={"Ковдра холлофайбер"} />
                    <ProductItemBlankets arr={products} set={set} items={items} text={"Ковдра вовняна"} />
                    <ProductItemBlankets arr={products} set={set} items={items} text={"Ковдра ZEVS VIP лебединий пух"} />
                </ProductList>
            </Container>
        </Section>
    );
}