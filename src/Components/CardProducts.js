// import "./CartProducts.css";
import "./CardProducts.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CartProducts({ cartProductsShowed, cartProducts }) {
    console.log(cartProducts);
    const [slicedCartProducts, setSlicedCartProducts] = useState([]);
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
                        "cart-selection",
                        cartProductsShowed && "cart-clicked"
                    )}
                >
                    {slicedCartProducts.map((ele) => (
                        <Link
                            to={`/laptops/${ele.productid}`}
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <div key={ele.productid}>
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
                                            {ele.price}
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
                    <button
                        className="gategories pt-1 pb-1"
                        // onClick={(event) =>
                        //     handleSavedFavProductsSatet(
                        //         ele.productid,
                        //         event
                        //     )
                        // }
                        style={{ width: "50%" }}
                    >
                        View Cart
                    </button>
                </div>
            )}
        </>
    );
}
