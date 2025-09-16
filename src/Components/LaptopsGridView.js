import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLaptops } from "../Context/laptopsProducts";

export default function LaptopsGridView({
    currentProducts,
    setFavProducts,
    setCartProducts,
    favIconClickdedId,
    setFavIconClickedId,
    cartIconClickdedId,
    setCartIconClickedId,
}) {
    const [viweProduct, setViewProduct] = useState(null);
    const [favIconHoverdIndex, setFavIconHoverdIndex] = useState(null);
    const [cartIconHoverdIndex, setCartIconHoverdIndex] = useState(null);
    const { laptopsProductsList } = useLaptops();

    useEffect(() => {
        if (viweProduct === null) {
            setFavIconHoverdIndex(null);
            setCartIconHoverdIndex(null);
        }
    }, [viweProduct]);

    useEffect(() => {
        console.log(laptopsProductsList);
        setFavProducts(
            laptopsProductsList.filter(
                (ele) => favIconClickdedId[ele.productid]
            )
        );
        setCartProducts(
            laptopsProductsList.filter(
                (ele) => cartIconClickdedId[ele.productid]
            )
        );
    }, [
        favIconClickdedId,
        setFavProducts,
        cartIconClickdedId,
        setCartProducts,
        laptopsProductsList,
    ]);

    function handleSavedFavProductsSatet(productId, e) {
        e.preventDefault();
        const savedFavIndexes = {
            ...favIconClickdedId,
            [productId]: !favIconClickdedId[productId],
        };
        setFavIconClickedId(savedFavIndexes);
        localStorage.setItem(
            "favProductsIdsStates",
            JSON.stringify(savedFavIndexes)
        );
    }
    function handleSavedcartProductsSatet(productId, e) {
        e.preventDefault();
        const savedCartIndexes = {
            ...cartIconClickdedId,
            [productId]: !cartIconClickdedId[productId],
        };
        setCartIconClickedId(savedCartIndexes);
        localStorage.setItem(
            "cartProductsIdsStates",
            JSON.stringify(savedCartIndexes)
        );
    }
    return (
        <Grid container spacing={1} sx={{ marginTop: "10px" }}>
            {currentProducts.map((ele, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }}>
                    <Link
                        to={`/laptops/${ele.productid}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <div
                            style={{
                                border: "1px solid #b3b3b3",
                                padding: "10px",
                                borderRadius: "10px",
                                cursor: "pointer",
                                background: "#fff",
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                            }}
                            onMouseOver={() => setViewProduct(index)}
                            onMouseOut={() => setViewProduct(null)}
                        >
                            <div
                                className={`product-details ${
                                    viweProduct === index ? "hoverd" : ""
                                }`}
                                style={{
                                    zIndex: 1,
                                    position:
                                        viweProduct === index ? "relative" : "",
                                }}
                            >
                                <div>
                                    <img
                                        src={ele.productImageOne}
                                        alt="lapTop"
                                        style={{
                                            width: "100%",
                                            borderRadius: "10px",
                                            boxShadow: "#0000001a 0px 0px 10px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontSize: "18px",
                                                marginTop: "10px",
                                            }}
                                        >
                                            {ele.price}
                                        </h5>
                                        <img
                                            src={ele.brandImage}
                                            alt="brand"
                                            style={{
                                                height: "15px",
                                                background: "#f6f8fa",
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            position: "absolute",
                                            height: "50px",
                                            width: "100%",
                                            bottom: "-58px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            display:
                                                viweProduct === index
                                                    ? ""
                                                    : "none",
                                        }}
                                    >
                                        <p
                                            style={{
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                fontSize: "14px",
                                                transition: "0.2s",
                                            }}
                                        >
                                            {ele.description}
                                        </p>
                                    </div>
                                    <p
                                        style={{
                                            display:
                                                viweProduct === index
                                                    ? "none"
                                                    : "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            fontSize: "14px",
                                            transition: "0.2s",
                                        }}
                                    >
                                        {ele.description}
                                    </p>
                                </div>
                                <Tooltip
                                    title={
                                        favIconClickdedId[index]
                                            ? ""
                                            : "Add To Wisthlist"
                                    }
                                    arrow
                                    placement="right"
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            display:
                                                viweProduct === index
                                                    ? ""
                                                    : "none",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={() =>
                                            setFavIconHoverdIndex(index)
                                        }
                                        onMouseLeave={() =>
                                            setFavIconHoverdIndex(null)
                                        }
                                        onClick={(e) =>
                                            handleSavedFavProductsSatet(
                                                ele.productid,
                                                e
                                            )
                                        }
                                    >
                                        {favIconHoverdIndex === index ||
                                        favIconClickdedId[ele.productid] ? (
                                            <FavoriteIcon
                                                sx={{
                                                    color: "var(--main-color)",
                                                    fontSize: "26px",
                                                }}
                                            />
                                        ) : (
                                            <FavoriteBorderOutlinedIcon
                                                sx={{
                                                    color: "var(--main-color)",
                                                    fontSize: "26px",
                                                }}
                                            />
                                        )}
                                    </div>
                                </Tooltip>

                                <Tooltip
                                    title={
                                        cartIconClickdedId[index]
                                            ? ""
                                            : "Add To Cart"
                                    }
                                    arrow
                                    placement="right"
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "40px",
                                            right: "10px",
                                            display:
                                                viweProduct === index
                                                    ? ""
                                                    : "none",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={() =>
                                            setCartIconHoverdIndex(index)
                                        }
                                        onMouseLeave={() =>
                                            setCartIconHoverdIndex(null)
                                        }
                                        onClick={(e) =>
                                            handleSavedcartProductsSatet(
                                                ele.productid,
                                                e
                                            )
                                        }
                                    >
                                        {cartIconHoverdIndex === index ||
                                        cartIconClickdedId[ele.productid] ? (
                                            <ShoppingBagIcon
                                                sx={{
                                                    color: "var(--main-color)",
                                                    fontSize: "26px",
                                                }}
                                            />
                                        ) : (
                                            <ShoppingBagOutlinedIcon
                                                sx={{
                                                    color: "var(--main-color)",
                                                    fontSize: "26px",
                                                }}
                                            />
                                        )}
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}
