import {useState} from 'react';
import { Link } from 'react-router';
const GuestNavbar = ({ishome}) => {
    const [expanded, setExpanded] = useState(false);
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
    return ( 
        <nav className={ishome ? 'sticky top-0 left-0 bg-yellow-400 grid  grid-cols-2 justify-items-center items-center md:justify-around  md:flex space-x-5 *:my-2 *:py-1 lg:space-x-10 xl:space-x-20  h-[4rem] ':'sticky top-0 left-0 bg-white grid  grid-cols-2 justify-items-center items-center md:justify-around  md:flex space-x-5 *:my-2 *:py-1 lg:space-x-10 xl:space-x-20  h-[4rem] '}>
       
        <a href='#' className="mx-2 text-black text-2xl ">Cookgether</a>
    
        <div onClick={handletoggle} className="rounded-lg  md:hidden border-2 border-solid border-white max-w-12 w-10 text-center text-white"
        aria-label='Toggle navigation'>t</div>
       
        <ul className={expanded? " grid grid-cols-1 items-center justify-items-center gap-2 md:space-x-7 place-content-start md:flex-row  md:flex  lg:space-x-10 xl:space-x-20 " :'hidden items-center md:flex space-x-5 lg:space-x-10 xl:space-x-20 '}>
            <li className={ishome ? 'hover:text-purple-400 text-black ':'hidden'}><Link to="/login">Login</Link></li>
            
            <li className={ishome ? 'hover:text-purple-400 text-black':'hidden'}><Link to="/signup">Signup</Link></li>
        </ul>
    </nav>
     );
}
 
export default GuestNavbar;