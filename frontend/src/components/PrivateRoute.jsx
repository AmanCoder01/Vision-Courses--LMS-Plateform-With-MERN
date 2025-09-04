import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ allowedRoles }) {
    const { userData } = useSelector(state => state.user);

    // Not logged in → redirect to signup
    if (!userData) {
        return <Navigate to="/signup" replace />;
    }

    // If roles are specified, check them
    if (allowedRoles && !allowedRoles.includes(userData.role)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />; // render child routes
}

export default PrivateRoute;
