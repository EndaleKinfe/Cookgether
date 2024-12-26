import { useState } from 'react';
import {Link} from 'react-router' 
const LoginCard = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return(
    <>
        <div className="w-3/4 md:w-[30rem] mx-auto my-24 rounded-xl bg-yellow-400 px-3 md:px-12 py-12">
            <h1 className="text-center text-6xl">Login</h1>
            <form action="" className=" flex flex-col items-center *:mt-7 *:px-3 *:py-1.5 *:rounded-lg *: *:w-5/6"> 
                <input onChange={(e)=>{handleUsernameChange(e)}} value={username} type="text" name="username" id="username" placeholder="Username"/>
                <input onChange={(e)=>{handlePasswordChange(e)}} value={password} type="password" name="password" id="password" placeholder="Password" />
                <Link className='hover:text-purple-400' to="/forgotpassword">forgot possword?</Link>
                <button type="submit" className="bg-black text-white p-2">Login</button>
                <div className="">Don't have account? <Link className='text-center hover:text-purple-400' to="/signup">SignUp</Link></div>
            </form>
            

        </div>
    </>
    )}

export default LoginCard;