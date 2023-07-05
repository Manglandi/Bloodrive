import React from 'react'
import './hero.css';
import Button from '../Button';
import Footer from '../Footer';

const Hero = () => {
  return (
    <div className='header-img'>
        <div className="hero-divider">
            <div className="textual-content">
                <h1>Blood Drive</h1>
                <p>Be a Hero, Donate Your Blood!,Save a life.</p>
                <Button bgColor="rgb(210, 52, 52)" color="white" text="Request for blood" />
            </div>
            <div className="user-form">
                <h1>Blood Drive</h1>
                <p>Access your personalized account to make a difference and contribute to saving lives. By logging in,
                you’ll gain access to exclusive features and information related to our ongoing blood drive initiatives.</p>
                <form action="">
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <Button color='white' text="Login" />
                        <a href="/">Forgot your Password?</a>
                        <a href="/">Dont have an Account <i>Create Account?</i></a>
                </form>
            </div>
        </div>

        <div className="midle-container">
            <div className="req">
                <h1>Request</h1>
                <p>Seeking a lifeline: <br /> Request blood,get help Today.</p>
                <Button bgColor={"rgb(206, 52, 52)"} color={"white"} text="Request"/>
            </div>
            <div className="donate">
                <h1>Donate</h1>
                <p>Give the Gift of Life: <br /> Donate Blood Today!</p>
                <Button bgColor={"rgb(206, 52, 52)"} color={"white"} text="Donate" />
            </div>
            <div className="info">
                <h1>Information</h1>
                <p>Discover More about <br /> Blood Donation and Requests.</p>
                <Button bgColor={"rgb(206, 52, 52)"} color={"white"} text={"Information"} />
            </div>
        </div>

        <div className="center-container">
            <div className="view-services">
                <h1>Our Services</h1>
                <p>Unleashing the Power of Compassion: Explore our Comprehensive Services for Lifesaving Blood Donations and Beyond.</p>
                <Button bgColor={"rgb(206, 52, 52)"} color={"white"} text={"View All Services"}></Button>
            </div>
            <div className="box-services"> 
                <div className="col-left">
                    <p>Blood Donation Centers: These are physical locations where individuals can voluntarily donate blood.
                     These centers are typically run by government organizations, hospitals, or non-profit organizations 
                     dedicated to blood services. They ensure a safe and controlled environment for blood collection.</p>
                        <hr />
                    <p>Donor Eligibility Screening: Before donating blood, individuals undergo a screening process to determine their eligibility.
                     This involves assessing factors such as age, weight, medical history, recent travel, medications, and lifestyle choices to
                     ensure the safety of both the donor and the recipient.</p>
                </div>
            <div className="col-right">
            <p>Mobile Blood Drives: Mobile blood drives are organized events where blood collection teams travel to 
            various locations such as schools, workplaces, community centers, or religious institutions. This approach
             makes it more convenient for potential donors to contribute without visiting a fixed donation center.</p>
                    <hr />
             <p>Blood Collection: The actual process of blood collection is typically a simple and safe procedure. 
             A healthcare professional uses a sterile needle to draw blood from a vein in the donor's arm. The amount
              of blood collected varies depending on the donation type (whole blood or specific blood components) and local regulations.</p>
            </div>
             </div>
        </div>
            <div className="expert-doctor">
                <div className="exp-container">
                    <h1>Expert Doctors.</h1>
                    <h2>Professional Care.</h2>
                    <p>At our Blood Drive Web Application, we not only connect you to the life saving act of donating <br /> blood
                    but also bridge the gap between generosity and comprehensive healthcare.</p>
                    <Button color={"white"} text={"KNOW MORE"} />
                </div>
            </div>


            <div className="contact-container">
                <div className="contactus">
                <h3>Contact Us</h3>
                <h4>Call Us</h4>
                <p>TEL: 0703 037 000 | TOLL FREE HOTLINE: 1199</p>
                <h3>E-mail Us</h3>
                <p> Info@redcross.or.ke </p>
                <h3>Our Location</h3>
                <p>Mombasa,Docks opposite University of Nairobi</p>
                </div>
                <div className="get-in-touch">
                <h1>Get in Touch</h1>
                <input type="text"  placeholder='Name'/>
                <input type="email" name="email"  placeholder='Email' id="email" /><br />
                <textarea name="message" id="messg" cols="95" rows="10" placeholder='message here'></textarea>
                <Button text={"submit"}></Button>
                </div>
            </div>
            
            <Footer />
    </div>

  )
}

export default Hero