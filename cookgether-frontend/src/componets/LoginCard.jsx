import { useState } from 'react';
import {Link, useNavigate} from 'react-router' 
import axiosClient from '../axios-client';
import { useStateContext } from '../Context/ContextProvider';

const LoginCard = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);
    const {setUser, setToken} = useStateContext();    
    const navigate = useNavigate();

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin(e){
        e.preventDefault();
        const payload = {
            email: email,
            password: password,
        };
        
        axiosClient.post("/login", payload)
        .then((data)=>{
            setToken(data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            setUser(data.data.user)
            navigate("/");
        })
        .catch(err=>{
            console.log(err.message)
        }) 
    
    }

    return(
    <>
        <div className="w-3/4 md:w-[30rem] mx-auto my-24 rounded-xl bg-yellow-400 px-3 md:px-12 py-12">
            <h1 className="text-center text-6xl">Login</h1>

            {err && <div className='bg-red-500 text-white'>err</div>}
            <form onSubmit={handleLogin} className=" flex flex-col items-center *:mt-7 *:px-3 *:py-1.5 *:rounded-lg *: *:w-5/6"> 
                <input onChange={(e)=>{handleEmailChange(e)}} value={email} type="text" name="email"  placeholder="Username"/>
                <input onChange={(e)=>{handlePasswordChange(e)}} value={password} type="password" name="password"  placeholder="Password" />
                <Link className='hover:text-purple-400' to="/forgotpassword">forgot possword?</Link>
                <button type="submit" className="bg-black text-white p-2">Login</button>
                <div className="">Don't have account? <Link className='text-center hover:text-purple-400' to="/signup">SignUp</Link></div>
            </form>
            

        </div>
    </>
    )}

export default LoginCard;