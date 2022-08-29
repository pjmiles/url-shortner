import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import "./LoginForm.css";
const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [loginError, setLogError] = useState("");
  const [success, setSuccess] = useState(false);

  let navigate = useNavigate();

  const getLoginDetails = (e) => {
    setLoginDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axiosInstance.post("/", loginDetails);
      localStorage.setItem("userData", JSON.stringify(result.data));
      setSuccess(true);
      navigate("/");
    } catch (e) {
      setSuccess(false);
      setLogError("Login failed, please try again");
      console.log(e);
    }
  };

  return (
    <>
      {success ? <div>Successful Login GO TO HOME PAGE</div> : (
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login header-text">Login</h1>
            {loginError && <span className="login-error">{loginError}</span>}
            <div className="login-control">
              <label htmlFor="email" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input-field"
                value={loginDetails.email}
                onChange={getLoginDetails}
                required
              />
            </div>
            <div className="login-control">
              <label htmlFor="password" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input-field"
                value={loginDetails.password}
                onChange={getLoginDetails}
                required
              />
            </div>
            <div className="btn-container">
              <button className="login-btn">Login</button>
            </div>
          </form>
          <div className="login-span">
            <span>
              No Account? <Link to="/signup">click here</Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
