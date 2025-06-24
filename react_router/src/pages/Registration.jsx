import { NavLink } from "react-router-dom";
import "./Registration.css";

export const RegistrationForm = () => {
  return (
    <div className="login-container">
      <div className="login-heading">Sign In</div>
      <form className="login-form">
        <input
          placeholder="E-mail Address"
          id="email"
          name="email"
          type="email"
          className="login-input"
          required
        />
        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          className="login-input"
          required
        />
        <span className="login-forgot">
          <a href="#">Forgot Password ?</a>
        </span>
        <input type="submit" value="Sign In" className="login-button" />
      </form>

      <p className="form-footer">
        Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
      </p>

      <div className="login-social-container">
        <span className="login-social-title">Or Sign in with</span>
        <div className="login-social-buttons">
          <button className="login-social-button">
            <i className="fab fa-google"></i>
          </button>
          <button className="login-social-button">
            <i className="fab fa-apple"></i>
          </button>
          <button className="login-social-button">
            <i className="fab fa-twitter"></i>
          </button>
        </div>
      </div>

      <span className="login-agreement">
        <a href="#">Learn user licence agreement</a>
      </span>
    </div>
  );
};
