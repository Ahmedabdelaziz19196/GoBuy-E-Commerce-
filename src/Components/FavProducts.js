import { useContext, useEffect, useState } from "react";
import "./FavProducts.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import LanguageContext from "../Context/LanguageContext";
export default function FavProducts({ favProductsShowed, favProducts }) {
    const [slicedFavProducts, setSlicedFavProducts] = useState([]);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        if (favProducts) {
            const theList = favProducts.slice(0, 2);
            setSlicedFavProducts([...theList].reverse());
        }
    }, [favProducts]);
    return (
        <>
            {favProducts.length > 0 && (
                <div
                    className={clsx(
                        `fav-selection ${language}`,
                        favProductsShowed && "fav-clicked"
                    )}
                >
                    {slicedFavProducts.map((ele) => (
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
                    <Link
                        to="/wishlist"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <button
                            className="gategories pt-1 pb-1"
                            style={{ width: "50%" }}
                        >
                            View Wishlist
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
}
