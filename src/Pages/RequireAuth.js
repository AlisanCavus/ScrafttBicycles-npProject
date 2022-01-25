import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const RequireAuth = () => {
    
    const location = useLocation()
    const {currentUser} = useAuth()

   

    return (
        currentUser.email
            ? <Outlet />
            : <Navigate to="/Login" state={{ from: location}} replace />
    );

}


export default RequireAuth