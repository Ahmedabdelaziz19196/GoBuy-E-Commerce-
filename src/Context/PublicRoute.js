import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function PublicRoute({ children }) {
    const { currentUser } = useAuth();

    if (currentUser) {
        return <Navigate to="/" replace />;
    }

    return children;
}
