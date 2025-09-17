import "./CartCheckOut.css";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Select, MenuItem } from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function CartCheckOut({
    cartProducts,
    numberOfOrders,
    totalPrice,
    setCartIconClickedId,
    setCartProducts,
}) {
    const shipping = 70;

    function handleRemoveProducts(productid) {
        setCartIconClickedId((prev) => ({
            ...prev,
            [productid]: false,
        }));
        setCartProducts((prev) =>
            prev.filter((item) => item.productid !== productid)
        );
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
                <h3 style={{ textTransform: "uppercase", fontWeight: "900" }}>
                    Check Out
                </h3>
            </div>
            <Grid container spacing={2} sx={{ margin: "20px 20px" }}>
                <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
                    <div
                        style={{
                            width: "100%",
                            paddingBottom: "20px",
                            borderBottom: "1px solid #d7d7d7",
                            marginBottom: "10px",
                        }}
                    >
                        <h3
                            style={{
                                color: "var(--main-color)",
                                fontWeight: "normal",
                            }}
                        >
                            CUSTOMER
                        </h3>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <input
                                    type="text"
                                    style={{
                                        width: "100%",
                                        height: "30px",
                                        background: "#f6f8fa",
                                        border: "none",
                                        outline: "1px solid #777",
                                        borderRadius: "5px",
                                        padding: "0px 10px",
                                    }}
                                    placeholder="Name"
                                    disabled
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <input
                                    type="text"
                                    style={{
                                        width: "100%",
                                        height: "30px",
                                        background: "#f6f8fa",
                                        border: "none",
                                        outline: "1px solid #777",
                                        borderRadius: "5px",
                                        padding: "0px 10px",
                                    }}
                                    placeholder="Phone"
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            paddingBottom: "20px",
                            borderBottom: "1px solid #d7d7d7",
                            marginBottom: "10px",
                        }}
                    >
                        <h3
                            style={{
                                color: "var(--main-color)",
                                fontWeight: "normal",
                                textTransform: "uppercase",
                            }}
                        >
                            Your order
                        </h3>
                        <div
                            style={{
                                width: "100%",
                                height: "fit-content",
                                borderRadius: "10px",
                                border: "1px solid #d7d7d7",
                                padding: "10px  ",
                            }}
                        >
                            {cartProducts.length === 0 ? (
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "20px",
                                    }}
                                >
                                    <p style={{ textAlign: "center" }}>
                                        No Products Found
                                    </p>
                                    <Link
                                        to="/laptops"
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
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
                            ) : (
                                cartProducts.map((ele, index) => (
                                    <div key={ele.productid}>
                                        <div
                                            style={{
                                                margin: "10px 0px",
                                                display: "flex",
                                                justifyContent: "space-around",
                                                alignItems: "center",
                                                gap: "10px",
                                            }}
                                        >
                                            <img
                                                src={ele.productImageOne}
                                                alt="laptop"
                                                style={{ height: "60px" }}
                                            />
                                            <p
                                                style={{
                                                    width: "80%",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                }}
                                            >
                                                {ele.description}
                                            </p>
                                            <p
                                                style={{
                                                    width: "250px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {numberOfOrders[
                                                    ele.productid
                                                ] || 1}
                                                {" X "}
                                                <span
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "var(--main-color)",
                                                    }}
                                                >
                                                    {ele.price}
                                                </span>
                                            </p>
                                            <button
                                                style={{
                                                    color: "var(--main-color)",
                                                    background: "none",
                                                }}
                                                onClick={() =>
                                                    handleRemoveProducts(
                                                        ele.productid
                                                    )
                                                }
                                            >
                                                <DeleteForeverIcon
                                                    sx={{ fontSize: "30px" }}
                                                />
                                            </button>
                                        </div>
                                        {index !== cartProducts.length - 1 && (
                                            <div
                                                style={{
                                                    background: "#d7d7d7",
                                                    height: "1px",
                                                    width: "100%",
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            paddingBottom: "20px",
                            borderBottom: "1px solid #d7d7d7",
                            marginBottom: "10px",
                        }}
                    >
                        <h3
                            style={{
                                color: "var(--main-color)",
                                fontWeight: "normal",
                                textTransform: "uppercase",
                            }}
                        >
                            Delivery
                        </h3>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <input
                                    type="text"
                                    style={{
                                        width: "100%",
                                        height: "30px",
                                        background: "#f6f8fa",
                                        border: "none",
                                        outline: "1px solid #777",
                                        borderRadius: "5px",
                                        padding: "0px 10px",
                                    }}
                                    placeholder="City"
                                    disabled
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <input
                                    type="text"
                                    style={{
                                        width: "100%",
                                        height: "30px",
                                        background: "#f6f8fa",
                                        border: "none",
                                        outline: "1px solid #777",
                                        borderRadius: "5px",
                                        padding: "0px 10px",
                                    }}
                                    placeholder="Region"
                                    disabled
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <input
                                    type="text"
                                    style={{
                                        width: "100%",
                                        height: "30px",
                                        background: "#f6f8fa",
                                        border: "none",
                                        outline: "1px solid #777",
                                        borderRadius: "5px",
                                        padding: "0px 10px",
                                    }}
                                    placeholder="Address"
                                    disabled
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <input
                                    type="text"
                                    style={{
                                        width: "100%",
                                        height: "30px",
                                        background: "#f6f8fa",
                                        border: "none",
                                        outline: "1px solid #777",
                                        borderRadius: "5px",
                                        padding: "0px 10px",
                                    }}
                                    placeholder="Zip-code"
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            paddingBottom: "20px",
                            borderBottom: "1px solid #d7d7d7",
                            marginBottom: "10px",
                        }}
                    >
                        <h3
                            style={{
                                color: "var(--main-color)",
                                fontWeight: "normal",
                                textTransform: "uppercase",
                            }}
                        >
                            pay Methods
                        </h3>

                        <Select
                            defaultValue="Cash on Delivery"
                            style={{
                                width: "100%",
                                height: "50px",
                                outline: "none",
                                borderColor: "red",
                            }}
                        >
                            <MenuItem value="Cash on Delivery">
                                Cash on Delivery
                            </MenuItem>
                            <MenuItem value="Visa and Mastercard">
                                Visa and Mastercard
                            </MenuItem>
                            <MenuItem value="Mobile Wallets">
                                Mobile Wallets
                            </MenuItem>
                        </Select>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                    <div
                        style={{
                            width: "100%",
                            position: "sticky",
                            top: "120px",
                            borderRadius: "10px",
                            background: "#f6f8fa",
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                            padding: "10px",
                        }}
                    >
                        <h4 style={{ textTransform: "uppercase" }}>
                            order summary
                        </h4>
                        <div
                            style={{
                                borderBottom: "1px solid #d7d7d7",
                                paddingBottom: "10px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    color: "#777",
                                }}
                            >
                                <p>Product quantity:</p>
                                <p>
                                    <span
                                        style={{
                                            color: "var(--main-color)",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {cartProducts.length}
                                    </span>{" "}
                                    item(s)
                                </p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    color: "#777",
                                }}
                            >
                                <p>Amount:</p>
                                <p>
                                    <span
                                        style={{
                                            color: "var(--main-color)",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {totalPrice.toLocaleString()}
                                    </span>{" "}
                                    EGP
                                </p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    color: "#777",
                                }}
                            >
                                <p>Shipping:</p>
                                <p>
                                    <span
                                        style={{
                                            color: "var(--main-color)",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {shipping}
                                    </span>{" "}
                                    EGP
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: "#777",
                                margin: "10px 0",
                            }}
                        >
                            <p>Total:</p>
                            <h4>
                                <span
                                    style={{
                                        color: "var(--main-color)",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {(totalPrice > 0
                                        ? totalPrice + shipping
                                        : 0
                                    ).toLocaleString()}
                                </span>{" "}
                                EGP
                            </h4>
                        </div>
                        <button className="gategories">
                            Place order (Comming Soon)
                        </button>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
