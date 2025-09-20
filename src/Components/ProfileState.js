import "./ProfileState.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import LanguageContext from "../Context/LanguageContext";
import { useContext } from "react";
export default function ProfileState({ profileStateShow, userDate }) {
    const { currentUser, logOut } = useAuth();
    const { language } = useContext(LanguageContext);

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
        <>
            {profileStateShow && (
                <div
                    className={clsx(
                        `profile-selection ${language}`,
                        profileStateShow && "profile-clicked"
                    )}
                >
                    {currentUser ? (
                        <>
                            <div
                                style={{
                                    width: "100%",
                                    textAlign: "center", // ✅ التصحيح
                                    marginBottom: "10px",
                                }}
                            >
                                <p>
                                    Welcome:{" "}
                                    <strong
                                        style={{ textTransform: "capitalize" }}
                                    >
                                        {userDate.fristName}
                                    </strong>
                                </p>
                            </div>
                            <button
                                className="gategories pt-1 pb-1 w-100"
                                onClick={handleLogOut}
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <div>
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <button className="gategories pt-1 pb-1 w-100 mb-2">
                                    Log In
                                </button>
                            </Link>
                            <Link
                                to="/registerUser"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <button className="gategories pt-1 pb-1 w-100">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
