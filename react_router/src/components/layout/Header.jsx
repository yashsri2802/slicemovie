import { NavLink } from "react-router-dom";

export const Header = () => {
  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "#00BFFF" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt bg-zinc-900 text-white py-2">
          <div className="head container">
            <div className="head_txt">
              <p>🎬 Get a Membership — 30-day return or refund guarantee.</p>
            </div>
            <div className="sign_in_up space-x-4">
              <NavLink to="/signin">Sign In</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </div>
          </div>
        </section>

        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="navbar-brand text-2xl font-bold">
            <NavLink to="/" className="website-name">
              SliceMovie🎥
            </NavLink>
          </div>

          <nav className="navbar">
            <ul className="flex space-x-6 text-sm uppercase tracking-wide">
              <li>
                <NavLink to="/" className="nav-link" style={getNavLinkStyle}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movie"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
