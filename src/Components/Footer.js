import Container from "@mui/material/Container";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
export default function Footer() {
    const { currentUser, logOut } = useAuth();
    function handleLogOut() {
        logOut();
        localStorage.removeItem("favProducts");
        localStorage.removeItem("cartProducts");
        localStorage.removeItem("favProductsIdsStates");
        localStorage.removeItem("cartProductsIdsStates");
        localStorage.removeItem("numberForOrder");
        window.location.reload();
    }
    return (
        <div
            style={{
                background: "var(--main-color)",
                width: "100%",
            }}
        >
            <Container
                maxWidth="xl"
                className="d-flex flex-column flex-sm-row justify-content-between align-items-start pt-4 pb-4"
                style={{ color: "white" }}
            >
                <div className="border-sm-solid  mb-sm-3 w-sm-100">
                    <h4>My account</h4>
                    <ul>
                        {!currentUser ? (
                            <>
                                <Link
                                    to="/login"
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <li className="footer-list">Log In</li>
                                </Link>
                                <Link
                                    to="/registerUser"
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <li className="footer-list">
                                        Create Account
                                    </li>
                                </Link>
                            </>
                        ) : (
                            <p className="footer-list" onClick={handleLogOut}>
                                Log Out
                            </p>
                        )}
                    </ul>
                </div>
                <div className="border-sm-solid  mb-sm-3 w-sm-100">
                    <h4 style={{ fontFamily: "Righteous" }}>GoBuy</h4>
                    <a
                        href="/AhmedAbdelazizCv.pdf"
                        download
                        className="footer-list"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            cursor: "pointer",
                        }}
                    >
                        About Us
                    </a>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <ul>
                        <li
                            style={{
                                textDecoration: "none",
                                cursor: "text",
                            }}
                        >
                            Egypt, Alexandrtia
                        </li>

                        <li className="footer-list">
                            <a
                                href="tel:+201060054285"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                +201060054285
                            </a>
                        </li>
                        <li className="footer-list">
                            <a
                                href="mailto:Ahemd.Abdelaziz19196@gmail.com"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                Ahemd.Abdelaziz19196@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
