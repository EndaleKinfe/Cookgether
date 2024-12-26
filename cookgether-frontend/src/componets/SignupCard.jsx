const SignupCard = () => {
    return(
    <>
        <div className="w-3/4 md:w-[30rem] mx-auto my-24 rounded-lg bg-dark-blue-2 px-3 md:px-12 py-12">
            <h1>signup</h1>
            <form action="" className=" flex flex-col items-center *:mt-7 *:px-3 *:py-1.5 *:rounded-lg *: *:w-5/6"> 
                <input type="text" name="username" id="username" placeholder="Username"/>
                <input type="text" name="email" id="email" placeholder="Email" />
                <input type="password" name="password" id="password" placeholder="Password" />
                <input type="password" name="cfpassword" id="cfpassword" placeholder="Confirm Password"/>
                <button type="submit" className="bg-purple-500 p-2">Signup</button>
                <div className="">Aready have an account?<a href="#">login</a></div>
            </form>
        </div>
    </>
    )}

export default SignupCard;