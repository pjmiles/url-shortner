import { useState } from "react";
import axiosInstance from "../api/axios";
import { Link } from "react-router-dom";
import "../styles/SignUpForm.css";

const SignUpForm = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [sucess, setSuccess] = useState(false); // for successful state upon signing up
  const [error, setError] = useState(""); // to show error messages assiciated with signing up

  const handleSignUpChange = (e) => {
    setSignUpDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const postRequest = async () => {
    try {
      await axiosInstance.post("dj-rest-auth/registration/", signUpDetails);
      setSuccess(true);
    } catch (e) {
      setSuccess(false);
      setError("Registration failed, please try again.");
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !signUpDetails.name ||
      !signUpDetails.email ||
      !signUpDetails.password1 ||
      !signUpDetails.password2
    ) {
      setError("Please provide details");
      setSuccess(false);
    } else if (signUpDetails.password1.length <= 7) {
      setError("Password must be more than 7 characters");
      setSuccess(false);
    } else if (signUpDetails.password1 !== signUpDetails.password2) {
      setError("Password does not match");
      setSuccess(false);
    } else {
      postRequest();
    }
  };

  return (
    <>
      {sucess ? (
        <p>
          Please Login <Link to="/login">Here</Link>
        </p>
      ) : (
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h1 className="signup header-text">SignUp</h1>
            {error && <span className="signup-error">{error}</span>}
            <div className="signup-control">
              <label htmlFor="name" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                className="input-field"
                value={signUpDetails.name}
                onChange={handleSignUpChange}
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
                value={signUpDetails.email}
                onChange={handleSignUpChange}
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
                value={signUpDetails.password1}
                onChange={handleSignUpChange}
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
                value={signUpDetails.password2}
                onChange={handleSignUpChange}
                required
              />
            </div>
            <div className="btn-container">
              <button className="signup-btn">Submit</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
