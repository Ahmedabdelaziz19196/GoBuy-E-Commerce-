import { Link, useLocation } from "react-router-dom";

import "./PageCategoryHeader.css";

export default function PageCategoryHeader() {
    let theCategory = useLocation().pathname.replace("/", "");

    return (
        <div
            style={{
                margin: "10px 20px",
                borderBottom: "1px solid #b3b3b3",
                paddingBottom: "10px",
            }}
        >
            <h3 style={{ textTransform: "uppercase", fontWeight: "900" }}>
                <span style={{ color: "var(--main-color)" }}>
                    {theCategory}
                </span>{" "}
                category
            </h3>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    color: "#b3b3b3",
                }}
            >
                <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <p style={{ cursor: "pointer" }} className="home">
                        Home
                    </p>
                </Link>
                <p>/</p>
                <p style={{ cursor: "text", textTransform: "capitalize" }}>
                    {theCategory}
                </p>
            </div>
        </div>
    );
}
