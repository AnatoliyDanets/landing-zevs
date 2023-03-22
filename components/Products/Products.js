import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ProductBlankets from "../ProductBlankets/ProductList";


const DisplayCart = dynamic(() => import("../DisplayCart"));
const SuccessOrder = dynamic(() => import("../SuccessOrder"));
const Cart = dynamic(() => import("../Cart"));
const Modal = dynamic(() => import("../Modal"));

export default function Products({ products, locale }) {
    const [showCart, setShowCart] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [items, setItems] = useState(() => {
        if (typeof window !== "undefined") {
            const savedItem = localStorage.getItem("items");
            const parsedItem = JSON.parse(savedItem);
            return parsedItem || [];
        }
    });
    const [cartItem, setCartItem] = useState([]);

    const quantityInCart = items?.reduce(
        (acc, el) => (acc.find(({ _id }) => el._id === _id) || acc.push(el), acc),
        []
    ).reduce((acc, el) => acc + el.count, 0);


    const handleShowCart = () => {
        setShowCart((prev) => !prev);
    };
    const handleShowSuccess = () => {
        setShowSuccess((prev) => !prev);
        setShowCart(false);
    };
    const handleIncrement = (e) => {
        const findItems = items.find((el) => el._id === e.target.id);
        const newItems = [
            ...items,
            {
                ...findItems,
                ...(findItems.count += 1),
                ...(findItems.totalPrice =
                    Number(
                        +findItems.discount > 0
                            ? +findItems.price -
                            (+findItems.discount / 100) * +findItems.price
                            : +findItems.price
                    ) * Number(findItems.count)),
            },
        ];
        setItems([...newItems]);
    };
    const handleDecrement = (e) => {
        const findItems = items.find((el) => el._id === e.target.id);
        const newItems = [
            ...items,
            {
                ...findItems,
                ...(findItems.count <= 1
                    ? (findItems.count = 1)
                    : (findItems.count -= 1)),
                ...(findItems.totalPrice =
                    Number(
                        +findItems.discount > 0
                            ? +findItems.price -
                            (+findItems.discount / 100) * +findItems.price
                            : +findItems.price
                    ) * Number(findItems.count)),
            },
        ];
        setItems([...newItems]);
    };

    const handleRemoveProduct = (id) => {
        const findItems = items?.filter((el) => el._id !== id);
        setItems([...findItems]);
    };



    useEffect(() => {
        if (items?.length > 0) {
            const updateCart = items?.map(el => [products?.find(val => val._id === el._id)]
                .reduce((acc, item) => {
                    acc._id = item._id
                    acc.model = item.model[locale];
                    acc.size = item.size;
                    acc.count = el.count;
                    acc.discount = item.discount;
                    acc.cards = item.cards
                    acc.price = item.price
                    acc.height = item.height
                    acc.totalPrice = el.totalPrice
                    return acc;
                }, {})
            )


            setItems(updateCart)
        }

    }, [products, items?.length])

    useEffect(() => {
        const filterItems = items.reduce(
            (acc, el) => (acc.find(({ _id }) => el._id === _id) || acc.push(el), acc),
            []
        );

        if (items?.length >= 0)
            localStorage.setItem("items", JSON.stringify(filterItems));
    }, [items]);
    useEffect(() => {
        if (items?.length > 0) {
            setCartItem(items);
        } else {
            if (!showSuccess) {
                setShowCart(false);
            }
            setCartItem([]);
        }

        if (cartItem?.length === 0) {
            setShowCart(false);
        }
    }, [items, showSuccess]);

    return (
        <>

            <ProductBlankets products={products} set={setItems} items={items} locale={locale} />
            {cartItem?.length > 0 && !showCart && (
                <DisplayCart
                    handleShowCart={handleShowCart}
                    quantityInCart={quantityInCart}
                />
            )}

            <Modal
                show={showCart}
                style={showSuccess && { height: "150px" }}
                onClose={showSuccess ? handleShowSuccess : handleShowCart}
            >
                {showSuccess ? (
                    <SuccessOrder
                        onClick={() => {
                            setShowCart(false), setShowSuccess(false);
                        }}
                    />
                ) : (
                    <Cart
                        cartProduct={items}
                        increment={handleIncrement}
                        decrement={handleDecrement}
                        removeClick={handleRemoveProduct}
                        set={setItems}
                        handleShowIsSuccess={setShowSuccess}
                    />
                )}
            </Modal>
        </>
    );
}

