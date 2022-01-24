import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const RequireAuth = () => {
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.currentUser
            ? <Outlet />
            : <Navigate to="/Login" state={{ from: location}} replace />
    );

}


export default RequireAuth