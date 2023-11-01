import React from 'react'
import './Auth.css'
import { useState } from 'react'

const Auth = () => {

  const [isSignUp, setIsSignUp] = useState(false)

  const [data, setData] = useState({ firstname: "", lasname: "", password: "", confirmpass: "", username: "" })


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div className='Auth'>
      {/* left side */}
      <div className="a-left">
        <div className="Webname">
          <h1>Paste Bin</h1>
          <h6></h6>
        </div>
      </div>

      {/* right side */}
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>


          {isSignUp && <div>
            <input
              type="text"
              className="infoInput"
              name='username'
              placeholder='First Name'
              required
              onChange={handleChange}
            />

            <input type="text"
              className="infoInput"
              name='password'
              placeholder='Last Name'
              required
              onChange={handleChange}
            />

          </div>}

          <div>
            <input type="text"
              className="infoInput"
              name='username'
              placeholder='Username'
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="password"
              className="infoInput"
              name='password'
              placeholder='Password'
              required
              onChange={handleChange}
            />

            {isSignUp && <input
              type="password"
              className="infoInput"
              name='confirmpass'
              placeholder='Confirm Password'
              required
              onChange={handleChange}
            />}
          </div>

          <div className='call'>
            <span style={{ fontSize: '12px', cursor: "pointer" }} onClick={() => setIsSignUp((prev) => !prev)} >
              {isSignUp ? "Already have an account. Login" : "Don't have an aacount ? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type='submit'>
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}
export default Auth