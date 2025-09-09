import Grid from "@mui/material/Grid";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";

export default function LaptopsListView({ currentProducts }) {
    const [openToast, setOpenToast] = useState(false);
    return (
        <Grid container spacing={1} sx={{ marginTop: "10px" }}>
            {currentProducts.map((ele, index) => (
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
                        className="listed-product"
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
                                src={ele.productImageOne}
                                alt="laptop"
                                style={{
                                    height: "100%",
                                    borderRadius: "10px",
                                    boxShadow: "#0000001a 0px 0px 10px",
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
                                        gap: "5px",
                                    }}
                                >
                                    <p style={{ fontWeight: "bold" }}>
                                        {ele.description}
                                    </p>
                                    <img
                                        src={ele.brandImage}
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
                                    <p>
                                        SKU:
                                        {ele.productid}
                                    </p>
                                    <ContentCopyIcon
                                        sx={{ fontSize: "inherit" }}
                                        onClick={() => {
                                            navigator.clipboard
                                                .writeText(ele.productid)
                                                .then(() => {
                                                    setOpenToast(true);
                                                    setTimeout(() => {
                                                        setOpenToast(false);
                                                    }, 2000);
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
                                                boxShadow: "none",
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
                                                {ele.brand}
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
                                                {ele.productName}
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
                                                {ele.processor.name}
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
                                                {ele.processor.size}
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
                                                {ele.processor.storage}
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
                                                {ele.graphics.name}
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
                                                {ele.display.size}
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
                                                {ele.os}
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
                                                {ele.color}
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
                                                {ele.warranty}
                                            </strong>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div
                                style={{
                                    minWidth: "200px",
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
                                    {ele.price}
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
