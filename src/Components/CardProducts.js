// import "./CartProducts.css";
import "./CardProducts.css";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../Context/LanguageContext";
export default function CartProducts({
    cartProductsShowed,
    cartProducts,
    numberOfOrders,
}) {
    const [slicedCartProducts, setSlicedCartProducts] = useState([]);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        if (cartProducts) {
            const theList = cartProducts.slice(0, 2);
            setSlicedCartProducts([...theList].reverse());
        }
    }, [cartProducts]);
    return (
        <>
            {cartProducts.length > 0 && (
                <div
                    className={clsx(
                        `cart-selection ${language}`,
                        cartProductsShowed && "cart-clicked"
                    )}
                >
                    {slicedCartProducts.map((ele) => (
                        <Link
                            to={`/laptops/${ele.productid}`}
                            style={{ color: "inherit", textDecoration: "none" }}
                            key={ele.productid}
                        >
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        gap: "10px",
                                        cursor: "pointer",
                                        padding: "5px",
                                    }}
                                    className="theProduct"
                                >
                                    <img
                                        src={ele.productImageOne}
                                        alt="fav-product"
                                        style={{
                                            height: "60px",
                                            borderRadius: "5px",
                                        }}
                                    />
                                    <div>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "var(--main-color)",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {ele.description}
                                        </p>
                                        <p style={{ fontWeight: "bold" }}>
                                            {numberOfOrders[ele.productid] || 1}{" "}
                                            x {ele.price}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        background: "#e3e3e4ff",
                                        height: "1px",
                                        width: "100%",
                                        margin: "5px 0px",
                                    }}
                                ></div>
                            </div>
                        </Link>
                    ))}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Link
                            to="/cart"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <button className="gategories pt-1 pb-1">
                                View Cart
                            </button>
                        </Link>
                        <Link
                            to="/checkout"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <button className="gategories pt-1 pb-1">
                                Check Out
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
