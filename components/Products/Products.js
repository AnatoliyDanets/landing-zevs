import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState} from "react";
import { FormattedMessage } from "react-intl";
import ProductBlankets from "../ProductBlankets/ProductList";
import { useRouter } from "next/router";

const DisplayCart = dynamic(() => import("../DisplayCart"));
const SuccessOrder = dynamic(() => import("../SuccessOrder"));
const ErrorOrder = dynamic(() => import("../ErrorOrder"));
const Cart = dynamic(() => import("../Cart"));
const Modal = dynamic(() => import("../Modal"));

export default function Products({ products, locale }) {
    const [currentDate, setCurrentDate] = useState(Date.now());
    const router = useRouter();

    const [showCart, setShowCart] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showIsSuccessMessage, setShowIsSuccessMessage] = useState(false);

    const [showError, setShowError] = useState(false);
    const [items, setItems] = useState(() => {
        if (typeof window !== "undefined") {
            const savedItem = localStorage.getItem("zevipprod");
            const parsedItem = JSON.parse(savedItem);
            return parsedItem || [];
        }
    });
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(Date.now());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const changeDiscountProduct = async (data, id) => {
        try {
            const res = await axios.patch(`${process.env.API_PRODUCTS}/${id}`, data);
            if (res.status === 200) {
                console.log("Discount :0");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const dataDiscount = {
            discount: 0,
            discount_time: 0,
        };

        products
            .filter((el) => el.discount > 0)
            .map((el) => {
                if (currentDate > el.discount_time) {
                    changeDiscountProduct(dataDiscount, el._id);
                    router.replace(router.asPath, undefined, { scroll: false });
                }
                return;
            });
    }, [currentDate, products, router, router.asPath]);

    const quantityInCart = items
        ?.reduce(
            (acc, el) => (acc.find(({ _id }) => el._id === _id) || acc.push(el), acc),
            []
        )
        .reduce((acc, el) => acc + el.count, 0);

    const handleShowCart = () => {
        setShowCart((prev) => !prev);
    };
    const handleShowSuccess = () => {
        setShowSuccess((prev) => !prev);
        setShowCart(false);
    };
    const handleShowIsSuccessMessage = () => {
        setShowIsSuccessMessage((prev) => !prev);
        setShowCart(false);
    };
    const handleShowError = () => {
        setShowError((prev) => !prev);
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
            const updateCart = items
                ?.filter((item) => {
                    return item?._id === products.find((el) => el._id == item._id)?._id;
                })
                .map((el) =>
                    [products?.find((val) => val._id === el._id)].reduce((acc, item) => {
                        acc._id = item?._id;
                        acc.model = item?.model[locale];
                        acc.size = item?.size;
                        acc.count = el.count;
                        acc.discount = item?.discount;
                        acc.cards = item?.cards;
                        acc.price = item?.price;
                        acc.height = item?.height;
                        acc.totalPrice =
                            item?.discount > 0
                                ? +(
                                    (+item?.price - (+item.discount / 100) * +item.price) *
                                    +el.count
                                ).toFixed(2)
                                : +el.count * +item.price?.toFixed(2);
                        return acc;
                    }, {})
                );

            setItems([...updateCart]);
        }
    }, [products, items?.length]);

    useEffect(() => {
        const filterItems = items.reduce(
            (acc, el) => (acc.find(({ _id }) => el._id === _id) || acc.push(el), acc),
            []
        );

        if (items?.length >= 0)
            localStorage.setItem("zevipprod", JSON.stringify(filterItems));
    }, [items]);

    useEffect(() => {
        if (items?.length > 0) {
            setCartItem(items);
        } else {
            if (!showSuccess && !showIsSuccessMessage) {
                setShowCart(false);
            }
            setCartItem([]);
        }

        if (cartItem?.length === 0) {
            setShowCart(false);
        }
    }, [items, showSuccess, showIsSuccessMessage]);

    return (
        <>
            <ProductBlankets
                products={products}
                set={setItems}
                items={items}
                locale={locale}
            />
            {cartItem?.length > 0 && !showCart && (
                <DisplayCart
                    handleShowCart={handleShowCart}
                    quantityInCart={quantityInCart}
                />
            )}

            <Modal
                show={showCart}
                style={
                    (showSuccess || showIsSuccessMessage || showError) && {
                        height: "150px",
                    }
                }
                onClose={
                    showIsSuccessMessage
                        ? handleShowIsSuccessMessage
                        : handleShowCart
                            ? showError
                                ? handleShowError
                                : handleShowCart
                                    ? showSuccess
                                        ? handleShowSuccess
                                        : handleShowCart
                                    : handleShowCart
                            : handleShowIsSuccessMessage
                }
            >
                {showSuccess && (
                    <SuccessOrder
                        onClick={() => {
                            setShowCart(false), setShowSuccess(false);
                        }}
                        message={<FormattedMessage id="page.home.success_order_in" />}
                    />
                )}
                {showIsSuccessMessage && (
                    <SuccessOrder
                        onClick={() => {
                            setShowCart(false), setShowIsSuccessMessage(false);
                        }}
                        message={<FormattedMessage id="page.home.success_order_out" />}
                    />
                )}

                {showError && (
                    <ErrorOrder
                        onClick={() => {
                            setShowCart(false), setShowError(false);
                        }}
                    />
                )}

                {!(showSuccess || showIsSuccessMessage || showError) && (
                    <Cart
                        cartProduct={items}
                        increment={handleIncrement}
                        decrement={handleDecrement}
                        removeClick={handleRemoveProduct}
                        set={setItems}
                        handleShowIsSuccess={setShowSuccess}
                        handleShowIsSuccessMessage={setShowIsSuccessMessage}
                        handleShowError={setShowError}
                    />
                )}
            </Modal>
        </>
    );
}

Products.propTypes = {
    products: PropTypes.array,
    locale: PropTypes.string,
};
