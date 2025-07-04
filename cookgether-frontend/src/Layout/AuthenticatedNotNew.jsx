import AuthencticatedNavbar from "../componets/AuthenticatedNavbar";
import { Navigate, Outlet } from "react-router";
import { useStateContext } from "../Context/ContextProvider";
import CurrentUserCard from "../componets/CurrentUserCard";
const AuthencticatedNotNew = () => {
    const {user, token} =  useStateContext();

    if(!token){
        return <Navigate to="/guest"/>
    }
    if(!user.user_info){
        return <Navigate to="/welcome"/> 
    }
    
    // const {user, token} =  useStateContext();
    // if(!user){
    //     return <Navigate to="/guest"/>
    // }
    // if(!user.info){
    //     return <Navigate to="/welcome"/> 
    // }

    return ( 
        <>
        <AuthencticatedNavbar ishome={true} />
        <div className="flex h-full">
        <aside className="bg-slate-400 h-[93vh] w-80 ">
            <CurrentUserCard/>
        </aside>
        <div className="w-full h-[93vh] overflow-y-scroll overflow-x-hidden">
        <Outlet/>
        </div>
        </div>
        </>
     );
}
 
export default AuthencticatedNotNew;