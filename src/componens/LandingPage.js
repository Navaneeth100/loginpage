import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div>
        <h1>WELCOME TO EMPLOYEE REGISTER</h1>
       <Link to='/register'> <button>Register Now</button></Link>

    </div>
  )
}

export default LandingPage