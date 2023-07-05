import React from 'react'

function CreateAccount() {
    return (
        <div className='body'>
        <div class="box">
        <div class="container">
            <div class="top">
                <header>Create Account</header>
            </div>
            <div class="input-field">
                <input type="text" class="input" placeholder="First Name" id="" required></input>
                <i class='bx bx-user' ></i>
            </div>
            <div class="input-field">
                <input type="text" class="input" placeholder="Last Name" id="" required></input>
                <i class='bx bx-user' ></i>
            </div>
            <div class="input-field">
                <input type="email" class="input" placeholder="E-mail" id="" required></input>
                <i class='bx bx-user' ></i>
            </div>
            <div class="input-field">
                <input type="Password" class="input" placeholder="Password" id=""></input>
                <i class='bx bx-lock-alt'></i>
            </div>
            <div class="input-field">
                <input type="Password" class="input" placeholder="Confirm Password" id=""></input>
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
                <div className="two-2">
                    <label><a href="/login">Have an Account? Login</a></label>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default CreateAccount
