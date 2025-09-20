import "./RegisterUser.css";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/AuthContext";
import { Alert } from "react-bootstrap";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;
    const { logIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/";
    console.log(location.pathname);

    async function onSubmit(data) {
        try {
            setIsLoading(true);
            setError("");
            await logIn(data.email, data.password);
            navigate(redirectPath, { replace: true });
        } catch {
            setError("Incorrect email or password");
        } finally {
            setIsLoading(false);
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
                    <p>Log In</p>
                    {error && <Alert variant="danger">{error}</Alert>}
                </div>
            </div>
            <Container maxWidth="sm">
                <div
                    style={{
                        width: "100%",
                        height: "calc(100vh - 509px)",
                        marginBottom: "10px",
                        borderRadius: "10px",
                        background: "rgb(246, 248, 250)",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
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
                        Log In
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Step 1 */}
                        <div
                            style={{
                                borderBottom: "1px solid rgb(215, 215, 215)",
                                padding: "15px 0",
                            }}
                        >
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
                                Log In
                            </button>
                        </div>
                    </form>
                    <p className="text-center pt-1">
                        Don't have an account?{" "}
                        <Link to="/registerUser">Sign Up</Link>
                    </p>
                </div>
            </Container>
        </>
    );
}
