import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="login header-text">Login</h1>
        <div className="login-input">
          <label htmlFor="email" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input-field"
            required
          />
        </div>
        <div className="login-input">
          <label htmlFor="password" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input-field"
            required
          />
        </div>
        <div className="btn-container">
          <button className="login-btn">Login</button>
        </div>
      </form>
      <div className="login-span">
        <span>
          No Account? <Link to="/">click here</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;