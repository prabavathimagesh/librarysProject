import React from 'react'
import './Registor.css'
import { Link } from 'react-router-dom'

export default function RegistorPage() {

        function RegistrationFrom(){
            let usernameReg=document.getElementById("username").value
            let lastNameReg=document.getAnimations("lastname").value
            let phonenumberReg=document.getElementById("phonenumber").value
            let emailReg=document.getElementById("email").value
            let passwordReg=document.getElementById("password").value
            let rolesReg=document.getElementById("roles").value
           

            let obejectReg={
                usernameReg: usernameReg,
                lastNameReg:lastNameReg,
                phonenumberReg:phonenumberReg,
                emailReg:emailReg,
                passwordReg:passwordReg,
                rolesReg :rolesReg 
            }
            if(usernameReg ===""){
                alert("Enter a name ")
            }
            else if(lastNameReg === ""){
                alert("Enter a last Name")
            }
            else if(phonenumberReg ===""){
                alert("Enter a phone number")
            }
            else if(emailReg===""){
                alert("Enter a e-mail")
            }
            else if(passwordReg ===""){
                alert("Enter a password")
            }
            else if(rolesReg ===""){
                alert("pls select user or admine")
            }
            else{
                let localReg=JSON.stringify(obejectReg)
                localStorage.setItem(document.getElementById("email").value,localReg)
                alert("hii"+" "+ usernameReg +" "+ "your RegistrationFrom successfully save in local storage.")
                window.location.href="/Adminlogin"

            }

           
        }
   
  return (
    <div>
       <form>
    <div className='registrationFrom'>
        <h1>Re<span>gi</span>stra<span>tio</span>n From</h1>
        <div>
            <h5>First Name :</h5>
            <input type='text' id='username' required/>
        </div>
        <div>
            <h5>Last Name :</h5>
            <input type='text'  id='lastname' required/>
        </div>
        <div>
            <h5>Phone Number :</h5>
            <input type='Number'  id='phonenumber' required/>
        </div>
        <div>
            <h5>E-mail :</h5>
            <input type='email'  id='email' required/>
        </div>
        <div>
            <h5>Password :</h5>
            <input type='Password' required  id='password'/>
        </div><br></br>
        <div>
            <label for='text'>Registration : </label> 
        <select name="cars" id="roles">Role
            <optgroup label="Registrations">
                <option value="Users" >Users</option>
                <option value="Admin" >Admin</option>
            </optgroup>
        </select> 
        </div><br></br>
      <input type='button' value='submite' id='btn'  onClick={()=>RegistrationFrom()}/>
      <p className='para'>Alredy you have a account?<Link to='/Adminlogin' className='linkelogin'>Login here</Link></p>
    </div>

    </form>
    </div>
  )
}
