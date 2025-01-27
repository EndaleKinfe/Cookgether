import GuestNavbar from "../componets/GuestNavbar";
import LoginCard from "../componets/LoginCard";

const LoginPage = () => {
    return ( <>
        <GuestNavbar ishome={false}/>
        <LoginCard/>
        </>
    );
}
 
export default LoginPage;