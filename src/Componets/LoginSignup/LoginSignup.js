import React, { useState } from 'react'
import './LoginSign.css';

function LoginSignup() {

    const [action, setAction] = useState("Login")


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //  function SignUp() {

    //     let item = {name , email , password}
    //     console.log(item)

    //  }

    const hadleSignUp = (e) => {
  
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find((u) => u.email === email)

        if (existingUser) {
            alert("Email is already resistered")
        } else {

            const item = { name, email, password }
            users.push(item);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registratio Successfully")

        }
        setName("")
        setEmail("")
        setPassword("")


    }

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || []

        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            alert("Login Successfully");
        } else {
            alert("User Not Found")


        }
        setEmail("")
        setPassword("")


    }





    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    {action}
                </div>
                <div className='underline'></div>
            </div>
            <form onSubmit={hadleSignUp}>
                <div className='inputs'>
                    {action === "Login" ? <div></div> : <div className='input'>
                        <i class="fa-solid fa-user"></i>
                        <input type='text' value={name} placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                    </div>}

                    <div className='input'>
                        <i class="fa-solid fa-envelope"></i>
                        <input type='email' value={email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input'>
                        <i class="fa-solid fa-lock"></i>
                        <input type='password' value={password} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                </div>
                {action === "Sign Up" ? <div></div> : <div className='forget-password'>Lost Password?<span>Click Here </span></div>}

                <div className='submit-container'>

                    <div className={action === "Login" ? "submit gray " : "submit"} onClick={(e) => { setAction("Sign Up"); hadleSignUp(e) }}>SignUp</div>

                    <div className={action === "Sign Up" ? "submit gray " : "submit"} onClick={(e) => { setAction("Login"); handleLogin(e) }}>Login</div>
                </div>
            </form>
        </div>

    )
}

export default LoginSignup