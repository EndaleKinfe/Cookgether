import GuestNavbar from "../componets/GuestNavbar";

const GuestHome = () => {
    return ( <>
        <GuestNavbar ishome={true}/>
        <div className="h-screen flex flex-col items-center justify-center">
            <h1>Home page</h1>
        </div>
    </> );
}
 
export default GuestHome;