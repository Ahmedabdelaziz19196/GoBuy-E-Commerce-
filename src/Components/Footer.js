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
                <div>
                    <h4>My account</h4>
                    <ul>
                        <li>Sign In</li>
                        <li>Create Account</li>
                    </ul>
                </div>
                <div>
                    <h4>GoBuy</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <ul>
                        <li style={{ textDecoration: "none", cursor: "none" }}>
                            Egypt, Alexandrtia
                        </li>
                        <li style={{ textDecoration: "none", cursor: "none" }}>
                            +201060054285
                        </li>
                        <li>Ahemd.Abdelaziz19196@gmail.com</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
