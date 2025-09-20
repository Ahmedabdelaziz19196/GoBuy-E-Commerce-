import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../Context/AuthContext";
import { db } from "../FireBase";
import { doc, setDoc } from "firebase/firestore";

export default function Cart({
    cartProducts,
    numberOfOrders,
    setCartProducts,
    setCartIconClickedId,
    totalPrice,
    setNumberOfOrders,
}) {
    const { currentUser } = useAuth();

    async function handleEmptyCart() {
        setCartProducts([]);
        setCartIconClickedId({});
        setNumberOfOrders({});

        localStorage.setItem("cartProducts", JSON.stringify([]));
        localStorage.setItem("cartProductsIdsStates", JSON.stringify({}));
        localStorage.setItem("numberForOrder", JSON.stringify({}));

        if (currentUser) {
            try {
                await setDoc(
                    doc(db, "users", currentUser.uid),
                    {
                        cart: [],
                        cartProductsId: {},
                        numberOfOrders: {},
                    },
                    { merge: true }
                );
            } catch (error) {
                console.error("Error updating Firestore:", error);
            }
        }
    }

    return (
        <>
            <div
                style={{
                    margin: "10px 20px",
                    borderBottom: "1px solid #b3b3b3",
                    paddingBottom: "10px",
                }}
            >
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
                    <p>Cart</p>
                </div>
            </div>
            <div style={{ margin: "0px 10px 10px 10px" }}>
                <Grid container spacing={1} sx={{ margin: "20px 0px" }}>
                    {cartProducts.length === 0 ? (
                        <Grid size={12}>
                            <div
                                style={{
                                    background: "#f6f8fa",
                                    width: "100%",
                                    height: "calc(100vh - 542.13px)",
                                    borderRadius: "10px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "var(--main-color)",
                                    fontWeight: "bold",
                                }}
                            >
                                No Products Found
                            </div>
                        </Grid>
                    ) : (
                        cartProducts.map((ele, index) => (
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
                                                        {numberOfOrders[
                                                            ele.productid
                                                        ] || 1}{" "}
                                                        X {ele.price}
                                                    </h5>
                                                    <img
                                                        src={ele.brandImage}
                                                        alt="brand"
                                                        style={{
                                                            height: "15px",
                                                            background:
                                                                "#f6f8fa",
                                                        }}
                                                    />
                                                </div>

                                                <p
                                                    style={{
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient:
                                                            "vertical",
                                                        overflow: "hidden",
                                                        textOverflow:
                                                            "ellipsis",
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
                        ))
                    )}
                </Grid>
                <div
                    style={{
                        background: "#f6f8fa",
                        width: "100%",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                        padding: "10px",
                        marginBottom: "10px",
                    }}
                >
                    <p style={{ fontSize: "20px" }}>
                        Total:
                        <span
                            style={{
                                fontWeight: "bold",
                                color: "var(--main-color)",
                            }}
                        >
                            {totalPrice}
                        </span>
                    </p>
                    <Link
                        to="/checkout"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <button
                            className="gategories "
                            style={{
                                width: "174px",
                                marginLeft: "10px",
                            }}
                        >
                            Check Out
                        </button>
                    </Link>
                </div>
                <div
                    style={{
                        background: "#f6f8fa",
                        width: "100%",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                            cartProducts.length === 0
                                ? "flex-end"
                                : "space-between",
                        padding: "10px",
                    }}
                >
                    {cartProducts.length > 0 && (
                        <button
                            className="gategories empty-btn"
                            onClick={handleEmptyCart}
                            style={{
                                width: "174px",
                                border: "1px solid var(--main-color)",
                                background: "transparent",
                                color: "var(--main-color)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <DeleteIcon />
                            Empty Cart
                        </button>
                    )}
                    <Link
                        to="/laptops"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <button
                            className="gategories "
                            style={{
                                width: "174px",
                            }}
                        >
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
