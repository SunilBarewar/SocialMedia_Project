import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
const Auth = () => {
  return (
    <div className='Auth'>
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas throughout the world!</h6>
            </div>
        </div>
        {/* <SignUp/> */}
        <Login/>
    </div>
  )
}

function SignUp(){
    return (
        <div className="a-right">
            <form className='infoForm authForm'>
                
                <h3>Sign up</h3>
                <div>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder='First Name'
                        className='infoInput'
                     />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder='last Name'
                        className='infoInput'
                     />
                </div>

                <div>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder='last Name'
                        className='infoInput'
                     />
                </div>
                {/*  */}
                <div>
                    <input 
                        type="text" 
                        name="password" 
                        placeholder='Password'
                        className='infoInput'
                     />
                    <input 
                        type="text" 
                        name="confirmPassword" 
                        placeholder='Confirm Password'
                        className='infoInput'
                     />
                </div>
                
                <div>
            <span style={{fontSize: '15px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
            </form>
            
        </div>
    )
}

function Login(){
    return (
        <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
             
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    )
}
export default Auth