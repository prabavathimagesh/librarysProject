import React from "react";
import "./Adminlogin.css";
import { Link } from "react-router-dom";

export default function AdminloginPage() {
  function Adminlogin() {
    let emailEl = document.getElementById("emailId").value;
    let passwordEl = document.getElementById("passwordId").value;

    let obejectLogin = {
      emailEl:emailEl,
      passwordEl:passwordEl,
    };
   let aa= getDatavalue(emailEl)
   console.log(aa)
    if (aa.emailReg == emailEl) {
      if (aa.passwordReg == passwordEl) {
        if (aa.rolesReg == "Users") {
          window.location.href = "/User";
        } else if (aa.rolesReg == "Admin") {
          window.location.href = "/Admin";
        }
      }
      else{
        alert("The Password Not Correct")
      }
    }
    else{
        alert("The E-mail Not Correct")
    }
  }
  function getDatavalue(emailEl){
    var value1=localStorage.getItem(emailEl)
    return JSON.parse(value1)
  }

  return (
    <form>
      <div className="card">
        <h1>
          Admin <span>Lo</span>g<span>i</span>n Page
        </h1>
        <div>
          <h5>E-mail</h5>
          <input type="Email"  id="emailId" required/>
        </div>
        <div>
          <h5>Password</h5>
          <input type="Password"  id="passwordId" required />
        </div>
        <div>
          <input
            type="button"
            id="loginbtn"
            value="Login"
            onClick={() => Adminlogin()}
          />
        </div>
        <p>
          Alredy you have any account?
          <Link to={"/RegistrationFrom"} className="linksinup">singup</Link>
        </p>
      </div>
    </form>
  );
}
