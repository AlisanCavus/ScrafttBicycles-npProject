import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const RequireAuth = () => {
    
    const location = useLocation()
    const {currentUser} = useAuth()

    console.log(currentUser.email)

    return (
        currentUser
            ? <Outlet />
            : <Navigate to="/Login" state={{ from: location}} replace />
    );

}


export default RequireAuth