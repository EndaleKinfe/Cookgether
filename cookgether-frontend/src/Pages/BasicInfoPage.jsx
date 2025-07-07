import { useRef, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../Context/ContextProvider";

const BasicInfoPage = () => {
    const {user} = useStateContext();
    const [err, setErr] = useState(null);
    const fname = useRef();
    const lname = useRef();
    const bday = useRef();
    const country = useRef();
    const city = useRef();
    const gender = useRef();
    const pnum = useRef();

    function handlesubmit(e){
        e.preventDefault();
        const payload = {
            user_id: user.id,
            first_name :  fname.current.value,
            last_name : lname.current.value,
            phone_number : pnum.current.value,
            birthday : bday.current.value,
            gender : gender.current.value,
            city : city.current.value,
            country: country.current.value,
        };
        
        axiosClient.post("/userinfo", payload)
        .then((data)=>{
            return <Navigate to="/welcome/selectinterest"/>
        })
        .catch(err=>{
            const response = err.response;
            if (response && response.status ===  422){
                console.log(response.message);
                setErr(response);
            }
            setErr(response);
        }) 
   
    }
    return ( <div>
        <h1 className="text-yellow-400 text-5xl my-7 text-center">Tell us about you</h1>
        <form onSubmit={handlesubmit} >
            <div className="flex flex-col items-center justify-center *:border-black *:border-solid *:border-2 *:p-4 *:w-96 *:m-2 *:rounded-lg">
                <input ref={fname} type="text" name="firstname" placeholder="First Name" />
                <input ref={lname} type="text" name="lastname" placeholder="Last Name" />
                <input ref={pnum} type="tel" name="phoneNumber" placeholder="phone Number" />
                <input ref={country} type="text" name="country" placeholder="Country"  />
                <input ref={city} type="text" name="city" placeholder="City"  />
                <input ref={bday} type="date" name="birthday" placeholder="birthday"  />
                <select ref={gender} name="gender" placeholder="select gender">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
                <button type="submit" className="bg-black w-24 h-10 float-end mr-24 text-white rounded-md">Next</button>
        </form>
    </div> );
}
 
export default BasicInfoPage;