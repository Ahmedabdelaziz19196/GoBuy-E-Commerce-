import { useEffect, useState } from "react";
import "./FavProducts.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
export default function FavProducts({ favProductsShowed, favProducts }) {
    const [slicedFavProducts, setSlicedFavProducts] = useState([]);
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
                        `fav-selection`,
                        favProductsShowed && "fav-clicked"
                    )}
                >
                    {slicedFavProducts.map((ele, index) => (
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
                        View Wishlist
                    </button>
                </div>
            )}
        </>
    );
}
