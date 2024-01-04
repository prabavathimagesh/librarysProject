import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className='card'>
      <div>
        <h1 className='head'>A library's col<span>lec</span>tion can include the College books<span>!</span> </h1>
        <p>*<u>Note :</u>All Collection of Books are available.</p>
      </div>
      <div>
        <h1 className='admin'>Admin .</h1>
        <br></br>
        <p>(* Authorized persons only Alloed here..)</p>
      </div>
      <div>
        <Link to={'/RegistrationFrom'}><input className='button' value='Login' type='button'/></Link>
      </div>
    </div>
  )
}
