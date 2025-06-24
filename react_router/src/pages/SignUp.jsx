import { useState } from "react";
import "./SignUpForm.css";
import { NavLink } from "react-router-dom";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted", formData);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h2 className="title">Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>

        <div className="divider">Or Sign up with</div>
        <div className="social-icons">
          <button className="social-icon">
            <i className="fab fa-google"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-apple"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-twitter"></i>
          </button>
        </div>

        <p className="form-footer">
          Already have an account? <NavLink to="/signin">Sign In</NavLink>
        </p>

        <p className="agreement">
          By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};
