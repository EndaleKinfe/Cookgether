import { useState } from 'react';
import {Link, useNavigate} from 'react-router' 
import axiosClient from '../axios-client';
import { useStateContext } from '../Context/ContextProvider';

const SignupCard = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const {setUser, setToken} = useStateContext();
    const navigate = useNavigate();

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

    function handleSignup(e){
        e.preventDefault();
        const payload = {
            name: username,
            email: email,
            password: password,
            password_confirmation: confirmPass
        } 

        // with token auth
        axiosClient.post("/signup", payload)
        .then((data)=>{
            setToken(data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            setUser(data.data.user);
            navigate("/");
        })
        .catch(err=>{
            const response = err.response;
            if (response && response.status ===  422){
                console.log(response.data.errors);
            }
        })
        // with session auth
        // axiosClient.get("/sanctum/csrf-cookie")
        // .then(response =>{
        // axiosClient.post("/register", payload)
        // .then((data)=>{
        //     console.log(data)
        // })
        // .catch(err=>{
        //     const response = err.response;
        //     if (response && response.status ===  422){
        //         console.log(response.data.error)
        //     }
        // })
    // });
    }
    return(
    <>
        <div className="w-3/4 md:w-[30rem] mx-auto my-24 rounded-xl bg-yellow-400 px-3 md:px-12 py-12">
            <h1 className="text-center text-5xl">Signup</h1>
            <form onSubmit={handleSignup} className=" flex flex-col items-center *:mt-7 *:px-3 *:py-1.5 *:rounded-lg *: *:w-5/6"> 
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