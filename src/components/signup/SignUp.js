import './SignUp.css'

const SignUp = () => {
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
          className="input-field"
          required
        />
      </div>
      <div className="signup-control">
        <label htmlFor="password" />
        <input
          type="password"
          placeholder="Password"
          name="password"
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
          className="input-field"
          required
        />
      </div>
      <div className="btn-container">
        <button className="signup-btn">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default SignUp