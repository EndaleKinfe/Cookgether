const SignupCard = () => {
    return(
        <>
        <div>
            <div className="signup card">
                <form id="signup form">
                <h1> signup </h1>
                <label htmlFor="name">name</label>
                <input type="text" placeholder="enter name" name="name" required /><br />
                <label htmlFor="email" id="email">email</label>
                <input type="email" placeholder="enter email" required /> <br />
                <label htmlFor="password" id="password">password</label>
                <input type="password" placeholder=" enter password" required />
                <label htmlFor="cpass" >Confirm password</label>
                <input type="password" id="cpass" placeholder=" confirm password" required /> <br />
                <button type="submit">signup</button>
                <div className="bottom-link">Aready have an account?<a href="#">login</a></div>
                </form>
        </div>
    </div>

    </>
    )}

export default SignupCard;