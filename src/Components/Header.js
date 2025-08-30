import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Container from "@mui/material/Container";
import SortIcon from "@mui/icons-material/Sort";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import AllGategories from "./AllGategories";
import { useState } from "react";

export default function Header() {
    const [showCategories, setShowCategories] = useState(false);
    const [langClick, setLangClick] = useState(false);
    const [iconFavClick, setIconFavClick] = useState(false);
    const [iconShopClick, setIconShopClick] = useState(false);
    const [iconAccountClick, setIconAccountClick] = useState(false);

    function handleShowCategories() {
        setShowCategories(true);
    }

    function handleFavIcon() {
        setIconFavClick(true);
        setTimeout(() => setIconFavClick(false), 250);
    }
    function handleShopIcon() {
        setIconShopClick(true);
        setTimeout(() => setIconShopClick(false), 250);
    }
    function handleAccountIcon() {
        setIconAccountClick(true);
        setTimeout(() => setIconAccountClick(false), 250);
    }
    return (
        <div className="bg-white w-100 align-items-center">
            <Container
                maxWidth="xl"
                className="bg-white w-100 d-flex justify-content-between align-items-center pl-4 pt-2 pb-2  gap-4"
            >
                <div className="ps-5 d-flex align-items-center gap-lg-5 gap-4">
                    <div>
                        <p
                            style={{
                                fontWeight: "400",
                                fontFamily: "Righteous",
                                fontSize: "40px",
                                cursor: "pointer",
                            }}
                            onClick={() => console.log("goo dady")}
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
                    <div
                        className="gategories d-flex align-items-center justify-content-center"
                        onClick={handleShowCategories}
                    >
                        <SortIcon />
                        <p>All Categories</p>
                    </div>
                </div>

                <div style={{ flex: "1" }}>
                    <input
                        type="text"
                        className="sreach-bar"
                        // className={`sreach-input ${mobileSreach ? "clicked" : ""}`}
                        placeholder="Search..."
                        // value={searchInput}
                        // onChange={(e) => setSearchInput(e.target.value)}
                        // onKeyDown={handleEnterFormSearch}
                    />
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <div
                        className={`header-icon ${
                            iconFavClick ? "icon-clicked" : ""
                        }`}
                        onClick={handleFavIcon}
                    >
                        <FavoriteBorderOutlinedIcon />
                    </div>
                    <div
                        className={`header-icon ${
                            iconShopClick ? "icon-clicked" : ""
                        }`}
                        onClick={handleShopIcon}
                    >
                        <ShoppingCartOutlinedIcon />
                    </div>
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
                        onClick={() => {
                            setLangClick(!langClick);
                        }}
                    >
                        <img
                            src="/imgs/usa-flag.webp"
                            alt="usa-flag"
                            style={{ width: "20px" }}
                        />
                        <p style={{ fontWeight: "bold" }}>EN</p>
                        <span
                            className={`lan-arrow ${
                                langClick ? "lang-clicked" : ""
                            }`}
                        >{`>`}</span>
                    </div>
                </div>
            </Container>
            <AllGategories
                showCategories={showCategories}
                setShowCategories={setShowCategories}
            />
        </div>
    );
}
