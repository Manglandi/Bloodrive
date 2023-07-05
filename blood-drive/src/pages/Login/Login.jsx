import React from 'react'
import "./login.css";

function Login() {
    return (
        <div className='body'>
        <div class="box">
        <div class="container">
            <div class="top">
                <header>Login</header>
            </div>
            <div class="input-field">
                <input type="text" class="input" placeholder="Username" id=""></input>
                <i class='bx bx-user' ></i>
            </div>
            <div class="input-field">
                <input type="Password" class="input" placeholder="Password" id=""></input>
                <i class='bx bx-lock-alt'></i>
            </div>
            <div class="input-field">
                <input type="submit" class="submit" value="Login" id=""></input>
            </div>
            <div class="two-col">
                <div class="one">
                   <input type="checkbox" name="" id="check"></input>
                   <label for="check"> Remember Me</label>
                </div>
                <div class="two">
                    <label><a href="/">Forgot password?</a></label>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Login
