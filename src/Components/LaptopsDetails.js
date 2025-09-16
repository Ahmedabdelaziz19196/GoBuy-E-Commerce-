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
import { useEffect, useMemo, useState } from "react";
import LaptopsDetailsLowInfo from "./LaptopsDetailsLowInfo";
import { Link } from "react-router-dom";

export default function LaptopsDetails({
    favIconClickdedId,
    setFavIconClickedId,
    cartIconClickdedId,
    setCartIconClickedId,
    setFavProducts,
    setCartProducts,
    numberOfOrders,
    setNumberOfOrders,
}) {
    const [product, setProduct] = useState(null);
    const [viewedImgURL, setViewedImgURL] = useState(null);
    const [listImgToView, setListImgToView] = useState([]);
    // const [relatedProducts, setRelatedProducts] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openToast, setOpenToast] = useState(false);
    const [showMiniInfo, setShowMiniInfo] = useState(false);
    const { productId } = useParams();
    const { FilteredLapstopsProductsList } = useFilter();
    useEffect(() => {
        const theProduct = FilteredLapstopsProductsList.find(
            (ele) => ele.productid === productId
        );
        setProduct(theProduct);
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
    }, [product, FilteredLapstopsProductsList]);

    const relatedProducts = useMemo(() => {
        if (product) {
            const categoriedProducts = FilteredLapstopsProductsList.filter(
                (laptop) => laptop.category === product.category
            ).sort(() => Math.random() - 0.5);
            const ProductIndex = categoriedProducts.findIndex(
                (laptop) => laptop.productid === product.productid
            );
            let theList;
            if (ProductIndex - 4 < 0) {
                theList = categoriedProducts.slice(
                    ProductIndex + 1,
                    ProductIndex + 9
                );
            } else {
                theList = [
                    ...categoriedProducts.slice(ProductIndex - 4, ProductIndex),
                    ...categoriedProducts.slice(
                        ProductIndex + 1,
                        ProductIndex + 5
                    ),
                ];
            }
            return theList;
        }
    }, [FilteredLapstopsProductsList, product]);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 508) {
                setShowMiniInfo(true);
            } else {
                setShowMiniInfo(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleSavedFavProductsSatet() {
        const isCurrentlyAdded = favIconClickdedId[product.productid];
        const savedFavIds = {
            ...favIconClickdedId,
            [product.productid]: !isCurrentlyAdded,
        };
        setFavIconClickedId(savedFavIds);
        localStorage.setItem(
            "favProductsIdsStates",
            JSON.stringify(savedFavIds)
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
        const isCurrentlyAdded = cartIconClickdedId[product.productid];
        const savedCartIds = {
            ...cartIconClickdedId,
            [product.productid]: !isCurrentlyAdded,
        };
        setCartIconClickedId(savedCartIds);
        localStorage.setItem(
            "cartProductsIdsStates",
            JSON.stringify(savedCartIds)
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
                <div
                    style={{
                        background: "var(--main-color)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                        height: "fit-content",
                        width: "100%",
                        position: "fixed",
                        top: showMiniInfo ? "97px" : "0px",
                        left: "0",
                        transition: "0.2s",
                        padding: "7px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        color: "white",
                        gap: "10px",
                        zIndex: "999",
                    }}
                >
                    <img
                        src={product.productImageOne}
                        alt="miniInfo"
                        style={{ height: "50px", borderRadius: "10px" }}
                    />
                    <p
                        style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                        className="d-none d-md-block d-lg-block"
                    >
                        {product.description}
                    </p>
                    <p>{product.price}</p>
                    <div style={{ display: "flex" }}>
                        <button
                            className="gategories d-flex align-items-center justify-content-center gap-2"
                            style={{ borderRadius: "50%" }}
                            onClick={handleSavedcartProductsSatet}
                        >
                            {cartIconClickdedId[product.productid] ? (
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
                            {favIconClickdedId[product.productid] ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderOutlinedIcon />
                            )}
                        </button>
                    </div>
                </div>
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
                                                numberOfOrders[
                                                    product.productid
                                                ] > 1
                                            ) {
                                                const updatedOrders = {
                                                    ...numberOfOrders,
                                                    [product.productid]:
                                                        (numberOfOrders[
                                                            product.productid
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
                                    {numberOfOrders[product.productid] || 1}
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
                                                [product.productid]:
                                                    (numberOfOrders[
                                                        product.productid
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
                                    {cartIconClickdedId[product.productid] ? (
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
                                    {favIconClickdedId[product.productid] ? (
                                        <FavoriteIcon />
                                    ) : (
                                        <FavoriteBorderOutlinedIcon />
                                    )}
                                </button>
                            </div>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Get in Touch
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
                                            {/* <p
                                                style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                linkedin:
                                            </p> */}
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
                                                    On LinkedIn
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
                                            {/* <p
                                                style={{
                                                    fontSize: "20px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                GitHub:
                                            </p> */}
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
                                                    On GitHub
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
                                                WhatsApp:
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
                                                Call Me:
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
                <Grid
                    container
                    spacing={2}
                    style={{
                        borderRadius: "20px",
                        background: "#f6f8fa",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        padding: "16px",
                        width: "100%",
                        margin: "20px 0px",
                    }}
                >
                    <LaptopsDetailsLowInfo
                        label="brand:"
                        value={product.brand}
                    />
                    <LaptopsDetailsLowInfo
                        label="Name:"
                        value={product.productName}
                    />
                    <LaptopsDetailsLowInfo
                        label="Description:"
                        value={product.description}
                    />
                    <LaptopsDetailsLowInfo
                        label="Processor:"
                        value={
                            product.processor.name +
                            " | " +
                            product.processor.generation +
                            " | " +
                            product.processor.details
                        }
                    />
                    <LaptopsDetailsLowInfo
                        label="Graphics:"
                        value={
                            product.graphics.name +
                            " | " +
                            product.graphics.memory
                        }
                    />
                    <LaptopsDetailsLowInfo
                        label="RAM:"
                        value={
                            product.ram.size +
                            " | " +
                            product.ram.type +
                            " | " +
                            product.ram.slots
                        }
                    />
                    <LaptopsDetailsLowInfo
                        label="Storage:"
                        value={product.storage}
                    />
                    <LaptopsDetailsLowInfo
                        label="Screen:"
                        value={
                            product.display.size +
                            " | " +
                            product.display.resolution +
                            " | " +
                            product.display.refreshRate +
                            " | " +
                            product.display.type +
                            " | " +
                            product.display.brightness +
                            " | " +
                            product.display.colorGamut +
                            " | " +
                            product.display.features
                        }
                    />
                    <LaptopsDetailsLowInfo
                        label="Operating System:"
                        value={product.os}
                    />
                    <LaptopsDetailsLowInfo
                        label="keyboard:"
                        value={product.keyboard}
                    />
                    <LaptopsDetailsLowInfo
                        label="Battery:"
                        value={product.battery}
                    />
                    <LaptopsDetailsLowInfo
                        label="Webcam:"
                        value={product.webcam}
                    />
                    <LaptopsDetailsLowInfo
                        label="Connections:"
                        value={
                            product.connections.usbA +
                            " |" +
                            product.connections.usbC +
                            " |" +
                            product.connections.hdmi +
                            " |" +
                            product.connections.ethernet +
                            " |" +
                            product.connections.power +
                            " |" +
                            product.connections.audio +
                            " |" +
                            product.connections.sdCard
                        }
                    />
                    <LaptopsDetailsLowInfo
                        label="Dimensions:"
                        value={product.dimensions}
                    />
                    <LaptopsDetailsLowInfo
                        label="Weight:"
                        value={product.weight}
                    />
                    <LaptopsDetailsLowInfo
                        label="color:"
                        value={product.color}
                    />
                    <LaptopsDetailsLowInfo
                        label="warranty:"
                        value={product.warranty}
                    />
                </Grid>
                <div className="selection-header">
                    <p style={{ background: "white", padding: "0px 5px" }}>
                        Related
                        <span
                            style={{
                                color: "var(--main-color)",
                            }}
                        >
                            {` Products`}
                        </span>
                    </p>
                </div>
                <Grid container spacing={1} sx={{ margin: "20px 0px" }}>
                    {relatedProducts.map((ele, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
                        >
                            <Link
                                to={`/laptops/${ele.productid}`}
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                <div
                                    style={{
                                        border: "1px solid #b3b3b3",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        background: "#fff",
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                                    }}
                                >
                                    <div>
                                        <div>
                                            <img
                                                src={ele.productImageOne}
                                                alt="lapTop"
                                                style={{
                                                    width: "100%",
                                                    borderRadius: "10px",
                                                    boxShadow:
                                                        "#0000001a 0px 0px 10px",
                                                }}
                                            />
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
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

                                            <p
                                                style={{
                                                    display: "-webkit-box",
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
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}
