import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RequireAuth({ children }) {
    const { currentUser } = useAuth();
    const location = useLocation();
    if (!currentUser) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }
    return children;
}
