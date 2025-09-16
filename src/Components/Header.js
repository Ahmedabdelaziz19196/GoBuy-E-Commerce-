import "./Header.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import SortIcon from "@mui/icons-material/Sort";
import { ReactTyped } from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import AllGategories from "./AllGategories";
import { useState, useContext } from "react";
import LanguagesSelection from "./LanguagesSelection";
import SearchForMobile from "./SearchForMobile";
import { Link } from "react-router-dom";
import { SideCategoriesContext } from "../Context/SideCategoriesContext";
import FavProducts from "./FavProducts";
import CartProducts from "./CardProducts";

export default function Header({ favProducts, cartProducts }) {
    const { setSideCategoriesShow } = useContext(SideCategoriesContext);
    const [langClick, setLangClick] = useState(false);
    const [iconFavClick, setIconFavClick] = useState(false);
    const [iconShopClick, setIconShopClick] = useState(false);
    const [iconAccountClick, setIconAccountClick] = useState(false);
    const [iconSearchClick, setIconSearchClick] = useState(false);
    const [showSerachBarForMobile, setShowSerachBarForMobile] = useState(false);
    const [favProductsShowed, setFavProductsShowed] = useState(false);
    const [cartProductsShowed, setCartProductsShowed] = useState(false);

    function handleShowCategories() {
        setSideCategoriesShow(true);
    }

    function handleFavIcon(e) {
        setIconFavClick(true);
        setTimeout(() => setIconFavClick(false), 250);
        e.stopPropagation();
        setFavProductsShowed(!favProductsShowed);
        setCartProductsShowed(false);
    }

    // Close Fav Products when clicking outside
    function handleFavProductsCloes() {
        setFavProductsShowed(false);
    }
    if (favProductsShowed) {
        window.addEventListener("click", handleFavProductsCloes);
    }

    function handleShopIcon(e) {
        setIconShopClick(true);
        setTimeout(() => setIconShopClick(false), 250);
        e.stopPropagation();
        setCartProductsShowed(!cartProductsShowed);
        setFavProductsShowed(false);
    }

    // Close shop Products when clicking outside
    function handleCartProductsCloes() {
        setCartProductsShowed(false);
    }
    if (cartProductsShowed) {
        window.addEventListener("click", handleCartProductsCloes);
    }

    function handleAccountIcon() {
        setIconAccountClick(true);
        setTimeout(() => setIconAccountClick(false), 250);
    }
    function handleSerachtIcon() {
        setIconSearchClick(true);
        setTimeout(() => setIconSearchClick(false), 250);
        setShowSerachBarForMobile(!showSerachBarForMobile);
    }

    // Close language selection when clicking outside
    function handleWindowClick() {
        setLangClick(false);
    }
    if (langClick) {
        window.addEventListener("click", handleWindowClick);
    }

    return (
        <div className="bg-white w-100 sticky-top header">
            <Container
                maxWidth="xl"
                className="bg-white w-100 d-flex justify-content-between align-items-center pl-4 pt-2 pb-2 gap-4 position-relative "
            >
                <div className="ps-lg-5 ps-md-5 ps-0 d-flex align-items-center gap-lg-5 gap-4 ">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div>
                            <p
                                style={{
                                    fontWeight: "400",
                                    fontFamily: "Righteous",
                                    fontSize: "40px",
                                    cursor: "pointer",
                                    color: "black",
                                }}
                            >
                                GoBuy
                            </p>
                            <p
                                className="fw-light small mb-0"
                                style={{
                                    position: "relative",
                                    bottom: "5px",
                                    letterSpacing: "3px",
                                    color: "gray",
                                }}
                            >
                                ELECTRONICS
                            </p>
                        </div>
                    </Link>

                    <div
                        className="gategories d-md-flex d-lg-flex align-items-center justify-content-center d-none"
                        onClick={handleShowCategories}
                    >
                        <SortIcon />
                        <p>All Categories</p>
                    </div>
                </div>

                <div
                    style={{ flex: "1", position: "relative" }}
                    className="d-none d-lg-block d-md-block"
                >
                    <input type="text" className="sreach-bar" />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "10px",
                            transform: "translateY(-50%)",
                        }}
                    >
                        <ReactTyped
                            style={{ color: "var(--main-color)" }}
                            strings={["Search Here..."]}
                            typeSpeed={50}
                            backSpeed={30}
                            backDelay={1000}
                            startDelay={500}
                            loop
                        />
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <div
                        className={`header-icon ${
                            iconSearchClick ? "icon-clicked" : ""
                        } d-md-none `}
                        onClick={handleSerachtIcon}
                    >
                        <SearchIcon />
                    </div>

                    <button
                        className={`header-icon ${
                            iconFavClick ? "icon-clicked" : ""
                        }`}
                        onClick={handleFavIcon}
                        style={{ background: "none" }}
                    >
                        {favProducts.length > 0 ? (
                            <>
                                <FavoriteIcon
                                    sx={{
                                        color: "var(--main-color)",
                                        position: "relative",
                                    }}
                                />
                                <p
                                    style={{
                                        position: "absolute",
                                        background: "#ff9500",
                                        height: "17px",
                                        width: "17px",
                                        top: "19px",
                                        right: "4px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "50%",
                                        fontSize: "10px",
                                        color: "white",
                                        boxShadow: "0 0 6px rgba(0, 0, 0, 0.4)",
                                    }}
                                >
                                    {favProducts.length}
                                </p>
                            </>
                        ) : (
                            <FavoriteBorderOutlinedIcon />
                        )}
                    </button>
                    <button
                        className={`header-icon ${
                            iconShopClick ? "icon-clicked" : ""
                        }`}
                        onClick={handleShopIcon}
                        style={{ background: "none" }}
                    >
                        {cartProducts.length > 0 ? (
                            <>
                                <ShoppingCartIcon
                                    sx={{
                                        color: "var(--main-color)",
                                        position: "relative",
                                    }}
                                />
                                <p
                                    style={{
                                        position: "absolute",
                                        background: "#ff9500",
                                        height: "17px",
                                        width: "17px",
                                        top: "19px",
                                        right: "4px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "50%",
                                        fontSize: "10px",
                                        color: "white",
                                        boxShadow: "0 0 6px rgba(0, 0, 0, 0.4)",
                                    }}
                                >
                                    {cartProducts.length}
                                </p>
                            </>
                        ) : (
                            <ShoppingCartOutlinedIcon />
                        )}
                    </button>

                    <div
                        className={`header-icon ${
                            iconAccountClick ? "icon-clicked" : ""
                        }`}
                        onClick={handleAccountIcon}
                    >
                        <AccountCircleOutlinedIcon />
                    </div>

                    <div
                        className="d-flex align-items-center justify-content-center gap-1 lang"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setLangClick(!langClick);
                        }}
                    >
                        <img
                            src="/imgs/usa-flag.webp"
                            alt="usa-flag"
                            style={{ width: "20px" }}
                            className="d-none d-md-flex"
                        />
                        <p style={{ fontWeight: "bold" }}>EN</p>
                        <span
                            className={`lan-arrow ${
                                langClick ? "lang-clicked" : ""
                            }`}
                        >{`>`}</span>
                    </div>
                </div>
                <LanguagesSelection langClick={langClick} />
                <FavProducts
                    favProductsShowed={favProductsShowed}
                    favProducts={favProducts}
                />
                <CartProducts
                    cartProductsShowed={cartProductsShowed}
                    cartProducts={cartProducts}
                />
            </Container>

            <AllGategories />
            <SearchForMobile showSerachBarForMobile={showSerachBarForMobile} />
        </div>
    );
}
