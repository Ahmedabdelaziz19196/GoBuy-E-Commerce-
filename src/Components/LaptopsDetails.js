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
import Accordion from "react-bootstrap/Accordion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
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
    setFavProducts,
    setCartProducts,
    numberOfOrders,
    setNumberOfOrders,
    favProducts,
    cartProducts,
}) {
    const [product, setProduct] = useState(null);
    const [viewedImgURL, setViewedImgURL] = useState(null);
    const [listImgToView, setListImgToView] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openToast, setOpenToast] = useState(false);
    const [productIndex, setProductIndex] = useState();
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
    }, [FilteredLapstopsProductsList, productId]);

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

    function handleSavedFavProductsSatet() {
        const isCurrentlyAdded = favIconClickdedIndex[productIndex];
        const savedFavIndexes = {
            ...favIconClickdedIndex,
            [productIndex]: !isCurrentlyAdded,
        };
        setFavIconClickedIndex(savedFavIndexes);
        localStorage.setItem(
            "favProductsIndexsStates",
            JSON.stringify(savedFavIndexes)
        );

        if (!isCurrentlyAdded) {
            setFavProducts((prev) => [...prev, product]);
        } else {
            setFavProducts((prev) =>
                prev.filter((p) => p.productid !== product.productid)
            );
        }
    }

    function handleSavedcartProductsSatet() {
        const isCurrentlyAdded = cartIconClickdedIndex[productIndex];
        const savedCartIndexes = {
            ...cartIconClickdedIndex,
            [productIndex]: !isCurrentlyAdded,
        };
        setCartIconClickedIndex(savedCartIndexes);
        localStorage.setItem(
            "cartProductsIndexsStates",
            JSON.stringify(savedCartIndexes)
        );

        if (!isCurrentlyAdded) {
            setCartProducts((prev) => [...prev, { ...product }]);
        } else {
            setCartProducts((prev) =>
                prev.filter((p) => p.productid !== product.productid)
            );
        }
    }

    if (!product) {
        return (
            <div style={{ height: "calc(100vh - 443.61px)" }}>
                <div style={{ zIndex: "999" }}>
                    <LinearProgress style={{ background: "white" }} />
                </div>
            </div>
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
                                <p>SKU: {product.productid}</p>
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
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                    marginBottom: "10px",
                                }}
                            >
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
                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginBottom: "10px",
                                }}
                            >
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
                                        onClick={() => {
                                            if (
                                                numberOfOrders[productIndex] > 1
                                            ) {
                                                const updatedOrders = {
                                                    ...numberOfOrders,
                                                    [productIndex]:
                                                        (numberOfOrders[
                                                            productIndex
                                                        ] || 0) - 1,
                                                };
                                                setNumberOfOrders(
                                                    updatedOrders
                                                );
                                                localStorage.setItem(
                                                    "numberForOrder",
                                                    JSON.stringify(
                                                        updatedOrders
                                                    )
                                                );
                                            }
                                        }}
                                    >
                                        <RemoveIcon />
                                    </button>
                                    {numberOfOrders[productIndex] || 1}
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
                                        onClick={() => {
                                            const updatedOrders = {
                                                ...numberOfOrders,
                                                [productIndex]:
                                                    (numberOfOrders[
                                                        productIndex
                                                    ] || 0) + 1,
                                            };
                                            setNumberOfOrders(updatedOrders);
                                            localStorage.setItem(
                                                "numberForOrder",
                                                JSON.stringify(updatedOrders)
                                            );
                                        }}
                                    >
                                        <AddIcon />
                                    </button>
                                </div>
                                <button
                                    className="gategories d-flex align-items-center justify-content-center gap-2"
                                    style={{ borderRadius: "50%" }}
                                    onClick={handleSavedcartProductsSatet}
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
                                    className="gategories d-flex align-items-center justify-content-center gap-2"
                                    style={{ borderRadius: "50%" }}
                                    onClick={handleSavedFavProductsSatet}
                                >
                                    {favIconClickdedIndex[productIndex] ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderOutlinedIcon />
                                    )}
                                </button>
                            </div>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        You Can Connect With Me
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <LinkedInIcon
                                                sx={{
                                                    fontSize: "30px",
                                                    color: "#0A66C2",
                                                }}
                                            />
                                            <p
                                                style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                linkedin:
                                            </p>
                                            <a
                                                href="https://www.linkedin.com/in/ahmed-abdelaziz-6351a3346/"
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        color: "black",
                                                        textDecoration: "none",
                                                        position: "relative",
                                                        fontSize: "20px",
                                                        paddingLeft: "3px",
                                                    }}
                                                    className="linkedin-link"
                                                >
                                                    ahmed-abdelaziz
                                                </p>
                                            </a>
                                        </div>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <GitHubIcon
                                                sx={{
                                                    fontSize: "30px",
                                                    color: "black",
                                                }}
                                            />
                                            <p
                                                style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                GitHub:
                                            </p>
                                            <a
                                                href="https://github.com/Ahmedabdelaziz19196"
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        color: "black",
                                                        textDecoration: "none",
                                                        position: "relative",
                                                        fontSize: "20px",
                                                        paddingLeft: "3px",
                                                    }}
                                                >
                                                    Ahmedabdelaziz
                                                </p>
                                            </a>
                                        </div>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <WhatsAppIcon
                                                sx={{
                                                    fontSize: "30px",
                                                    color: "#25D366",
                                                }}
                                            />
                                            <p
                                                style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Chat:
                                            </p>
                                            <a
                                                href="https://wa.me/201060054285"
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        color: "black",
                                                        textDecoration: "none",
                                                        position: "relative",
                                                        fontSize: "20px",
                                                        paddingLeft: "3px",
                                                    }}
                                                    className="whatsApp"
                                                >
                                                    01060054285
                                                </p>
                                            </a>
                                        </div>
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <CallIcon
                                                sx={{ fontSize: "30px" }}
                                            />
                                            <p
                                                style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Call:
                                            </p>
                                            <a
                                                href="tel:+201060054285"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        color: "black",
                                                        textDecoration: "none",
                                                        position: "relative",
                                                        fontSize: "20px",
                                                        paddingLeft: "3px",
                                                    }}
                                                >
                                                    01060054285
                                                </p>
                                            </a>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
