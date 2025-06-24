import "./Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="section-hero--content">
            <p className="hero-subheading">
              🍿 Dive Into the World of Entertainment
            </p>
            <h1 className="hero-heading">
              Stream Unlimited Movies & TV Shows Anytime, Anywhere
            </h1>
            <p className="hero-para">
              From thrilling blockbusters to heartwarming dramas — discover
              handpicked collections, trending titles, and the latest releases,
              all in one place.
            </p>
            <div className="hero-btn">
              <NavLink to="/movie" className="btn" end>
                Explore Now <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="section-hero-image">
            <img
              src="./movies.png"
              alt="movies poster"
              width="150"
              height="150"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
