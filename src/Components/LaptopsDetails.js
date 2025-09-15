import "./LaptopsDetails.css";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import LinearProgress from "@mui/material/LinearProgress";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { clsx } from "clsx";
import { SnackbarContent } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFilter } from "../Context/ProductFilters";
import LaptopDetailsHeader from "./LaptopDetailsHeader";
import { useEffect, useState } from "react";

export default function LaptopsDetails({
    favIconClickdedIndex,
    setFavIconClickedIndex,
    cartIconClickdedIndex,
    setCartIconClickedIndex,
}) {
    const [product, setProduct] = useState(null);
    const [viewedImgURL, setViewedImgURL] = useState(null);
    const [listImgToView, setListImgToView] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openToast, setOpenToast] = useState(false);
    const [productIndex, setProductIndex] = useState();
    const [numberOfOrders, setNumberOfOrders] = useState(1);
    const { productId } = useParams();
    const { FilteredLapstopsProductsList } = useFilter();
    useEffect(() => {
        const theProduct = FilteredLapstopsProductsList.find(
            (ele) => ele.productid === productId
        );
        const theIndex = FilteredLapstopsProductsList.findIndex(
            (ele) => ele.productid === productId
        );
        setProduct(theProduct);
        setProductIndex(theIndex);
    }, [FilteredLapstopsProductsList, productId, product]);
    // console.log(favIconClickdedIndex[productIndex]);
    //set img ot view
    useEffect(() => {
        if (product) {
            const imgList = [
                product.productImageOne,
                product.productImageTwo,
                product.productImageThree,
                product.productImageFour,
                product.productImageFive,
            ].filter(Boolean);
            setListImgToView(imgList);
            setViewedImgURL(imgList[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <div style={{ height: "calc(100vh - 443.61px )" }}>
                <div style={{ zIndex: "999" }}>
                    <LinearProgress style={{ background: "white" }} />
                </div>
            </div>
        );
    }

    function handleSavedFavProductsSatet() {
        const savedFavIndexes = {
            ...favIconClickdedIndex,
            [productIndex]: !favIconClickdedIndex[productIndex],
        };
        setFavIconClickedIndex(savedFavIndexes);
        localStorage.setItem(
            "favProductsIndexsStates",
            JSON.stringify(savedFavIndexes)
        );
    }
    function handleSavedcartProductsSatet() {
        const savedCartIndexes = {
            ...cartIconClickdedIndex,
            [productIndex]: !cartIconClickdedIndex[productIndex],
        };
        setCartIconClickedIndex(savedCartIndexes);
        localStorage.setItem(
            "cartProductsIndexsStates",
            JSON.stringify(savedCartIndexes)
        );
    }
    return (
        <>
            <LaptopDetailsHeader product={product} />
            <div style={{ padding: "0px 20px" }}>
                <h5>{product.description}</h5>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 12, md: 7, lg: 8 }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "top",
                            }}
                            className="flex-column-reverse flex-lg-row justify-content-center"
                        >
                            <div>
                                <ul className="d-flex d-flex d-lg-block justify-content-center">
                                    {listImgToView.map((img, index) => (
                                        <li key={index}>
                                            <img
                                                src={img}
                                                alt="laptop"
                                                style={{
                                                    width: "70px",
                                                    cursor: "pointer",
                                                    marginBottom: "3px",
                                                    borderRadius: "5px",
                                                }}
                                                className="listed-img"
                                                onMouseOver={() => {
                                                    setTimeout(() => {
                                                        setViewedImgURL(img);
                                                    }, 300);
                                                    setCurrentImageIndex(index);
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                style={{
                                    background: "white",
                                    height: "500px",
                                    maxWidth: "100%",
                                    flex: "1",
                                    justifyContent: "center",
                                    display: "flex",
                                }}
                                className="main-img"
                            >
                                <img
                                    src={viewedImgURL}
                                    alt="main img"
                                    style={{
                                        height: "100%",
                                        opacity:
                                            listImgToView.indexOf(
                                                viewedImgURL
                                            ) === currentImageIndex
                                                ? "1"
                                                : "0",
                                        transition: "0.3s",
                                    }}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 5, lg: 4 }}>
                        <div
                            style={{
                                borderRadius: "10px",
                                background: "#f6f8fa",
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                                padding: "16px",
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    color: "#777",
                                    fontSize: "13px",
                                    cursor: "pointer",
                                    justifyContent: "right",
                                }}
                                onClick={() => {
                                    navigator.clipboard
                                        .writeText(product.productid)
                                        .then(() => {
                                            setOpenToast(true);
                                            setTimeout(() => {
                                                setOpenToast(false);
                                            }, 2000);
                                        });
                                }}
                            >
                                <p>
                                    SKU:
                                    {product.productid}
                                </p>
                                <ContentCopyIcon sx={{ fontSize: "inherit" }} />
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
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <h4>{product.price}</h4>
                                    <p
                                        className={clsx(
                                            product.inStock
                                                ? "text-success"
                                                : "text-danger text-decoration-line-through"
                                        )}
                                    >
                                        In Stock
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src={product.brandImage}
                                        alt="brandLogo"
                                    />
                                </div>
                            </div>
                            <div>
                                <p>
                                    Brand:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.brand}
                                    </span>
                                </p>
                                <p>
                                    Laptop model:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.description
                                            .split(" ")
                                            .slice(0, 5)
                                            .join(" ")}
                                    </span>
                                </p>
                                <p>
                                    Processor:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.processor.name}
                                    </span>
                                </p>
                                <p>
                                    RAM:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.ram.size +
                                            " " +
                                            product.ram.type}
                                    </span>
                                </p>
                                <p>
                                    Storage:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.storage}
                                    </span>
                                </p>
                                <p>
                                    Graphics:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.graphics.name}
                                    </span>
                                </p>
                                <p>
                                    Display:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.display.size +
                                            " " +
                                            product.display.resolution +
                                            " " +
                                            product.display.refreshRate}
                                    </span>
                                </p>
                                <p>
                                    Operating system:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.os}
                                    </span>
                                </p>
                                <p>
                                    Color:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.color}
                                    </span>
                                </p>
                                <p>
                                    Warranty:{" "}
                                    <span
                                        style={{
                                            fontWeight: "bold",
                                            color: "var(--main-color)",
                                        }}
                                    >
                                        {product.warranty}
                                    </span>
                                </p>
                            </div>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <div
                                    style={{
                                        background: "white",
                                        width: "120px",
                                        height: "44px",
                                        borderRadius: "50px",
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                    }}
                                >
                                    <button
                                        style={{
                                            background: "var(--main-color)",
                                            width: "fit-content",
                                            borderRadius: "50%",
                                            padding: "5px",
                                            color: "white",
                                            cursor: "pointer",
                                            boxShadow:
                                                "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                                        }}
                                        className="gategories"
                                    >
                                        <RemoveIcon />
                                    </button>
                                    {numberOfOrders}
                                    <button
                                        style={{
                                            background: "var(--main-color)",
                                            width: "fit-content",
                                            borderRadius: "50%",
                                            padding: "5px",
                                            color: "white",
                                            cursor: "pointer",
                                            boxShadow:
                                                "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                                        }}
                                        className="gategories"
                                    >
                                        <AddIcon />
                                    </button>{" "}
                                </div>
                                <button
                                    className="gategories d-flex d-flex align-items-center justify-content-center  gap-2"
                                    style={{ borderRadius: "50%" }}
                                    onClick={() =>
                                        handleSavedcartProductsSatet()
                                    }
                                >
                                    {cartIconClickdedIndex[productIndex] ? (
                                        <ShoppingBagIcon />
                                    ) : (
                                        <ShoppingBagOutlinedIcon />
                                    )}
                                </button>
                                <div
                                    style={{
                                        background: "#b3b3b3",
                                        height: "44px",
                                        width: "1px",
                                    }}
                                ></div>
                                <button
                                    className="gategories d-flex d-flex align-items-center justify-content-center  gap-2 "
                                    style={{ borderRadius: "50%" }}
                                    onClick={() =>
                                        handleSavedFavProductsSatet()
                                    }
                                >
                                    {favIconClickdedIndex[productIndex] ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderOutlinedIcon />
                                    )}
                                </button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
