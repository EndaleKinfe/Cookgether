import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useStateContext } from "../Context/ContextProvider";
import axiosClient from "../axios-client";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faBell, faUser} from "@fortawesome/free-regular-svg-icons";
import {faHome, faMagnifyingGlass, faVideo} from "@fortawesome/free-solid-svg-icons";


const AuthencticatedNavbar = ({ishome=true}) => {
    const [expanded, setExpanded] = useState(false);
    const [hidden, setHidden] = useState(true);
    const {user} = useStateContext();
    const navigate = useNavigate();
    
    function handletoggle(){
        let a = false;
        if(expanded){
            a = false;
        }
        else{
            a = true;
        }
        setExpanded(a);
    }
    function handleAccountHover(){
        let a = false;
        if(hidden){
            a = false;
        }
        else{
            a = true;
        }
        setHidden(a);
    }

    function handleLogout(){
        // axiosClient.get("/sanctum/csrf-cookie")
        // .then(response =>{
        axiosClient.post("/logout")
        .then( response =>{
            console.log(response);
            navigate("/guest")
        })
    // });
    }
    return ( 
        <nav className={ishome ? 'sticky top-0 left-0 bg-yellow-400 grid  grid-cols-2 justify-items-center items-center md:justify-around  md:flex space-x-5 *:my-2 *:py-1 lg:space-x-10 xl:space-x-20  h-full ':'sticky top-0 left-0 bg-slate-200 grid  grid-cols-2 justify-items-center items-center md:justify-around  md:flex space-x-5 *:my-2 *:py-1 lg:space-x-10 xl:space-x-20  h-[4rem] '}>
       
        <a href='#' className="mx-2 text-black text-2xl ">Cookgether</a>
    
        <div onClick={handletoggle} className="rounded-lg  md:hidden border-2 border-solid border-white max-w-12 w-10 text-center text-white"
        aria-label='Toggle navigation'>t</div>
       
        <ul   className={expanded? " grid grid-cols-1 items-center justify-items-center gap-2 md:space-x-7 place-content-start md:flex-row  md:flex  lg:space-x-10 xl:space-x-20 " :'hidden items-center md:flex space-x-5 lg:space-x-10 xl:space-x-20 '}>
            <li className={'hover:text-purple-400 text-black '}>
                <Link to="/" >
                    <FontAwesomeIcon icon={faHome} size="lg"/>
                </Link>
            </li>
            <li className={'hover:text-purple-400 text-black '}>
                <Link to="#" >
                    <FontAwesomeIcon icon={faVideo} size="lg"/>
                </Link>
            </li>
            <li className={'hover:text-purple-400 text-black '}>
                <Link to="#" ><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/></Link>
            </li>
            <li className={'hover:text-purple-400 text-black '}>
                <Link to="#" >
                    <FontAwesomeIcon icon={faBell} size="lg"/>
                </Link></li>
            <li className={'hover:text-purple-400 text-black '}>
                <Link to="#" >
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                </Link>
            </li>
            <li onClick={handleAccountHover}  className={'hover:text-purple-400 text-black'}>{user ? user.name : <FontAwesomeIcon icon={faUser} size="lg"/>} 
                </li>
        </ul>
        <ul className={hidden ? "hidden":"flex flex-col absolute top-[3.5rem] right-10  py-4 rounded-md bg-black  w-56 items-center justify-center "}>
                    <li className="text-white">Account</li>
                    <li className="text-white">Setting</li>
                    <Link to="/add"><li className="text-white">Add Post</li></Link>
                    <li className="text-white" onClick={handleLogout}>Logout</li>
        </ul>
    </nav>
     );
}
 
export default AuthencticatedNavbar;