import { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [signUpUser, setSignUpUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  })
  const [sucess, setSuccess] = useState(false) // for successful state upon signing up
  const [error, setError] = useState("") // to show error messages assiciated with signing up
  const handleSignUpChange = (e) => {
    setSignUpUser((prev) => ({
      ...prev, [e.target.value]: e.target.value.trim()
    }))
  }
  

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="signup header-text">SignUp</h1>
        <div className="signup-control">
          <label htmlFor="name" />
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            className="input-field"
            required
          />
        </div>
        <div className="signup-control">
          <label htmlFor="email" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="input-field"
            required
          />
        </div>
        <div className="signup-control">
          <label htmlFor="password1" />
          <input
            type="password"
            placeholder="Password"
            name="password1"
            id="password1"
            className="input-field"
            required
          />
        </div>
        <div className="signup-control">
          <label htmlFor="password2" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            id="password2"
            className="input-field"
            required
          />
        </div>
        <div className="btn-container">
          <button className="signup-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
