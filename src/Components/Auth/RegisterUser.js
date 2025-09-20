import "./RegisterUser.css";
import Container from "@mui/material/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { db } from "../../FireBase";
import { doc, setDoc } from "firebase/firestore";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function RegisterUser({
    favProducts,
    cartProducts,
    favIconClickdedId,
    cartIconClickdedId,
    numberOfOrders,
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { register, handleSubmit, formState, watch } = useForm();
    const { errors } = formState;
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const password = watch("password");

    async function onSubmit(data) {
        try {
            setIsLoading(true);
            setError("");

            // 1- create account in Firebase Auth
            const userCredential = await signUp(data.email, data.password);
            const user = userCredential.user;

            // 2- store extra data in Firestore
            await setDoc(doc(db, "users", user.uid), {
                email: data.email,
                fristName: data.firstName,
                lastName: data.lastName,
                phone: data.phoneNumber,
                governorate: data.governorate,
                zipCode: data.zipCode,
                detailedAddress: data.detailedAddress,
                cart: cartProducts,
                cartProductsId: cartIconClickdedId,
                wishlist: favProducts,
                wishlistProductsId: favIconClickdedId,
                numberOfOrders: numberOfOrders,
            });
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            localStorage.setItem("favProducts", JSON.stringify(favProducts));
            localStorage.setItem(
                "cartProductsIdsStates",
                JSON.stringify(cartIconClickdedId)
            );
            localStorage.setItem(
                "favProductsIdsStates",
                JSON.stringify(favIconClickdedId)
            );
            localStorage.setItem(
                "numberForOrder",
                JSON.stringify(numberOfOrders)
            );
            navigate("/");
        } catch {
            setError("Failed to create the account");
        } finally {
            setIsLoading(false);
        }
    }

    const city = [
        "Cairo",
        "Alexandria",
        "Giza",
        "Dakahlia",
        "Red Sea",
        "Beheira",
        "Fayoum",
        "Gharbia",
        "Ismailia",
        "Menofia",
        "Minya",
        "Qaliubiya",
        "New Valley",
        "Suez",
        "Aswan",
        "Assiut",
        "Beni Suef",
        "Port Said",
        "Damietta",
        "Sharkia",
        "South Sinai",
        "Kafr El Sheikh",
        "Matrouh",
        "Luxor",
        "Qena",
        "North Sinai",
        "Sohag",
    ];
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
                    <p>Register New User</p>
                </div>
            </div>
            <Container maxWidth="md">
                <div
                    style={{
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "10px",
                        background: "rgb(246, 248, 250)",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                    }}
                >
                    <h2
                        className="text-center"
                        style={{
                            textTransform: "uppercase",
                            borderBottom: "1px solid rgb(215, 215, 215)",
                            color: "var(--main-color)",
                        }}
                    >
                        Register
                    </h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Step 1 */}
                        <div
                            style={{
                                borderBottom: "1px solid rgb(215, 215, 215)",
                                padding: "15px 0",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                <h4
                                    style={{
                                        background: "#e8e8e8",
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    1
                                </h4>
                                <h4>Email and Password</h4>
                            </div>

                            <label htmlFor="email" className="custom-label">
                                Email <span className="required">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="custom-input"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter a valid email",
                                    },
                                })}
                                style={{
                                    border: errors.email ? "1px solid red" : "",
                                }}
                            />
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.email?.message}
                            </p>

                            <div style={{ position: "relative" }}>
                                <label
                                    htmlFor="password"
                                    className="custom-label"
                                >
                                    Password <span className="required">*</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="custom-input"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required",
                                        },
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                    })}
                                    style={{
                                        border: errors.password
                                            ? "1px solid red"
                                            : "",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        right: "10px",
                                        cursor: "pointer",
                                    }}
                                    className="show-icon"
                                    onMouseDown={() => {
                                        setShowPassword(true);
                                    }}
                                    onMouseUp={() => {
                                        setShowPassword(false);
                                    }}
                                >
                                    {showPassword ? (
                                        <VisibilityOffIcon />
                                    ) : (
                                        <VisibilityIcon />
                                    )}
                                </div>
                            </div>
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.password?.message}
                            </p>

                            <div style={{ position: "relative" }}>
                                <label
                                    htmlFor="confirmPassword"
                                    className="custom-label"
                                >
                                    Confirm Password{" "}
                                    <span className="required">*</span>
                                </label>
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    id="confirmPassword"
                                    className="custom-input"
                                    {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message:
                                                "Confirm Password is required",
                                        },
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Confirm Password must be at least 8 characters",
                                        },
                                        validate: (value) =>
                                            value === password ||
                                            "Passwords do not match",
                                    })}
                                    style={{
                                        border: errors.confirmPassword
                                            ? "1px solid red"
                                            : "",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        right: "10px",
                                        cursor: "pointer",
                                    }}
                                    className="show-icon"
                                    onMouseDown={() => {
                                        setShowConfirmPassword(true);
                                    }}
                                    onMouseUp={() => {
                                        setShowConfirmPassword(false);
                                    }}
                                >
                                    {showConfirmPassword ? (
                                        <VisibilityOffIcon />
                                    ) : (
                                        <VisibilityIcon />
                                    )}
                                </div>
                            </div>
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.confirmPassword?.message}
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div
                            style={{
                                borderBottom: "1px solid rgb(215, 215, 215)",
                                padding: "15px 0",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                <h4
                                    style={{
                                        background: "#e8e8e8",
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    2
                                </h4>
                                <h4>Personal Information</h4>
                            </div>

                            <label htmlFor="firstName" className="custom-label">
                                First Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="custom-input"
                                {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: "First Name is required",
                                    },
                                })}
                                style={{
                                    border: errors.firstName
                                        ? "1px solid red"
                                        : "",
                                }}
                            />
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.firstName?.message}
                            </p>

                            <label htmlFor="lastName" className="custom-label">
                                Last Name <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="custom-input"
                                {...register("lastName", {
                                    required: {
                                        value: true,
                                        message: "Last Name is required",
                                    },
                                })}
                                style={{
                                    border: errors.lastName
                                        ? "1px solid red"
                                        : "",
                                }}
                            />
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.lastName?.message}
                            </p>

                            <label
                                htmlFor="phoneNumber"
                                className="custom-label"
                            >
                                Phone Number <span className="required">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                className="custom-input"
                                {...register("phoneNumber", {
                                    required: {
                                        value: true,
                                        message: "Phone Number is required",
                                    },
                                    pattern: {
                                        value: /^01(0|1|2|5)\d{8}$/,
                                        message:
                                            "Please enter a valid phone number",
                                    },
                                })}
                                style={{
                                    border: errors.phoneNumber
                                        ? "1px solid red"
                                        : "",
                                }}
                            />
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.phoneNumber?.message}
                            </p>
                        </div>

                        {/* Address Step */}
                        <div
                            style={{
                                padding: "15px 0",
                                borderBottom: "1px solid rgb(215, 215, 215)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                <h4
                                    style={{
                                        background: "#e8e8e8",
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    3
                                </h4>
                                <h4>Address</h4>
                            </div>

                            <label
                                htmlFor="governorate"
                                className="custom-label"
                            >
                                City <span className="required">*</span>
                            </label>
                            <Form.Select
                                id="governorate"
                                className="custom-select mb-3"
                                {...register("governorate", {
                                    required: {
                                        value: true,
                                        message: "Governorate is required",
                                    },
                                })}
                                style={{
                                    border: errors.governorate
                                        ? "1px solid red"
                                        : "",
                                }}
                            >
                                <option value="">Select Governorate</option>
                                {city.map((gov) => (
                                    <option key={gov} value={gov}>
                                        {gov}
                                    </option>
                                ))}
                            </Form.Select>
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.governorate?.message}
                            </p>

                            <label htmlFor="zipCode" className="custom-label">
                                ZIP Code <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="zipCode"
                                className="custom-input"
                                {...register("zipCode", {
                                    required: {
                                        value: true,
                                        message: "ZIP Code is required",
                                    },
                                    pattern: {
                                        value: /^[0-9]{7}$/,
                                        message:
                                            "Please enter a valid ZIP code",
                                    },
                                })}
                                style={{
                                    border: errors.zipCode
                                        ? "1px solid red"
                                        : "",
                                }}
                            />
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.zipCode?.message}
                            </p>

                            <label
                                htmlFor="detailedAddress"
                                className="custom-label"
                            >
                                Detailed Address{" "}
                                <span className="required">*</span>
                            </label>
                            <input
                                type="text"
                                id="detailedAddress"
                                className="custom-input"
                                {...register("detailedAddress", {
                                    required: {
                                        value: true,
                                        message: "Detailed Address is required",
                                    },
                                })}
                                style={{
                                    border: errors.detailedAddress
                                        ? "1px solid red"
                                        : "",
                                }}
                            />
                            <p
                                style={{
                                    color: "red",
                                    position: "relative",
                                    bottom: "14px",
                                    fontSize: "12px",
                                }}
                            >
                                {errors.detailedAddress?.message}
                            </p>
                        </div>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button
                                className="gategories"
                                style={{
                                    width: "174px",
                                    marginTop: "10px",
                                }}
                                type="submit"
                                disabled={isLoading}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <p className="text-center pt-1">
                        Already have an account? <Link to="/login">Log In</Link>
                    </p>
                </div>
            </Container>
        </>
    );
}
