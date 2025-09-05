import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import { useState } from "react";

export default function LaptopsSquareView() {
    const [viweProduct, setViewProduct] = useState(null);
    const [favIconHoverd, setFavIconHoverd] = useState(false);
    const [favshopHoverd, setShopIconHoverd] = useState(false);
    return (
        <Grid container spacing={1} sx={{ marginTop: "10px" }}>
            {Array(24)
                .fill(0)
                .map((ele, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }}>
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
                                <img
                                    src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
                                    alt="laptop"
                                    style={{
                                        width: "100%",
                                        borderRadius: "10px",
                                        background: "#f6f8fa",
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
                                        10,500 EGP
                                    </h5>
                                    <img
                                        src="imgs/brands/lenovo.png"
                                        alt="brand"
                                        style={{
                                            height: "20px",
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
                                            viweProduct === index ? "" : "none",
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
                                        title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                                    >
                                        Asus ROG Strix SCAR 18 G835LR-AI3201W
                                        Gaming Laptop Intel Core Ultra 9 275HX
                                        1TB SSD 16GB Ram Nvidia GeForce RTX 5070
                                        Ti 12GB 18'' Inch 2.5K WQXGA Win.11 -
                                        Off Black...
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
                                    title="MSI Titan 18 HX AI A2XWJG Gaming Laptop Intel Core Ultra 9 ..."
                                >
                                    Asus ROG Strix SCAR 18 G835LR-AI3201W Gaming
                                    Laptop Intel Core Ultra 9 275HX 1TB SSD 16GB
                                    Ram Nvidia GeForce RTX 5070 Ti 12GB 18''
                                    Inch 2.5K WQXGA Win.11 - Off Black...
                                </p>
                                <Tooltip
                                    title="Add To Wisthlist"
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
                                            setFavIconHoverd(true)
                                        }
                                        onMouseLeave={() =>
                                            setFavIconHoverd(false)
                                        }
                                    >
                                        {favIconHoverd ? (
                                            <FavoriteIcon
                                                sx={{
                                                    color: "var(--main-color)",
                                                    fontSize: "26x",
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
                                    title="Add To Cart"
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
                                            setShopIconHoverd(true)
                                        }
                                        onMouseLeave={() =>
                                            setShopIconHoverd(false)
                                        }
                                    >
                                        {favshopHoverd ? (
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
                    </Grid>
                ))}
        </Grid>
    );
}
