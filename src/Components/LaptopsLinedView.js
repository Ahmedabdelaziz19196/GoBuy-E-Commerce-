// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { useState } from "react";

export default function LaptopsLinedView() {
    // const [viweProduct, setViewProduct] = useState(null);
    // const [favIconHoverd, setFavIconHoverd] = useState(false);
    // const [favshopHoverd, setShopIconHoverd] = useState(false);
    const [openToast, setOpenToast] = useState(false);
    return (
        <Grid container spacing={1} sx={{ marginTop: "10px" }}>
            {Array(24)
                .fill(0)
                .map((ele, index) => (
                    <Grid key={index} size={12}>
                        <div
                            style={{
                                border: "1px solid #b3b3b3",
                                padding: "10px",
                                borderRadius: "10px",
                                cursor: "pointer",
                                background: "#fff",
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                            }}
                            // onMouseOver={() => setViewProduct(index)}
                            // onMouseOut={() => setViewProduct(null)}
                        >
                            <div
                                className="product-details "
                                style={{
                                    zIndex: 1,
                                    position: "relative",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "top",
                                    height: "200px",
                                    gap: "10px",
                                }}
                            >
                                <img
                                    src="/imgs/laptops silder/BenQ_MOBIUZ_EX271.png"
                                    alt="laptop"
                                    style={{
                                        height: "100%",
                                        borderRadius: "10px",
                                        background: "#f6f8fa",
                                    }}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "top",
                                        }}
                                    >
                                        <p style={{ fontWeight: "bold" }}>
                                            Asus ROG Strix SCAR 18
                                            G835LR-AI3201W Gaming Laptop Intel
                                            Core Ultra 9 275HX 1TB SSD 16GB Ram
                                            Nvidia GeForce RTX 5070 Ti 12GB 18''
                                            Inch 2.5K WQXGA Win.11 - Off Black
                                        </p>
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
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "5px",
                                            color: "#777",
                                            fontSize: "13px",
                                        }}
                                    >
                                        <p>SKU:83K100F0ED</p>
                                        <ContentCopyIcon
                                            sx={{ fontSize: "inherit" }}
                                            onClick={() => {
                                                navigator.clipboard
                                                    .writeText("83K100F0ED")
                                                    .then(() => {
                                                        setOpenToast(true);
                                                        setTimeout(() => {
                                                            setOpenToast(false);
                                                        }, 3000);
                                                    });
                                            }}
                                        />
                                        <Snackbar open={openToast}>
                                            <SnackbarContent
                                                message="SKU Copied"
                                                sx={{
                                                    backgroundColor:
                                                        "var(--main-color)",
                                                    color: "white",
                                                }}
                                            />
                                        </Snackbar>
                                    </div>
                                    <div>
                                        <p>
                                            <span>
                                                <span>Brand:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    Lenovo
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>Laptop Model:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    IdeaPad Slim 3 15IRH10
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>Processor:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    Intel Core i7-13620H
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>RAM:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    16GB
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>Storage:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    512GB SSD
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>Graphics:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    Integrated Intel UHD
                                                    Graphics
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>Display:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    15.3" Inch WUXGA
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>Operating System:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    Dos
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>Color:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    Luna Grey
                                                </strong>
                                            </span>{" "}
                                            |{" "}
                                            <span>
                                                <span>Warranty:</span>{" "}
                                                <strong
                                                    style={{
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    2 Years
                                                </strong>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "400px",
                                        height: "100%",
                                        borderLeft: "1px solid #e7e7e7",
                                        paddingLeft: "10px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "5px",
                                    }}
                                >
                                    <h5
                                        style={{
                                            fontSize: "18px",
                                            margin: "0px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        10,500 EGP
                                    </h5>
                                    <div
                                        className="gategories d-md-flex d-lg-flex align-items-center justify-content-center d-none gap-2 "
                                        // onClick={handleShowCategories}
                                    >
                                        <FavoriteIcon />
                                        <p>To Wisthlist</p>
                                    </div>
                                    <div
                                        className="gategories d-md-flex d-lg-flex align-items-center justify-content-center d-none gap-2"
                                        // onClick={handleShowCategories}
                                    >
                                        <ShoppingBagIcon />
                                        <p>To Cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
        </Grid>
    );
}
