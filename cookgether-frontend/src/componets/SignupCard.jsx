import { useState } from 'react';
import {Link} from 'react-router' 
const SignupCard = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }
    function handleConfirmPassChange(event) {
        setConfirmPass(event.target.value);
    }
    return(
    <>
        <div className="w-3/4 md:w-[30rem] mx-auto my-24 rounded-xl bg-yellow-400 px-3 md:px-12 py-12">
            <h1 className="text-center text-5xl">Signup</h1>
            <form action="" className=" flex flex-col items-center *:mt-7 *:px-3 *:py-1.5 *:rounded-lg *: *:w-5/6"> 
                <input onChange={(e)=>{handleUsernameChange(e)}} value={username} type="text" name="username" id="username" placeholder="Username"/>
                <input onChange={(e)=>{handleEmailChange(e)}} value={email} type="text" name="email" id="email" placeholder="Email" />
                <input onChange={(e)=>{handlePasswordChange(e)}} value={password} type="password" name="password" id="password" placeholder="Password" />
                <input onChange={(e)=>{handleConfirmPassChange(e)}} value={confirmPass} type="password" name="cfpassword" id="cfpassword" placeholder="Confirm Password"/>
                <button type="submit" className="bg-black text-white p-2">Signup</button>
                <div className="">Aready have an account?<Link className='hover:text-purple-400' to="/login">Login</Link></div>
            </form>
        </div>
    </>
    )}

export default SignupCard;