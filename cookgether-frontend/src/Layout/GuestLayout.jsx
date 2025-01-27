import GuestNavbar from "../componets/GuestNavbar";
import { Navigate, Outlet } from "react-router";
import { useStateContext } from "../Context/ContextProvider";
const GuestLayout = () => {
    const {user} = useStateContext();

    if(user){
        <Navigate to="/"/>;
    }
    return ( <>
        <Outlet/>
    </> );
}
 
export default GuestLayout;