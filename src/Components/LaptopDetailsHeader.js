import { Link } from "react-router-dom";
export default function LaptopDetailsHeader({ product }) {
    return (
        <div
            style={{
                margin: "10px 20px",
                borderBottom: "1px solid #b3b3b3",
                paddingBottom: "10px",
            }}
        >
            <h3 style={{ textTransform: "uppercase", fontWeight: "900" }}>
                laptop category /{" "}
                <span style={{ color: "var(--main-color)" }}>
                    {product.category}
                </span>
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
                <Link
                    to="/laptops"
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <p style={{ cursor: "pointer" }} className="home">
                        Laptops
                    </p>
                </Link>
                <p>/</p>
                <p
                    style={{
                        cursor: "text",
                        textTransform: "capitalize",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                    }}
                >
                    {product.description}
                </p>
            </div>
        </div>
    );
}
