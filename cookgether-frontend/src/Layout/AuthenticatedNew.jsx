import { Navigate, Outlet } from "react-router";
import AuthencticatedNavbar from "../componets/AuthenticatedNavbar";
import { useStateContext } from "../Context/ContextProvider";
import BasicinfoPage from "../Pages/BasicInfoPage";

const AuthenticatedNew = () => {
    const {user, token} =  useStateContext();
    if(!token){
        return <Navigate to="/guest"/>
    }
    // const {user} =  useStateContext();
    // if(!user){
    //     return <Navigate to="/guest"/>
    // }
    if(user.user_info){
        return <Navigate to="/"/> 
    }
    
    return ( <>
        <AuthencticatedNavbar ishome={false}/>
        <Outlet/>
    </> );
}
 
export default AuthenticatedNew;