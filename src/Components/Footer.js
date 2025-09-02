import Container from "@mui/material/Container";
import "./Footer.css";
export default function Footer() {
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
                        <li className="footer-list">Sign In</li>
                        <li className="footer-list">Create Account</li>
                    </ul>
                </div>
                <div className="border-sm-solid  mb-sm-3 w-sm-100">
                    <h4 style={{ fontFamily: "Righteous" }}>GoBuy</h4>
                    <ul>
                        <li className="footer-list">About Us</li>
                        <li className="footer-list">Contact Us</li>
                    </ul>
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
                        <li
                            style={{
                                textDecoration: "none",
                                cursor: "text",
                            }}
                        >
                            +201060054285
                        </li>
                        <li className="footer-list">
                            Ahemd.Abdelaziz19196@gmail.com
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
